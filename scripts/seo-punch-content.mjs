import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

// item 5 — spelling in index.tsx (title only; NOT the image filename)
{
  const file = 'src/routes/index.tsx'
  let c = read(file)
  if (!c.includes("'When the Word Comes Worshipping'")) log.push('spell skip  index title (not found / already fixed)')
  else { write(file, c.replace("'When the Word Comes Worshipping'", "'When the Word Comes Worshiping'")); log.push('spell OK    index book title') }
}

// item 5 — spelling in books.tsx (title only)
{
  const file = 'src/routes/books.tsx'
  let c = read(file)
  if (!c.includes("'When the Word Comes Worshipping'")) log.push('spell skip  books title (not found / already fixed)')
  else { write(file, c.replace("'When the Word Comes Worshipping'", "'When the Word Comes Worshiping'")); log.push('spell OK    books book title') }
}

// item 7 — homepage testimonial swap: Shockey -> Devin, Mead -> Lou (keep Ballard, Clarke)
{
  const file = 'src/routes/index.tsx'
  let c = read(file)
  const devin = `<figure className="testi">
              <blockquote>"John and Dennis have brought structure, focus, clarity, and accountability into our business with the EOS model. They have led us to move away from operational reactions to intentional growth. Our business would not have the greater future we are moving toward with their insight and leadership."</blockquote>
              <figcaption><b>Devin Moore</b>Integrator · ServiceMaster Commercial Cleaning Services</figcaption>
            </figure>`
  const lou = `<figure className="testi">
              <blockquote>"Dennis and John have been critical advisors for us to move Mainstream from a three-person on-call business to a growing provider to large commercial real estate clients."</blockquote>
              <figcaption><b>Lou Rotella</b>Vice President · Mainstream Real Estate Services</figcaption>
            </figure>`
  const rxShockey = /<figure className="testi">(?:(?!<\/figure>)[\s\S])*?Bob Shockey(?:(?!<\/figure>)[\s\S])*?<\/figure>/
  const rxMead = /<figure className="testi">(?:(?!<\/figure>)[\s\S])*?Jason Mead(?:(?!<\/figure>)[\s\S])*?<\/figure>/
  if (c.includes('Devin Moore')) log.push('testi skip  homepage swap (already applied)')
  else if (!rxShockey.test(c) || !rxMead.test(c)) log.push('testi MISS  homepage figures  <-- anchor not found')
  else {
    c = c.replace(rxShockey, devin).replace(rxMead, lou)
    write(file, c); log.push('testi OK    homepage Shockey->Devin, Mead->Lou')
  }
}

// item 8 — ServiceMaster case metrics TODO
{
  const file = 'src/routes/work.servicemaster.tsx'
  let c = read(file)
  const find = 'building toward new markets from a foundation designed to carry them.\n          </p>'
  const repl = `building toward new markets from a foundation designed to carry them.
          </p>
          {/* TODO(owner): add 1-2 quantified outcomes here (e.g. markets opened, revenue or pipeline growth over a period, headcount then vs. now, time from founder-dependent to running without the founder). Do not invent numbers. */}`
  if (c.includes('TODO(owner): add 1-2 quantified')) log.push('todo skip  servicemaster metrics (already applied)')
  else if (!c.includes(find)) log.push('todo MISS  servicemaster anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('todo OK    servicemaster metrics TODO') }
}

// item 9 — THEFLOWSTASHON case: founder quote + outcome TODO
{
  const file = 'src/routes/work.theflowstashon.tsx'
  let c = read(file)
  const find = 'The two run together on purpose: the business grows as they do.\n          </p>'
  const repl = `The two run together on purpose: the business grows as they do.
          </p>
          {/* TODO(owner): add a founder quote from Carla and one concrete outcome (e.g. launch date, customers or locations, a revenue or traction milestone). Do not invent them. */}`
  if (c.includes('TODO(owner): add a founder quote')) log.push('todo skip  theflowstashon (already applied)')
  else if (!c.includes(find)) log.push('todo MISS  theflowstashon anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('todo OK    theflowstashon TODO') }
}

// item 10 — FAQ engagement answer TODO
{
  const file = 'src/routes/faq.tsx'
  let c = read(file)
  const find = "  { q: 'What does an engagement actually look like?', a:"
  const repl = "  // TODO(owner): replace this answer with real text covering first-90-days output, meeting cadence, and typical duration.\n  { q: 'What does an engagement actually look like?', a:"
  if (c.includes('TODO(owner): replace this answer')) log.push('todo skip  faq engagement (already applied)')
  else if (!c.includes(find)) log.push('todo MISS  faq anchor  <-- not found')
  else { write(file, c.replace(find, repl)); log.push('todo OK    faq engagement TODO') }
}

console.log('\n=== SEO punch list — content edits ===')
console.log(log.join('\n'))
