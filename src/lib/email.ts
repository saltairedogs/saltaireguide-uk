export type EmailAttachment = { filename: string; content: string; contentType?: string }

export async function sendEmail(opts: {
  to: string | string[]
  from?: string
  subject: string
  text?: string
  html?: string
  attachments?: EmailAttachment[]
}) {
  const apiKey = process.env.RESEND_API_KEY
  const from = opts.from || process.env.FORM_FROM || 'noreply@saltaireguide.uk'
  const to = Array.isArray(opts.to) ? opts.to : [opts.to]

  if (!apiKey) {
    console.warn('[email] RESEND_API_KEY missing — logging email instead')
    console.log({ ...opts, from, to })
    return { ok: true, simulated: true }
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      from,
      to,
      subject: opts.subject,
      text: opts.text,
      html: opts.html,
      attachments: opts.attachments,
    }),
  })

  if (!res.ok) {
    const msg = await safeText(res)
    console.error('[email] Resend send failed', res.status, msg)
    return { ok: false, status: res.status, error: msg }
  }
  return { ok: true }
}

async function safeText(r: Response) {
  try { return await r.text() } catch { return '<no-body>' }
}

export async function filesToAttachments(files: File[], limit = 5, maxBytes = 5 * 1024 * 1024): Promise<EmailAttachment[]> {
  const out: EmailAttachment[] = []
  for (const f of files.slice(0, limit)) {
    try {
      const ab = await f.arrayBuffer()
      if (ab.byteLength > maxBytes) continue
      const b64 = Buffer.from(ab).toString('base64')
      out.push({ filename: f.name || 'upload', content: b64, contentType: f.type || 'application/octet-stream' })
    } catch (e) {
      console.warn('[email] failed to attach file', f.name, e)
    }
  }
  return out
}

export function h(strings: TemplateStringsArray, ...values: any[]) {
  // Tiny HTML tag helper for readability
  return String.raw({ raw: strings }, ...values)
}
