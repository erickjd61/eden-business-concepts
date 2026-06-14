import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Who we are</span>
          <h1>A practice built on experience — and a team with <em>real depth.</em></h1>
          <p className="lede">
            Eden Business Concepts has helped leaders build healthy, scalable companies since 1991.
            We pair an engineer's systems with a counselor's depth — and bring a wider network of
            partners to the problems that need them.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <h2>The firm</h2>
          <p>
            We're led by two practitioners with thirty-five years of shared work across business,
            the academy, and the boardroom. What makes the work unusual is the combination:
            <b> operational rigor and human depth, from the same team</b> — the discipline to scale
            a company and the wisdom to grow the people leading it. For any given engagement, we
            draw on a wider bench of advisors, facilitators, and operating partners, matched to the
            problem in front of us. The result is a firm with the range of a much larger one and
            the judgment of people who have done the work themselves.
          </p>

          <h2>John D. Erickson, DMin</h2>
          <p>
            <b>Systems · Scaling · Strategy.</b> A Purdue-trained engineer whose career carried him
            through the Navy and the State Department before three decades in leadership
            development. John builds the operating systems, leads the scaling work, chairs peer
            advisory forums for owners and CEOs, and serves as doctoral faculty at Trinity. He is
            the author of multiple books on leadership and growth. He and his wife, Debbie, married
            in 1982; they have two grown children and three grandchildren.
          </p>

          <h2>Dennis R. Humphrey, PhD</h2>
          <p>
            <b>Formation · Conflict · Depth.</b> A licensed clinical counselor with thirty years
            across consulting, higher education, and behavioral health. Dennis forms leaders,
            restores teams, and guides his own peer advisory forums, bringing a clinician's
            understanding of what actually moves people. He has been married for thirty-six years
            and has four grown children and two grandchildren.
          </p>

          <p className="note">
            Together they co-author and co-teach, including <b>Leading Through Conflict</b> and
            doctoral coursework on conflict and leadership.
          </p>

          <p style={{ marginTop: 36 }}>
            <Link to="/books" className="btn btn-ghost">The books</Link>{' '}
            <Link to="/contact" className="btn btn-gold" style={{ marginLeft: 8 }}>Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
