import { Link, createFileRoute } from '@tanstack/react-router'
import { SoilLine, RootsAccent } from '../components/SoilLine'

export const Route = createFileRoute('/')({
  component: Home,
})

const QUESTIONS = [
  { q: 'Who am I?', a: "Identity that holds when the quarter doesn't. Leaders who know who they are stop performing and start leading." },
  { q: 'Why am I here?', a: 'The motivation beneath the motivation. What actually drives your decisions — pride, fear, or purpose?' },
  { q: 'Where am I going?', a: 'Direction for the company begins with direction in the leader. Strategy follows clarity.' },
  { q: 'Who loves me?', a: 'No leader flourishes in isolation. The most neglected question in business is also the most decisive.' },
]

// All eight books now have real cover art (Walking Alongside forthcoming).
const BOOKS = [
  { t: "The Leader's Motivation", cover: '/img/books/leaders-motivation.jpg' },
  { t: "The Leader's Foundation", cover: '/img/books/leaders-foundation.jpg' },
  { t: "The Leader's Direction", cover: '/img/books/leaders-direction.jpg' },
  { t: 'Three Paths Out of Paradise', cover: '/img/books/three-paths.jpg' },
  { t: 'Known and Called', cover: '/img/books/known-called.jpg' },
  { t: 'A Heart Well Kept', cover: '/img/books/heart-well-kept.jpg' },
  { t: 'Leading Through Conflict', cover: '/img/books/leading-through-conflict.jpg' },
]

