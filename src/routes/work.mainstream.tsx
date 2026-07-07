import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/work/mainstream')({
  head: () =>
    seoHead({
      title: 'Mainstream Real Estate Services · Eden Business Concepts',
      description:
        'Seven years of strategic advising alongside a family-held firm as it grew from a three-person operation into a provider to large commercial clients.',
    }),
  component: MainstreamCase,
})

function MainstreamCase() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">In practice · Strategic Advising</span>
          <h1>Mainstream Real Estate Services</h1>
          <p className="lede">
            Seven years alongside a family-held firm as it grew from a three-person, on-call
            operation into a provider to large commercial real estate clients.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          <h2>The relationship</h2>
          <p>
            Since 2019 we've served as strategic advisors to Debra and Lou Rotella — President and
            Vice President of a family-held commercial real estate services firm. Seven years in, the
            work spans the full range of what a closely held business actually needs, because in a
            family company the business questions and the human ones are never really separate.
          </p>

          <h2>What we do</h2>
          <p>
            We brought clarity to the finances — a clear read on where the money is and what it's
            telling them. We built and implemented a strategic growth process, and we help them run
            it. We've mediated personnel changes and new hires, and coached Debra and Lou as leaders.
            And we've supported the relationships that carry the business: their key client
            relationships, and their own.
          </p>

          <h2>Where it stands</h2>
          <p>
            Mainstream has grown from a three-person, on-call business into a provider to large
            commercial real estate clients. Alongside a series of smaller site wins, the firm has
            secured two major multi-site facilities contracts — the kind of anchor work that changes
            a company's trajectory.
          </p>
        </div>
      </section>

      <section className="sec on-dark voice">
        <div className="wrap">
          <blockquote>
            "Dennis and John have been critical advisors for us to move Mainstream from a
            three-person on-call business to a growing provider to large commercial real estate
            clients."
          </blockquote>
          <b>Lou Rotella</b> · Vice President, Mainstream Real Estate Services
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
