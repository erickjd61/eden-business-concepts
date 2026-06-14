import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/advising')({ component: Advising })

const WHERE = [
  ['Strategy & growth', 'The big directional calls, pressure-tested before you commit.'],
  ['Succession', 'Ownership and leadership transitions — including the family kind.'],
  ['Org design', 'From a flat team to a real leadership structure that holds.'],
  ['Hard personnel calls', 'The decisions that keep you up at night.'],
]

function Advising() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Strategic Advising</span>
          <h1>The next right decision — with <em>thirty-five years</em> behind it.</h1>
          <p className="lede">
            Sometimes you don't need a program. You need a trusted, experienced voice in the room
            for the decision in front of you. That's what advising is.
          </p>
        </div>
      </section>

      {/* CREAM — where useful, 2x2 fills evenly */}
      <section className="sec on-cream">
        <div className="wrap">
          <span className="kicker on-cream">Where we're most useful</span>
          <h2>Brought in for the calls that matter most.</h2>
          <div className="card-grid two" style={{ marginTop: 32 }}>
            {WHERE.map(([t, d], i) => (
              <div className="card" key={t}>
                <span className="card-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
          <p className="body">
            We bring pattern recognition from decades of companies — and the judgment to know which
            patterns apply to yours and which don't. For <b>family-held businesses</b>, that often
            means holding the business decision and the family reality in the same conversation.
          </p>
        </div>
      </section>

      {/* DARK — how it works */}
      <section className="band">
        <div className="wrap">
          <span className="kicker">How it works</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(28px,3.6vw,42px)', marginTop: 14, color: 'var(--cream)', maxWidth: '22ch' }}>
            Shaped to the problem — and the cadence you actually need.
          </h2>
          <p className="graphic-cap" style={{ marginTop: 18 }}>
            A standing monthly seat. A defined sprint around a single decision. A board-level
            sounding role. We don't sell a package; we fit the engagement to the moment.
          </p>
          <p style={{ marginTop: 32 }}>
            <Link to="/contact" className="btn btn-gold">Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
