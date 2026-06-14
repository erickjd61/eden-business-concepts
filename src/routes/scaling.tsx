import { createFileRoute, Link } from '@tanstack/react-router'
import { PredictableSuccessCurve } from '../components/Graphics'

export const Route = createFileRoute('/scaling')({ component: Scaling })

const EOS = [
  ['Vision', 'Everyone sees where the company is going — and how it gets there.'],
  ['People', 'The right people in the right seats, held to a clear standard.'],
  ['Data', 'A handful of numbers that tell the truth every week.'],
  ['Issues', 'Problems named and solved, not avoided and inherited.'],
  ['Process', 'The core way you operate, documented and followed.'],
  ['Traction', 'Disciplined execution — rocks, meetings, and accountability.'],
]

function Scaling() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Comprehensive Business Scaling</span>
          <h1>Scale the company you've built — <em>without breaking it.</em></h1>
          <p className="lede">
            Most companies don't stall for lack of effort. They stall because the structure that
            got them here can't carry where they're going. We install the operating systems — and
            move the founder out of the center — so growth becomes something the business can hold.
          </p>
        </div>
      </section>

      {/* CREAM lead — variety */}
      <section className="lead-cream">
        <div className="wrap">
          <p className="big">The full EOS toolkit, woven through your <em>entire operation.</em></p>
          <p className="body">
            We know how to weave the EOS model and tools into your entire operation, bringing the
            clarity and accountability you need to meet all the goals you set. Not a binder on a
            shelf — the way the company actually runs, in every function.
          </p>
          <div className="card-grid" style={{ marginTop: 40 }}>
            {EOS.map(([t, d], i) => (
              <div className="card" key={t}>
                <span className="card-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3><p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK — the model graphic */}
      <section className="band">
        <div className="wrap">
          <span className="kicker">The lifecycle</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(28px,3.6vw,42px)', marginTop: 14, color: 'var(--cream)' }}>
            Where are you on the road to <em style={{ fontStyle: 'italic', color: 'var(--gold-br)' }}>Predictable Success?</em>
          </h2>
          <div className="graphic-frame"><PredictableSuccessCurve /></div>
          <p className="graphic-cap">
            Every company climbs through Early Struggle, Fun, and Whitewater toward{' '}
            <b>Predictable Success</b> — then the curve naturally pulls it back down toward the
            Treadmill. The hardest crossing is Whitewater. The real work is <b>getting to
            Predictable Success and staying there</b> — and that's the work we do with you.
          </p>
        </div>
      </section>

      {/* CREAM — founder transition */}
      <section className="sec on-cream">
        <div className="wrap">
          <span className="kicker on-cream">Founder transition</span>
          <h2>Moving the founder out of the center.</h2>
          <p className="body">
            A company that can't run without its founder isn't an asset — it's a job that owns the
            owner. We specialize in the transition from founder-dependent to genuinely scalable:
            the delegation, the leadership team, the operating cadence, and the accountability that
            let the business grow beyond any one person. <b>In a family-held business, this is also
            a family transition</b> — and we treat it that way.
          </p>
          <div className="pullquote" style={{ borderLeftColor: 'var(--gold)' }}>
            "A full multi-market franchise build for a commercial-services company — operating
            system, stage-gated playbooks, and a seven-system tech stack. Founder-led to scalable,
            with the systems to prove it."
            <span>In practice · client named privately on request</span>
          </div>
          <p style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-dark">Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