function Home() {
  return (
    <>
      <header className="hero">
        <svg className="canopy" viewBox="0 0 200 200" aria-hidden="true">
          <g fill="var(--eden-green)">
            <ellipse cx="60" cy="60" rx="34" ry="22" transform="rotate(-20 60 60)" />
            <ellipse cx="120" cy="40" rx="40" ry="24" transform="rotate(12 120 40)" />
            <ellipse cx="160" cy="90" rx="30" ry="20" transform="rotate(-8 160 90)" />
            <ellipse cx="95" cy="95" rx="44" ry="26" transform="rotate(6 95 95)" />
          </g>
          <path
            d="M100 200 C100 150 95 130 100 110 M100 140 C80 120 70 110 55 75 M100 130 C120 110 135 100 150 80"
            stroke="var(--eden-navy)" strokeWidth="7" fill="none" strokeLinecap="round"
          />
        </svg>
        <div className="wrap">
          <p className="eyebrow">Leadership advisory · Since 1991</p>
          <h1 style={{ marginTop: 22 }}>
            Every leader will flounder or <em>flourish</em>. The difference is the heart.
          </h1>
          <p className="lede">
            Eden Business Concepts is a leadership advisory and conflict-transformation firm.
            We help founders, executives, and family-owned companies build organizations that
            are smart — and leaders who are healthy.
          </p>
          <div className="cta-row">
            <Link to="/contact" className="btn btn-green">Start a conversation</Link>
            <span className="since">John Erickson &amp; Dennis Humphrey · Lafayette, IN &amp; Chicago</span>
          </div>
          <p className="proof">
            Thirty-five years of shared work now lives in eight books, two doctoral classrooms,
            and hundreds of advising relationships. We bring all of it to the table with you.
          </p>
        </div>
      </header>

      <SoilLine />

      <section className="below dark" id="below">
        <div className="wrap">
          <p className="eyebrow">Below the surface</p>
          <h2>Companies flounder above ground for reasons that live <em>below it</em>.</h2>
          <p className="intro">
            Every leader carries four questions, whether they have named them or not. How a
            leader answers them shapes every decision, every conflict, and every culture they
            build. Our work starts there — at the roots.
          </p>
          <div className="questions">
            {QUESTIONS.map((item) => (
              <div className="q" key={item.q}>
                <span className="tick" />
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="offer" id="offer">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h2>Purposeful, targeted support — for you, your people, and your company.</h2>
          <div className="offer-grid">
            <div className="card">
              <h3>Strategic Advising</h3>
              <p>Clarity for the decisions that keep you up at night: strategy, succession, structure, and the next right step.</p>
              <Link to="/services/strategic-advising">How advising works →</Link>
            </div>
            <div className="card">
              <h3>Team Optimization</h3>
              <p>Conflict mediation, crisis intervention, and leadership development that gets at root issues, not symptoms.</p>
              <Link to="/services/team-optimization">How we work with teams →</Link>
            </div>
            <div className="card">
              <h3>Business Forum Groups</h3>
              <p>A seat among peers. Convene-affiliated forums where owners and CEOs sharpen one another with expert facilitation.</p>
              <Link to="/forums">Find your forum →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shelf-sec" id="books">
        <div className="wrap">
          <div className="shelf-head">
            <div>
              <p className="eyebrow">The books</p>
              <h2>We write what we practice.</h2>
            </div>
            <p>Every framework on this shelf was forged in real advising rooms with real leaders. Start anywhere — they all lead to the same place.</p>
          </div>
          <div className="shelf" role="list" aria-label="Books by John D. Erickson and Dennis R. Humphrey">
            {BOOKS.map((b) =>
              b.cover ? (
                <Link to="/books" role="listitem" key={b.t} className="book" aria-label={b.t}>
                  <img src={b.cover} alt={`${b.t} cover`} loading="lazy" />
                </Link>
              ) : (
                <Link
                  to="/books"
                  role="listitem"
                  key={b.t}
                  className="spine"
                  style={{ background: b.bg }}
                >
                  {b.t}
                </Link>
              ),
            )}
            <Link to="/books" role="listitem" className="spine spine-forthcoming">
              Walking Alongside · 2026
            </Link>
          </div>
          <div className="shelf-board" />
          <p className="shelf-note">Tap any cover to browse the shelf.</p>
        </div>
      </section>

      <section className="pair" id="team">
        <div className="wrap">
          <p className="eyebrow">Our team</p>
          <h2>On a journey together since 1991.</h2>
          <figure className="together">
            <img src="/img/people/together.jpg" alt="John D. Erickson and Dennis R. Humphrey" loading="lazy" />
          </figure>
          <div className="pair-grid">
            <div className="person">
              <div className="photo"><img src="/img/people/john.jpg" alt="John D. Erickson" loading="lazy" /></div>
              <h3>John D. Erickson, DMin</h3>
              <p className="role">Co-Founder</p>
              <p>Purdue engineer, Navy and State Department veteran, doctoral faculty at Trinity, Convene chair, author of seven books. John helps leaders understand the heart beneath their decisions.</p>
            </div>
            <div className="person">
              <div className="photo"><img src="/img/people/dennis.jpg" alt="Dennis R. Humphrey" loading="lazy" /></div>
              <h3>Dennis R. Humphrey, PhD</h3>
              <p className="role">Co-Founder</p>
              <p>Licensed counselor, thirty years across consulting, higher education, and behavioral health. Dennis helps leaders get unstuck — in business and in life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="voice">
        <div className="wrap">
          <blockquote>
            "John knows how to cut to the heart of an issue — and he wields that skill to see
            others grow into <span>effective and compassionate leaders</span>."
          </blockquote>
          <cite><b>David Ballard</b> · Attorney, Legal Aid of Western Michigan</cite>
        </div>
      </section>

      <section className="cta" id="contact-cta">
        <RootsAccent />
        <div className="wrap">
          <h2>Ready to <em>flourish</em>? Let's talk.</h2>
          <p>A conversation costs nothing and usually clarifies everything.</p>
          <div className="cta-row">
            <a className="btn btn-green" href="mailto:ebc@edenbusinessconcepts.com">Start a conversation</a>
            <a className="btn btn-ghost" href="tel:18007657450">800-765-7450</a>
          </div>
        </div>
      </section>
    </>
  )
}
