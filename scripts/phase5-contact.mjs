import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// contact: add a Calendly "book 30 minutes" button as the primary CTA
{
  const file = 'src/routes/contact.tsx'
  let c = read(file)
  const find = '<h2>Reach us</h2>'
  if (c.includes('calendly.com/john-erickson-meeting')) log.push('p5 skip  contact scheduling (already applied)')
  else if (!c.includes(find)) log.push('p5 MISS  contact anchor  <-- not found')
  else {
    const block = `<p style={{ marginTop: 0, marginBottom: 8 }}>
            <a className="btn btn-gold" href="https://calendly.com/john-erickson-meeting/30min" target="_blank" rel="noopener noreferrer">Book a 30-minute conversation →</a>
          </p>
          <p className="note" style={{ marginTop: 0, marginBottom: 36 }}>
            Pick a time that works — or reach us directly below.
          </p>
          <h2>Reach us</h2>`
    write(file, c.replace(find, block)); log.push('p5 OK    contact scheduling link')
  }
}

console.log('\n=== Phase 5.1 · contact scheduling ===')
console.log(log.join('\n'))
