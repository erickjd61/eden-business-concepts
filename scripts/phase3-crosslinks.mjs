import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// scaling: swap the "client named privately on request" pullquote for Devin's quote + case link
{
  const file = 'src/routes/scaling.tsx'
  let c = read(file)
  const rx = /<div className="pullquote"[\s\S]*?client named privately on request<\/span>\s*<\/div>/
  if (c.includes('Devin Moore · ServiceMaster')) log.push('cross skip  scaling pullquote (already applied)')
  else if (!rx.test(c)) log.push('cross MISS  scaling pullquote  <-- anchor not found')
  else {
    const block = `<div className="pullquote" style={{ borderLeftColor: 'var(--gold)' }}>
            "John and Dennis have brought structure, focus, clarity, and accountability into our
            business with the EOS model. They have led us to move away from operational reactions to
            intentional growth. Our business would not have the greater future we are moving toward
            with their insight and leadership."
            <span>Devin Moore · ServiceMaster Commercial Cleaning Services</span>
          </div>
          <p style={{ marginTop: 20 }}>
            <Link to="/work/servicemaster" style={{ color: 'var(--gold-br)' }}>Read the ServiceMaster case →</Link>
          </p>`
    write(file, c.replace(rx, block)); log.push('cross OK    scaling ServiceMaster pullquote')
  }
}

// advising: add Mainstream pullquote + case link after the family-held paragraph
{
  const file = 'src/routes/advising.tsx'
  let c = read(file)
  const rx = /(in the same conversation\.\s*<\/p>)/
  if (c.includes('Lou Rotella · Mainstream')) log.push('cross skip  advising Mainstream (already applied)')
  else if (!rx.test(c)) log.push('cross MISS  advising anchor  <-- not found')
  else {
    const block = `$1
          <div className="pullquote" style={{ borderLeftColor: 'var(--gold)', marginTop: 32 }}>
            "Dennis and John have been critical advisors for us to move Mainstream from a
            three-person on-call business to a growing provider to large commercial real estate
            clients."
            <span>Lou Rotella · Mainstream Real Estate Services</span>
          </div>
          <p style={{ marginTop: 20 }}>
            <Link to="/work/mainstream" style={{ color: 'var(--gold-br)' }}>Read the Mainstream case →</Link>
          </p>`
    write(file, c.replace(rx, block)); log.push('cross OK    advising Mainstream case')
  }
}

// footer: add Work link after Leadership
{
  const file = 'src/components/SiteFooter.tsx'
  let c = read(file)
  const find = '<Link to="/leadership">Leadership</Link>'
  const repl = '<Link to="/leadership">Leadership</Link>\n          <Link to="/work">Work</Link>'
  if (c.includes('<Link to="/work">Work</Link>')) log.push('cross skip  footer Work link (already applied)')
  else if (!c.includes(find)) log.push('cross MISS  footer anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('cross OK    footer Work link') }
}

console.log('\n=== Phase 3 cross-links ===')
console.log(log.join('\n'))
