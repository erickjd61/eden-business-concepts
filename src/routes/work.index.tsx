import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/work/')({
  head: () =>
    seoHead({ path: '/work/',
      title: 'Our Work · Eden Business Concepts',
      description:
        'Real engagements, in practice — scaling founder-led companies and advising family-held businesses toward intentional, systematized growth.',
    }),
  component: Work,
})

const CASES = [
  {
    to: '/work/servicemaster',
    line: 'Comprehensive Business Scaling',
    name: 'ServiceMaster Commercial Cleaning Services',
    blurb:
      'A founder-led cleaning company moves from operational reactions to intentional growth — an operating system, a repeatable market playbook, and a leadership team accountable to it.',
  },
  {
    to: '/work/mainstream',
    line: 'Strategic Advising',
    name: 'Mainstream Real Estate Services',
    blurb:
      'Seven years advising a family-held firm as it grew from a three-person, on-call operation into a provider to large commercial real estate clients.',
  },
  {
    to: '/work/theflowstashon',
    line: 'Comprehensive Business Scaling',
    name: 'THEFLOWSTASHON XTRM',
    blurb:
      'From an idea to a fully functioning business through our scaling process, with ongoing coaching for the founding team.',
  },
]

function Work() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Our work</span>
          <h1>The proof is in the <em>practice.</em></h1>
          <p className="lede">
            The same combination — operational rigor and human depth — across three very different
            companies. Named clients, real engagements, in their own words.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          {CASES.map((c) => (
            <div key={c.name} style={{ marginBottom: 44 }}>
              <span className="kicker on-cream">{c.line}</span>
              <h2 style={{ marginTop: 10, marginBottom: 10 }}>{c.name}</h2>
              <p style={{ marginTop: 0 }}>{c.blurb}</p>
              <Link to={c.to} style={{ color: 'var(--gold-br)' }}>Read the case →</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
