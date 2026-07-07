import { createFileRoute, Link } from '@tanstack/react-router'

import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/about')({
  head: () => seoHead({ title: "About · Eden Business Concepts", description: "Two credentialed principals and thirty-five years of shared work, since 1991, advising closely held and family businesses." }), component: About })

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
      <div className="about-banner">
        <img src="/img/people/team-together.jpg" alt="The Eden team working through a problem together" loading="lazy" />
      </div>
      <section className="prose">
        <div className="wrap">
          <h2>The firm</h2>
          <p>
            We're led by two practitioners with thirty-five years of shared work — together since 1991 — across business,
            the academy, and the boardroom. What makes the work unusual is the combination:
            <b> operational rigor and human depth, from the same team</b> — the discipline to scale
            a company and the wisdom to grow the people leading it. For any given engagement, we
            draw on a wider bench of advisors, facilitators, and operating partners, matched to the
            problem in front of us. The result is a firm with the range of a much larger one and
            the judgment of people who have done the work themselves.
          </p>

          <h2>What drives us</h2>
          <p>
            We exist to see an ongoing flow of cross-generation leaders who create life-giving
            workplaces — through an awareness of their own hearts, and the hearts of the people they
            lead. We believe you will either flounder or flourish based on how well you know your own
            heart: <b>who you are, what drives you, why you make the decisions you do, and why you
            respond to people and situations the way you do.</b>
          </p>
          <p>
            Our work is informed by a conviction that leadership is, at root, a matter of the heart.
            That conviction runs through our books and shapes how we advise — and we serve leaders of
            every background, faith or none.
          </p>

          <div className="about-bio">
            <img className="about-headshot" src="/img/people/john.jpg" alt="John D. Erickson" loading="lazy" />
            <div>
              <h2 style={{ marginTop: 0 }}>John D. Erickson, DMin</h2>
              <p>
                <b>Systems · Scaling · Strategy.</b> A Purdue-trained engineer whose career carried him
                through the Navy and the State Department before three decades in leadership
                development. John builds the operating systems, leads the scaling work, chairs peer
                advisory forums for owners and CEOs, and serves as doctoral faculty at Trinity
                International University in Chicago. He is
                the author of multiple books on leadership and growth. He and his wife, Debbie, live in
                Lafayette, Indiana. They have two adult children and three grandchildren.
              </p>
              <a className="pr-li" href="https://www.linkedin.com/in/john-d-erickson/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <div className="about-bio">
            <img className="about-headshot" src="/img/people/dennis.jpg" alt="Dennis R. Humphrey" loading="lazy" />
            <div>
              <h2 style={{ marginTop: 0 }}>Dennis R. Humphrey, PhD</h2>
              <p>
                <b>Formation · Conflict · Depth.</b> A Licensed Clinical Professional Counselor (LCPC) in Illinois and Wisconsin, with thirty years
                across consulting, higher education, and behavioral health. Dennis forms leaders,
                restores teams, and guides his own peer advisory forums, bringing a clinician's
                understanding of what actually moves people. He and his wife, Heather, have four adult
                children and two grandchildren.
              </p>
              <a className="pr-li" href="https://www.linkedin.com/in/dennishumphrey/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <p className="note">
            Together they co-author and co-teach, including <b>Leading Through Conflict</b> and
            doctoral coursework on conflict and leadership. Both are also certified conflict mediators through Live at Peace.
          </p>

          <h2>Advisors</h2>
          <p>
            For specific engagements, we bring in advisors with particular depth in their field.
          </p>

          <div className="about-bio">
            <img className="about-headshot" src="/img/people/heather.jpg" alt="Heather L. Humphrey" loading="lazy" />
            <div>
              <h2 style={{ marginTop: 0 }}>Heather L. Humphrey</h2>
              <p>
                <b>Strategy · Change · Communications.</b> Heather Humphrey has spent more than thirty
                years helping leaders turn big ideas into real results — most recently as Director of
                Communications, Change &amp; Culture at AbbVie, where she built a high-impact
                communications function inside one of healthcare's largest organizations and led teams
                through complex change. She starts where the work starts, with purpose, then builds the
                strategy, structure, and systems that move it forward and keep it moving. As a strategic
                advisor to Eden, she brings sound judgment, creative thinking, and the discipline to
                finish the parts most people skip.
              </p>
              <a className="pr-li" href="https://www.linkedin.com/in/heather-l-humphrey/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            </div>
          </div>

          <p style={{ marginTop: 36 }}>
            <Link to="/books" className="btn btn-ghost">The books</Link>{' '}
            <Link to="/contact" className="btn btn-gold" style={{ marginLeft: 8 }}>Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
