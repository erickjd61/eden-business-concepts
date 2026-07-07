import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// Every route that uses seoHead. archive + thrive-space already carry path (migrated).
// insights.$slug has its own dynamic canonical. __root has no page canonical.
const FILES = [
  'index','scaling','leadership','advising','conflict','books','about','contact','snapshot',
  'root-motivations','faq','who-we-serve','work.index','work.servicemaster','work.mainstream',
  'work.theflowstashon','insights.index','privacy','terms',
].map(n => `src/routes/${n}.tsx`)

for (const file of FILES) {
  let c
  try { c = read(file) } catch { log.push('canon MISS  ' + file + '  <-- file not found'); continue }
  if (!c.includes('seoHead({')) { log.push('canon MISS  ' + file + '  <-- no seoHead'); continue }
  if (c.includes('seoHead({ path:')) { log.push('canon skip  ' + file + ' (already has path)'); continue }
  const m = /createFileRoute\('([^']+)'\)/.exec(c)
  if (!m) { log.push('canon MISS  ' + file + '  <-- no createFileRoute path'); continue }
  c = c.replace('seoHead({', `seoHead({ path: '${m[1]}',`)
  write(file, c); log.push(`canon OK    ${file}  (path '${m[1]}')`)
}
console.log('\n=== canonical path injection ===')
console.log(log.join('\n'))
