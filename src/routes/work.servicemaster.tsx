import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/work/servicemaster')({
  head: () =>
    seoHead({ path: '/work/servicemaster',
      title: 'ServiceMaster Commercial Cleaning Services · Eden Business Concepts',
      description:
        'How a founder-led commercial cleaning company moved from operational reactions to intentional, systematized growth — a business scaling case.',
    }),
  component: ServiceMasterCase,
})

function ServiceMasterCase() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">In practice · Comprehensive Business Scaling</span>
          <h1>ServiceMaster Commercial Cleaning Services</h1>
          <p className="lede">
            A founder-led commercial cleaning company, strong in its markets, carrying the classic
            scaling problem — the business ran through its owner. Here's how it moved from
            operational reactions to intentional, systematized growth.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          <h2>The situation</h2>
          <p>
            The company had real strength in Chicago and Indianapolis and a clear appetite to grow.
            But growth meant more weight on the same few shoulders. Expansion had no repeatable
            blueprint, and business development happened by relationship and reflex rather than by
            system. To scale — and to open new markets — the company needed to run on structure
            instead of on its founder.
          </p>

          <h2>What we did</h2>
          <p>
            We installed the operating system the company now runs on. Working with Dave Moore as
            Visionary and Devin Moore as Integrator, we built the leadership structure around the
            Traction/EOS model — clear roles, a weekly scorecard of the numbers that tell the truth,
            and a quarterly rhythm we facilitate.
          </p>
          <p>
            We stood up a business development department from the ground up, documented and
            stage-gated so it produces the same result whoever runs it. We built a repeatable
            playbook for opening a new market and put it to work. We developed the general managers
            who carry it, pairing strategic coaching with regular processing support. And we
            connected the operation to a technology stack that runs the business day to day — down
            to a weekly engine that turns commercial-construction activity into a routed call list
            for the field.
          </p>

          <h2>Where it stands</h2>
          <p>
            ServiceMaster has moved from a founder-dependent operation toward one that runs on its
            system: a leadership team accountable to a shared scorecard, a repeatable model for
            growth, and a pipeline that no longer lives in any one person's memory. The company is
            building toward new markets from a foundation designed to carry them.
          </p>
          {/* TODO(owner): add 1-2 quantified outcomes here (e.g. markets opened, revenue or pipeline growth over a period, headcount then vs. now, time from founder-dependent to running without the founder). Do not invent numbers. */}
        </div>
      </section>

      <section className="sec on-dark voice">
        <div className="wrap">
          <blockquote>
            "John and Dennis have brought structure, focus, clarity, and accountability into our
            business with the EOS model. They have led us to move away from operational reactions to
            intentional growth. Our business would not have the greater future we are moving toward
            with their insight and leadership."
          </blockquote>
          <b>Devin Moore</b> · Integrator, ServiceMaster Commercial Cleaning Services
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
