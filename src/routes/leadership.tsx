import { createFileRoute, Link } from '@tanstack/react-router'
import { FourQuestions } from '../components/Graphics'

import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/leadership')({
  head: () => seoHead({ title: "Leadership Development · Eden Business Concepts", description: "Form leaders with the depth to carry weight — developing owners, successors, and teams in closely held and family-owned businesses." }), component: Leadership })

function Leadership() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Leadership Formation</span>
          <h1>Grow the leader the company <em>needs you to be.</em></h1>
          <p className="lede">
            Skills sit on the surface. The decisions that make or break a company come from
            somewhere deeper. We develop the inner strength leadership actually demands — drawn
            from eight books and decades in the room with founders and executives.
          </p>
        </div>
      </section>

      {/* DARK band — the four questions graphic, full width */}
      <section className="band">
        <div className="wrap">
          <span className="kicker">The heart beneath the decisions</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(28px,3.6vw,42px)', marginTop: 14, color: 'var(--cream)', maxWidth: '20ch' }}>
            Four questions sit under every decision a leader makes.
          </h2>
          <p className="graphic-cap" style={{ marginTop: 18, marginBottom: 30 }}>
            Leaders are shaped by what drives them. Get these right and good decisions follow more
            naturally than you'd expect.
          </p>
          <FourQuestions />
        </div>
      </section>

      {/* CREAM — forums */}
      <section className="sec on-cream">
        <div className="wrap">
          <span className="kicker on-cream">Peer advisory forums</span>
          <h2>Some of the deepest growth happens among peers.</h2>
          <p className="body">
            John chairs peer advisory forums for owners and CEOs, and Dennis guides his own — rooms
            where leaders carrying real weight think out loud with others who understand it.
            Confidential, structured, and built for the long haul.
          </p>
          <div className="pullquote" style={{ borderLeftColor: 'var(--gold)' }}>
            "The leader's growth and the company's growth move together — which is why leadership
            formation so often runs alongside the scaling work, not separate from it."
          </div>
          <p style={{ marginTop: 36 }}>
            <Link to="/books" className="btn btn-dark">See the books</Link>{' '}
            <Link to="/contact" className="btn btn-gold" style={{ marginLeft: 8 }}>Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
