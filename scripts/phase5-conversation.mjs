import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

const file = 'src/routes/snapshot.tsx'
let c = read(file)
const find = 'not the last word.</p>'
if (c.includes('a good place to begin a conversation')) log.push('convo skip  report CTA (already applied)')
else if (!c.includes(find)) log.push('convo MISS  report note anchor  <-- not found')
else {
  const block = `not the last word.</p>

              <div style={{ marginTop: 48, paddingTop: 40, borderTop: '1px solid var(--line)', textAlign: 'center' }}>
                <p style={{ color: 'var(--cream)', fontSize: 18, lineHeight: 1.6, maxWidth: 520, margin: '0 auto 22px' }}>
                  Your root is a good place to begin a conversation. If it would help to think it
                  through together — about your leadership, your team, or the company you're building
                  — we'd be glad to talk.
                </p>
                <a className="btn btn-gold" href="https://calendly.com/john-erickson-meeting/30min" target="_blank" rel="noopener noreferrer">Book a 30-minute conversation →</a>
              </div>`
  write(file, c.replace(find, block)); log.push('convo OK    report conversation CTA')
}
console.log('\n=== Phase 5 · Snapshot result conversation offer ===')
console.log(log.join('\n'))
