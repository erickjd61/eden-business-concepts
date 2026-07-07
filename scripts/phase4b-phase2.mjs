import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// footer: add Who We Serve + FAQ links after About
{
  const file = 'src/components/SiteFooter.tsx'
  let c = read(file)
  const find = '<Link to="/about">About</Link>'
  const repl = '<Link to="/about">About</Link>\n          <Link to="/who-we-serve">Who We Serve</Link>\n          <Link to="/faq">FAQ</Link>'
  if (c.includes('/who-we-serve')) log.push('p42 skip  footer links (already applied)')
  else if (!c.includes(find)) log.push('p42 MISS  footer anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('p42 OK    footer Who We Serve + FAQ') }
}

// index: homepage serve section -> who-we-serve cross-link
{
  const file = 'src/routes/index.tsx'
  let c = read(file)
  const rx = /(you rarely get one without the other\.\s*<\/p>)/
  if (c.includes('More on who we serve')) log.push('p42 skip  homepage who-we-serve link (already applied)')
  else if (!rx.test(c)) log.push('p42 MISS  homepage anchor  <-- not found')
  else {
    const block = `$1
            <p style={{ marginTop: 20 }}>
              <Link to="/who-we-serve" style={{ color: 'var(--gold)' }}>More on who we serve →</Link>
            </p>`
    write(file, c.replace(rx, block)); log.push('p42 OK    homepage who-we-serve link')
  }
}

// about: add the faith sentence as a new paragraph in "What drives us"
{
  const file = 'src/routes/about.tsx'
  let c = read(file)
  const rx = /(respond to people and situations the way you do\.<\/b>\s*<\/p>)/
  if (c.includes('a matter of the heart')) log.push('p42 skip  about faith sentence (already applied)')
  else if (!rx.test(c)) log.push('p42 MISS  about anchor  <-- not found')
  else {
    const block = `$1
          <p>
            Our work is informed by a conviction that leadership is, at root, a matter of the heart.
            That conviction runs through our books and shapes how we advise — and we serve leaders of
            every background, faith or none.
          </p>`
    write(file, c.replace(rx, block)); log.push('p42 OK    about faith sentence')
  }
}

// snapshot: add Link to the import
{
  const file = 'src/routes/snapshot.tsx'
  let c = read(file)
  const find = "import { createFileRoute } from '@tanstack/react-router'"
  const repl = "import { createFileRoute, Link } from '@tanstack/react-router'"
  if (c.includes("import { createFileRoute, Link }")) log.push('p42 skip  snapshot Link import (already applied)')
  else if (!c.includes(find)) log.push('p42 MISS  snapshot import anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('p42 OK    snapshot Link import') }
}

// snapshot: add the "About this tool" block after the Begin button
{
  const file = 'src/routes/snapshot.tsx'
  let c = read(file)
  const find = '>Begin</button>'
  if (c.includes('About this tool')) log.push('p42 skip  snapshot About block (already applied)')
  else if (!c.includes(find)) log.push('p42 MISS  snapshot Begin anchor  <-- not found')
  else {
    const block = `>Begin</button>
              <div style={{ marginTop: 44, paddingTop: 26, borderTop: '1px solid var(--line)', maxWidth: 560 }}>
                <p style={{ margin: 0, color: 'var(--cream-dim)', fontSize: 15, lineHeight: 1.6 }}>
                  <b style={{ color: 'var(--cream)' }}>About this tool.</b> The Snapshot grew out of three
                  decades of advisory and counseling practice. It's a structured self-reflection
                  exercise, not a validated psychological assessment — a way to notice what tends to
                  drive you and to start a better conversation, not a clinical measure and not a tool
                  for hiring or selection.
                </p>
                <p style={{ marginTop: 14, marginBottom: 0, color: 'var(--cream-dim)', fontSize: 15, lineHeight: 1.6 }}>
                  Your answers are used to generate your results and, if you'd like, to help us improve
                  the tool. We don't sell them or share them with advertisers. See our{' '}
                  <Link to="/privacy" style={{ color: 'var(--gold-br)' }}>privacy policy</Link> for details.
                </p>
              </div>`
    write(file, c.replace(find, block)); log.push('p42 OK    snapshot About this tool block')
  }
}

console.log('\n=== Phase 4.3/4.4 + Phase 2.1/2.2 ===')
console.log(log.join('\n'))
