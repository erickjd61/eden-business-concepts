import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/work/theflowstashon')({
  head: () =>
    seoHead({
      title: 'THEFLOWSTASHON XTRM · Eden Business Concepts',
      description:
        'From an idea to a fully functioning business through our scaling process, with ongoing advising and coaching for the founders.',
    }),
  component: FlowstashonCase,
})

function FlowstashonCase() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">In practice · Comprehensive Business Scaling</span>
          <h1>THEFLOWSTASHON XTRM</h1>
          <p className="lede">
            From an idea to a fully functioning business — and a founding team we continue to coach
            as it grows.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          <h2>From idea to business</h2>
          <p>
            We took founder Carla Cid de Diego from an idea to a fully functioning business through
            our scaling process — the structure, the systems, and the operating discipline that turn
            a vision into something that runs.
          </p>

          <h2>What we do now</h2>
          <p>
            We continue to advise and coach Carla and her partner Tashon Marté — on marketing, lead
            generation, client experience, and tracking client progress, alongside their own personal
            growth as leaders. The two run together on purpose: the business grows as they do.
          </p>
        </div>
      </section>

      <section className="sec on-cream">
        <div className="wrap">
          <p style={{ marginTop: 0 }}>
            <Link to="/work" className="btn btn-ghost">All work</Link>{' '}
            <Link to="/contact" className="btn btn-gold" style={{ marginLeft: 8 }}>Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
