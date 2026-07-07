import { createFileRoute, Link } from '@tanstack/react-router'
import { PredictableSuccessCurve } from '../components/Graphics'

import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/scaling')({
  head: () => seoHead({ path: '/scaling', title: "Scaling · Eden Business Concepts", description: "Build the operating system your company runs on, so it's an asset — not a job that owns you. We integrate Traction/EOS tools into how the business works." }), component: Scaling })

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
            shelf — the way the company actually runs, in every function. We're not affiliated with EOS Worldwide: we support implementation of the Traction/EOS model developed by Gino Wickman, serving as fractional integrators under the guidance of a certified EOS Implementer.
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
            Predictable Success is the business lifecycle model developed by Les McKeown. Every company climbs through Early Struggle, Fun, and Whitewater toward{' '}
            <b>Predictable Success</b> — then the curve naturally pulls it back down toward the
            Treadmill. The hardest crossing is Whitewater. The real work is <b>getting to
            Predictable Success and staying there</b> — and that's the work we do with you.
          </p>
        </div>
      </section>

      {/* CREAM — how we work */}
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
            "John and Dennis have brought structure, focus, clarity, and accountability into our
            business with the EOS model. They have led us to move away from operational reactions to
            intentional growth. Our business would not have the greater future we are moving toward
            with their insight and leadership."
            <span>Devin Moore · ServiceMaster Commercial Cleaning Services</span>
          </div>
          <p style={{ marginTop: 20 }}>
            <Link to="/work/servicemaster" style={{ color: 'var(--gold-br)' }}>Read the ServiceMaster case →</Link>
          </p>
          <p style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-dark">Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
