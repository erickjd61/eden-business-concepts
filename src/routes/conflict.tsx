import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/conflict')({ component: Conflict })

const STEPS = [
  ['01', 'Avoidance', 'Where most teams live — the conflict goes underground and hardens.'],
  ['02', 'Naming it', 'The conflict is brought into the open, honestly and safely.'],
  ['03', 'Understanding', 'Each side is genuinely heard; the real issue surfaces.'],
  ['04', 'Repair', 'Trust is rebuilt through specific, mutual commitments.'],
  ['05', 'Restoration', 'The working relationship is stronger than before.'],
]

function Conflict() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Conflict Transformation</span>
          <h1>Move a team <em>through</em> conflict — not around it.</h1>
          <p className="lede">
            Unresolved conflict quietly taxes everything: trust, speed, retention, results. We use
            a proven model to move teams from stuck to restored — the same model we teach at the
            doctoral level and wrote a book about.
          </p>
        </div>
      </section>

      {/* CREAM — the five steps as a vertical journey */}
      <section className="sec on-cream">
        <div className="wrap">
          <span className="kicker on-cream">From avoidance to restoration</span>
          <h2>Conflict is a door, not a threat.</h2>
          <p className="body" style={{ marginBottom: 8 }}>
            Done well, a team comes out the other side with <b>more</b> trust than it had going in.
          </p>
          <ol className="steps">
            {STEPS.map(([n, t, d]) => (
              <li className="step" key={n}>
                <span className="step-n">{n}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* DARK — where it fits */}
      <section className="band">
        <div className="wrap">
          <span className="kicker">Where it fits</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(28px,3.6vw,42px)', marginTop: 14, color: 'var(--cream)', maxWidth: '22ch' }}>
            Partner friction, leadership gridlock, and tangled family businesses.
          </h2>
          <p className="graphic-cap" style={{ marginTop: 18 }}>
            Especially <b>family-business tension</b>, where the relationships and the org chart are
            knotted together. Dennis brings a licensed clinical counselor's depth; together we keep
            it practical and oriented toward the business moving forward.
          </p>
          <div className="pullquote" style={{ marginTop: 36 }}>
            "Leading Through Conflict — the model in book form, co-authored by John D. Erickson and
            Dennis R. Humphrey."
          </div>
          <p style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-gold">Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
