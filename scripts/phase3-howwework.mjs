import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// scaling: insert a "How we work" section immediately before the founder-transition section
{
  const file = 'src/routes/scaling.tsx'
  let c = read(file)
  const rx = /\{\/\* CREAM[^}]*\}\s*<section className="sec on-cream">/
  if (c.includes('methodology vendor')) log.push('hww skip  scaling How we work (already applied)')
  else if (!rx.test(c)) log.push('hww MISS  scaling anchor  <-- not found')
  else {
    const block = `{/* CREAM — how we work */}
      <section className="sec on-cream">
        <div className="wrap">
          <span className="kicker on-cream">How we work</span>
          <h2>Process consultants, not a methodology vendor.</h2>
          <p className="body">
            We don't arrive with a program to run you through. We start by listening — to where the
            company actually is, and to how you want to proceed. That stance has a name and a
            discipline behind it: John is an Advanced Process Consultant certified by the Society of
            Process Consultants.
          </p>
          <p className="body">
            What stays constant isn't a fixed sequence of steps — it's the discipline underneath. We
            diagnose before we prescribe. We bring a deep, proven toolkit — the EOS/Traction
            operating model, the Predictable Success lifecycle, and the frameworks behind our own
            books — and we select and sequence what fits your situation, rather than forcing every
            company down the same track. And we design the engagement with you: a standing advisory
            seat, a defined sprint around a single decision, or a full operating-system build, at the
            cadence the moment calls for.
          </p>
          <div className="pullquote" style={{ borderLeftColor: 'var(--gold)' }}>
            The aim throughout is capability, not dependency. We've done the work well when the
            company can run without us.
          </div>
        </div>
      </section>

      {/* CREAM — founder transition */}
      <section className="sec on-cream">`
    write(file, c.replace(rx, block)); log.push('hww OK    scaling How we work section')
  }
}

// advising: add the process-consultant framing + capability close to the "How it works" band
{
  const file = 'src/routes/advising.tsx'
  let c = read(file)
  const rx = /(we fit the engagement to the moment\.\s*<\/p>)/
  if (c.includes('Society of Process Consultants')) log.push('hww skip  advising framing (already applied)')
  else if (!rx.test(c)) log.push('hww MISS  advising anchor  <-- not found')
  else {
    const block = `$1
          <p className="graphic-cap" style={{ marginTop: 18 }}>
            That flexibility is a discipline, not the absence of one. We're process consultants —
            John is an Advanced Process Consultant certified by the Society of Process Consultants —
            so we listen first, diagnose before we prescribe, and bring the right tools to your
            situation rather than the same track to everyone's. The aim throughout is capability, not
            dependency: we've done the work well when you can run it without us.
          </p>`
    write(file, c.replace(rx, block)); log.push('hww OK    advising process-consultant framing')
  }
}

console.log('\n=== Phase 3 · How we work ===')
console.log(log.join('\n'))
