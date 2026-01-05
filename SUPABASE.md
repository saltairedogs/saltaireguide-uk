# Supabase Database Schema - Saltaire Guide

**Project:** saltaireguide.uk
**Supabase URL:** https://dfdieewymxuxutwrsuna.supabase.co
**Last Updated:** 2026-01-05

---

## Tables Overview

All Saltaire Guide tables are prefixed with `saltaireguide_` or use the legacy `business_submissions` name to avoid conflicts with other projects in the same Supabase instance.

---

## 1. `saltaireguide_form_submissions`

**Purpose:** Stores all form submissions from the website (contact, contribute, newsletter, WhatsApp, listings)

**Created:** 2026-01-05
**Migration:** `supabase/migrations/20260105_create_saltaireguide_form_submissions.sql`

### Schema

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `created_at` | TIMESTAMPTZ | Submission timestamp |
| `form_name` | TEXT | Form identifier (e.g., "Contact", "Newsletter signup") |
| `path` | TEXT | URL path where form was submitted |
| `data` | JSONB | All form fields in flexible JSON format |
| `user_agent` | TEXT | Browser user agent |
| `ip_address` | TEXT | Submitter IP address |
| `status` | TEXT | Processing status: 'pending', 'processed', 'archived' |
| `processed_at` | TIMESTAMPTZ | When admin processed this |
| `processed_by` | UUID | Admin user who processed (FK to auth.users) |
| `notes` | TEXT | Admin notes |

### Indexes
- `idx_saltaireguide_form_submissions_created_at` - Sort by date
- `idx_saltaireguide_form_submissions_form_name` - Filter by form type
- `idx_saltaireguide_form_submissions_status` - Filter by status

### RLS Policies
- **INSERT:** Anyone (anon/authenticated) can submit forms
- **SELECT/UPDATE/DELETE:** Only authenticated admins

### API Endpoint
- **POST** `/api/submit-form` - Handles all form submissions

### Form Types
- Contact form (`/contact`)
- Contribute form (`/contribute`)
- Newsletter signup (footer/popups)
- WhatsApp join requests (popup)
- Business listing requests (`/local-services/[category]`)

---

## 2. `business_submissions`

**Purpose:** Stores business listing submissions for moderation

**Created:** Pre-existing (legacy table, not renamed for backward compatibility)
**Admin Panel:** `/admin/submissions`

### Schema

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `created_at` | TIMESTAMPTZ | Submission timestamp |
| `updated_at` | TIMESTAMPTZ | Last update timestamp |
| `status` | TEXT | 'pending', 'approved', 'denied' |
| `site_slug` | TEXT | Site identifier |
| `submitter_name` | TEXT | Person who submitted |
| `submitter_email` | TEXT | Submitter email |
| `name` | TEXT | Business name |
| `categories` | TEXT[] | Business categories |
| `price_range` | TEXT | Price range indicator |
| `address` | TEXT | Business address |
| `postcode` | TEXT | UK postcode |
| `phone` | TEXT | Contact phone |
| `website` | TEXT | Business website URL |
| `instagram` | TEXT | Instagram handle |
| `facebook` | TEXT | Facebook URL |
| `short_desc` | TEXT | Short description |
| `long_desc` | TEXT | Detailed description |
| `payload` | JSONB | Additional data |
| `owner_id` | UUID | Business owner (FK to auth.users) |

### RLS Policies
- Complex admin-only access policies

---

## Environment Variables Required

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://dfdieewymxuxutwrsuna.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Migration Guide

### Running Migrations

**Option 1: Supabase Dashboard (Recommended)**
1. Go to https://supabase.com/dashboard/project/dfdieewymxuxutwrsuna/sql/new
2. Copy SQL from migration file
3. Execute

**Option 2: Supabase CLI**
```bash
supabase db push
```

### Pending Migrations
- ✅ `20260105_create_saltaireguide_form_submissions.sql` - Run this in Supabase dashboard

---

## Admin Access

View submissions in the admin panel:
- **Form submissions:** Create admin view at `/admin/form-submissions` (TODO)
- **Business submissions:** https://saltaireguide.uk/admin/submissions

---

## Notes

- All table/policy names are prefixed with `saltaireguide_` to avoid conflicts
- The `business_submissions` table uses legacy naming (no prefix) for backward compatibility
- RLS (Row Level Security) is enabled on all tables
- Anonymous users can INSERT into form submissions but cannot read them
- Only authenticated admin users can view/manage submissions

---

## Future Tables

When adding new tables, follow this naming convention:
- **Table name:** `saltaireguide_{feature_name}`
- **Indexes:** `idx_saltaireguide_{table}_{column}`
- **Policies:** `saltaireguide_{action}_{description}`

Example:
```sql
CREATE TABLE saltaireguide_reviews (...);
CREATE INDEX idx_saltaireguide_reviews_created_at ON saltaireguide_reviews(created_at);
CREATE POLICY "saltaireguide_allow_public_reviews" ON saltaireguide_reviews ...;
```
