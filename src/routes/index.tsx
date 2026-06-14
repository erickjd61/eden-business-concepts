import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

const BOOKS = [
  ["The Leader's Motivation", '/img/books/leaders-motivation.jpg', 'https://a.co/d/04Xwfn5a'],
  ["The Leader's Foundation", '/img/books/leaders-foundation.jpg', 'https://a.co/d/01gAEQjT'],
  ["The Leader's Direction", '/img/books/leaders-direction.jpg', 'https://a.co/d/00bO2w6y'],
  ['Three Paths Out of Paradise', '/img/books/three-paths.jpg', 'https://a.co/d/0i8YWort'],
  ['Known and Called', '/img/books/known-called.jpg', 'https://a.co/d/059iI9JE'],
  ['A Heart Well Kept', '/img/books/heart-well-kept.jpg', 'https://a.co/d/0c1ytRgC'],
  ['When the Word Comes Worshipping', '/img/books/word-worshipping.jpg', 'https://a.co/d/04Fu8ley'],
  ['Leading Through Conflict', '/img/books/leading-through-conflict.jpg', 'https://a.co/d/0j5j0MQ8'],
]

const PILLARS = [
  { n: '01', t: 'Comprehensive Business Scaling', to: '/scaling',
    d: 'Integrate the full EOS toolkit across the business and move through the stages of Predictable Success — from founder-dependent to genuinely scalable.',
    icon: 'M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6' },
  { n: '02', t: 'Leadership Formation', to: '/leadership',
    d: 'The inner strength leadership demands — the heart beneath the decisions, not just the skills on the surface.',
    icon: 'M12 14c3.3 0 6-2.7 6-6S15.3 2 12 2 6 4.7 6 8s2.7 6 6 6zM4 22c0-4 3.6-6 8-6s8 2 8 6' },
  { n: '03', t: 'Strategic Advising', to: '/advising',
    d: 'Strategy, succession, and the next right decision, with thirty-five years of pattern recognition behind every call.',
    icon: 'M3 3v18h18M7 15l4-5 4 3 5-7' },
  { n: '04', t: 'Conflict Transformation', to: '/conflict',
    d: 'A proven model for moving teams through conflict to restored, working relationships. We wrote the book on it.',
    icon: 'M7 8h10M7 12h6M3 20l2-3V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8z' },
]

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor"
      strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/img/hero/landscape-placeholder.jpg')" }} />
        <div className="hero-scrim" />
        <div className="hero-inner wrap">
          <span className="kicker">Comprehensive Business Scaling · Leadership Formation · Since 1991</span>
          <h1>Scale what you've built. Grow as you <em>lead.</em></h1>
          <p className="sub">
            Eden brings <b>a heart-focused approach to the two hardest problems in business</b> —
            scaling the company you've built, and growing the leadership strength to carry it.
            We work especially with the <b>small and family-held businesses</b> where the company
            and the people are inseparable.
          </p>
          <div className="row">
            <Link to="/contact" className="btn btn-gold">Start a conversation</Link>
            <Link to="/scaling" className="btn btn-ghost">How we work</Link>
          </div>
        </div>
      </header>

      {/* CREDENTIALS */}
      <section className="creds">
        <div className="wrap creds-in">
          <div className="cred"><div className="n">35</div><div className="l">Years of practice<br />Since 1991</div></div>
          <div className="cred"><div className="n">8</div><div className="l">Books published<br />on leadership &amp; growth</div></div>
          <div className="cred"><div className="n">EOS</div><div className="l">&amp; Predictable Success<br />integrated across the business</div></div>
          <div className="cred"><div className="n">DMin/PhD</div><div className="l">Two doctorates · Doctoral<br />faculty at Trinity</div></div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="sec on-cream">
        <div className="wrap">
          <p className="big">
            Most firms treat scaling as a <em>mechanical</em> problem. The mechanics matter.
            But companies stall, and founders burn out, for reasons that live deeper.
          </p>
          <p className="body">
            We bring a <b>heart-focused approach</b> to the work most consultants keep purely
            operational. It comes from decades in the room with founders and family-business
            owners, eight books on what actually drives a leader, and hard-won experience moving
            companies from founder-dependent to genuinely scalable. The result is rare:{' '}
            <b>operational rigor and human depth, from the same team.</b>
          </p>
        </div>
      </section>

      {/* WHAT WE DO — four equal pillars */}
      <section className="sec on-dark" id="what-we-do">
        <div className="wrap">
          <span className="kicker">What we do</span>
          <h2>Four ways we move a company — and its leaders — forward.</h2>
          <div className="grid4 even">
            {PILLARS.map((p) => (
              <Link to={p.to} className="pillar" key={p.t}>
                <span className="pillar-icon"><Icon d={p.icon} /></span>
                <div className="num">{p.n}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
                <span className="more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE — family business */}
      <section className="sec on-cream2 serve">
        <div className="wrap serve-in">
          <div>
            <span className="kicker on-cream">Who we serve</span>
            <h2>Built for small and <em>family-held</em> businesses.</h2>
          </div>
          <div className="serve-body">
            <p className="body" style={{ marginTop: 0 }}>
              The companies we know best are the ones where ownership, leadership, and family are
              woven together — where a succession plan is also a family conversation, and a
              scaling decision touches people you love. We've spent decades in exactly that
              tension: helping owners professionalize and grow the business <b>without losing what
              made it worth building.</b>
            </p>
            <p className="body">
              That's why our scaling work and our conflict work so often run together. In a
              family-held company, you rarely get one without the other.
            </p>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section className="sec on-dark" id="books">
        <div className="wrap">
          <div className="shelf-head">
            <div>
              <span className="kicker">The books</span>
              <h2 style={{ marginTop: 14 }}>We write what we practice.</h2>
            </div>
            <p>Every framework we bring to a company was forged in real advising rooms. The books
              are where the thinking lives — tap any cover to find it on Amazon.</p>
          </div>
          <div className="shelf" role="list" aria-label="Books by John D. Erickson and Dennis R. Humphrey">
            {BOOKS.map(([t, cover, url]) => (
              <a href={url} target="_blank" rel="noopener noreferrer" role="listitem" key={t} className="book" aria-label={`${t} on Amazon`}>
                <img src={cover} alt={`${t} cover`} loading="lazy" />
              </a>
            ))}
            <Link to="/books" role="listitem" className="spine-forthcoming">Walking Alongside · 2026</Link>
          </div>
          <div className="shelf-board" />
          <p className="shelf-note"><Link to="/books" style={{ color: 'var(--gold-br)' }}>Browse all the books →</Link></p>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec on-cream" id="about">
        <div className="wrap">
          <span className="kicker on-cream">Who we are</span>
          <h2>A practice built on experience — and a team with real depth.</h2>
          <p className="body">
            Eden Business Concepts is led by two practitioners with thirty-five years of shared
            work across business, the academy, and the boardroom — and extended by{' '}
            <b>a network of partners and colleagues</b> we bring to the problems that need them.
          </p>
          <div className="principals">
            <div className="pr">
              <img src="/img/people/john.jpg" alt="John D. Erickson" loading="lazy" />
              <div>
                <h4>John D. Erickson, DMin</h4>
                <div className="role">Systems · Scaling · Strategy</div>
                <p>A Purdue engineer who became a leadership advisor. Builds the operating systems,
                  leads the scaling work, and chairs peer advisory forums for owners and CEOs.</p>
              </div>
            </div>
            <div className="pr">
              <img src="/img/people/dennis.jpg" alt="Dennis R. Humphrey" loading="lazy" />
              <div>
                <h4>Dennis R. Humphrey, PhD</h4>
                <div className="role">Formation · Conflict · Depth</div>
                <p>A licensed clinical counselor with thirty years across consulting, higher
                  education, and behavioral health. Forms leaders, restores teams, and guides his
                  own peer advisory forums.</p>
              </div>
            </div>
          </div>
          <p className="network"><Link to="/about" style={{ color: 'var(--gold)' }}>More about the firm →</Link></p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="sec on-dark voice">
        <div className="wrap">
          <blockquote>
            "John knows how to cut to the heart of an issue — and he wields that skill to see
            others grow into <span>effective and compassionate leaders</span>."
          </blockquote>
          <cite><b>David Ballard</b> · Attorney, Legal Aid of Western Michigan
            <span className="ph">Placeholder · client testimonials to follow</span></cite>
        </div>
      </section>

      {/* CTA */}
      <section className="sec on-dark cta-band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Ready to scale — and to grow? Let's talk.</h2>
          <p>A conversation costs nothing and usually clarifies everything.</p>
          <div className="row">
            <Link to="/contact" className="btn btn-gold">Start a conversation</Link>
            <a className="btn btn-ghost" href="tel:18472046570">847-204-6570</a>
          </div>
        </div>
      </section>
    </main>
  )
}
