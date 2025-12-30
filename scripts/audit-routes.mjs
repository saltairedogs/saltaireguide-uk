import fs from "fs";
import path from "path";

const APP_DIR = path.join(process.cwd(), "src", "app");
const IGNORE = new Set(["api", "_components", "_lib"]);

function isKebab(s) {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(s);
}

function walk(dir, prefix = "") {
  const out = [];
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".") || IGNORE.has(name)) continue;
    const full = path.join(dir, name);
    const rel = path.join(prefix, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      // Next route groups: (group)
      const isGroup = /^\(.*\)$/.test(name);
      out.push({ rel, isDir: true, isGroup, kebab: isGroup ? true : isKebab(name) });
      out.push(...walk(full, rel));
    }
  }
  return out;
}

const rows = walk(APP_DIR).filter(r => r.isDir);

// report: non-kebab directories that are not (group)
const bad = rows.filter(r => !r.kebab);

console.log("NON-KEBAB DIRECTORIES:");
for (const r of bad) console.log(" -", r.rel);

// report: potential duplicates by last segment (rough heuristic)
const byLeaf = new Map();
for (const r of rows) {
  const leaf = r.rel.split(path.sep).pop();
  if (!byLeaf.has(leaf)) byLeaf.set(leaf, []);
  byLeaf.get(leaf).push(r.rel);
}

console.log("\nPOTENTIAL DUPLICATES (same leaf name appears multiple times):");
for (const [leaf, list] of byLeaf.entries()) {
  if (list.length > 1 && !leaf.startsWith("[") && !leaf.startsWith("(")) {
    console.log(` - ${leaf}:`);
    for (const x of list) console.log("    ", x);
  }
}
