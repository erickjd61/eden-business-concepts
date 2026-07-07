import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// ---- 1.1 per-page metadata ----
const PAGES = {
  'src/routes/index.tsx':      { title: 'Eden Business Concepts · A heart-focused approach to scaling and leadership', description: "Operational rigor and human depth from one team. Eden helps owners of closely held and family businesses scale, lead, and navigate what's hard." },
  'src/routes/scaling.tsx':    { title: 'Scaling · Eden Business Concepts', description: "Build the operating system your company runs on, so it's an asset — not a job that owns you. We integrate Traction/EOS tools into how the business works." },
  'src/routes/leadership.tsx': { title: 'Leadership Development · Eden Business Concepts', description: 'Form leaders with the depth to carry weight — developing owners, successors, and teams in closely held and family-owned businesses.' },
  'src/routes/advising.tsx':   { title: 'Strategic Advising · Eden Business Concepts', description: 'A senior thinking partner for strategy, succession, org design, and the hard personnel calls owners of closely held businesses face.' },
  'src/routes/conflict.tsx':   { title: 'Conflict Transformation · Eden Business Concepts', description: 'Move through conflict without breaking the relationship or the business — a proven five-stage path for teams under real strain.' },
  'src/routes/books.tsx':      { title: 'Books · Eden Business Concepts', description: "Eight books on leadership, motivation, and the formed life — the frameworks behind Eden's advising work with leaders and owners." },
  'src/routes/about.tsx':      { title: 'About · Eden Business Concepts', description: 'Two credentialed principals and thirty-five years of shared work, since 1991, advising closely held and family businesses.' },
  'src/routes/contact.tsx':    { title: 'Contact · Eden Business Concepts', description: "Tell us where the company is and what's keeping you up at night. Start a conversation with Eden Business Concepts." },
  'src/routes/snapshot.tsx':   { title: 'Root Motivation Snapshot · Eden Business Concepts', description: 'A twelve-question reflection on what drives you as a leader — Respect, Value, or Approval. A few honest minutes, a starting point.' },
}
const injectRx = /(createFileRoute\([^)]*\)\(\{)/
for (const [file, m] of Object.entries(PAGES)) {
  let c = read(file); const before = c
  if (!c.includes("from '../lib/seo'"))
    c = c.replace('export const Route', "import { seoHead } from '../lib/seo'\n\nexport const Route")
  if (!c.includes('seoHead({'))
    c = c.replace(injectRx, `$1\n  head: () => seoHead({ title: ${JSON.stringify(m.title)}, description: ${JSON.stringify(m.description)} }),`)
  if (c !== before) { write(file, c); log.push('meta  OK    ' + file) }
  else log.push('meta  skip  ' + file + ' (already present)')
}

// ---- content edits ----
const patches = [
  ['src/routes/index.tsx',    'A licensed clinical counselor with thirty years', 'A Licensed Clinical Professional Counselor (LCPC) in Illinois and Wisconsin, with thirty years', '1.5 LCPC (index)'],
  ['src/routes/about.tsx',    'A licensed clinical counselor with thirty years', 'A Licensed Clinical Professional Counselor (LCPC) in Illinois and Wisconsin, with thirty years', '1.5 LCPC (about)'],
  ['src/routes/about.tsx',    'thirty-five years of shared work across business,', 'thirty-five years of shared work — together since 1991 — across business,', '1.5 since 1991 (about)'],
  ['src/routes/about.tsx',    'doctoral coursework on conflict and leadership.', 'doctoral coursework on conflict and leadership. Both are also certified conflict mediators through Live at Peace.', '1.5 Live at Peace (about)'],
  ['src/routes/conflict.tsx', 'Dennis brings a licensed clinical counselor', 'Dennis, a Licensed Clinical Professional Counselor (LCPC) licensed in Illinois and Wisconsin, brings a clinician', '1.5 LCPC (conflict)'],
  ['src/routes/conflict.tsx', 'oriented toward the business moving forward.', "oriented toward the business moving forward. We're both certified conflict mediators through Live at Peace.", '1.5 Live at Peace (conflict)'],
  ['src/routes/scaling.tsx',  'the way the company actually runs, in every function.', "the way the company actually runs, in every function. We're not affiliated with EOS Worldwide: we support implementation of the Traction/EOS model developed by Gino Wickman, serving as fractional integrators under the guidance of a certified EOS Implementer.", '1.3 EOS attribution (scaling)'],
  ['src/routes/scaling.tsx',  'Every company climbs through Early Struggle', 'Predictable Success is the business lifecycle model developed by Les McKeown. Every company climbs through Early Struggle', '1.3 Predictable Success attribution (scaling)'],
  ['src/routes/snapshot.tsx', 'Which way you lean when the fit is rough is itself part of the answer.', 'An imperfect fit still tells you something worth reflecting on.', '1.6 cut projective line (snapshot)'],
  ['src/components/SiteFooter.tsx', '<Link to="/archive">Archive</Link>', '<Link to="/archive">Archive</Link>\n          <Link to="/privacy">Privacy</Link>\n          <Link to="/terms">Terms</Link>', '1.4 footer legal links'],
]
for (const [file, find, replace, label] of patches) {
  let c = read(file)
  if (c.includes(replace)) { log.push('edit  skip  ' + label + ' (already applied)'); continue }
  if (!c.includes(find))   { log.push('edit  MISS  ' + label + '  <-- anchor not found in ' + file); continue }
  write(file, c.replace(find, replace)); log.push('edit  OK    ' + label)
}
console.log('\n=== Phase 1 codemod ===')
console.log(log.join('\n'))
