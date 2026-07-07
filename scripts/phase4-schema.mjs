import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// books.tsx: add Book ItemList schema
{
  const file = 'src/routes/books.tsx'
  let c = read(file)
  if (c.includes("from '../components/JsonLd'")) log.push('schema skip  books.tsx (already applied)')
  else if (!c.includes("import { seoHead } from '../lib/seo'") || !c.includes('<main>')) log.push('schema MISS  books.tsx anchors  <-- not found')
  else {
    c = c.replace("import { seoHead } from '../lib/seo'", "import { seoHead } from '../lib/seo'\nimport { JsonLd } from '../components/JsonLd'\nimport { booksSchema } from '../lib/schema'")
    c = c.replace('<main>', '<main>\n      <JsonLd data={booksSchema} />')
    write(file, c); log.push('schema OK    books.tsx Book ItemList')
  }
}

// footer: add Root Motivations link after Insights
{
  const file = 'src/components/SiteFooter.tsx'
  let c = read(file)
  const find = '<Link to="/insights">Insights</Link>'
  const repl = '<Link to="/insights">Insights</Link>\n          <Link to="/root-motivations">Root Motivations</Link>'
  if (c.includes('/root-motivations')) log.push('schema skip  footer Root Motivations link (already applied)')
  else if (!c.includes(find)) log.push('schema MISS  footer anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('schema OK    footer Root Motivations link') }
}

console.log('\n=== Phase 4 · schema wiring ===')
console.log(log.join('\n'))
