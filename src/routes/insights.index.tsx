import { createFileRoute, Link } from '@tanstack/react-router'
import { currentPosts, formatDate } from '../posts'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/insights/')({
  head: () =>
    seoHead({ path: '/insights/',
      title: 'Insights · Eden Business Concepts',
      description:
        'Perspectives and tools for leaders who want to build something that lasts — on scaling, leadership formation, conflict, and the heart beneath the work.',
    }),
  component: Insights,
})

function Insights() {
  const posts = currentPosts()
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Insights</span>
          <h1>Growing the heart of your <em>business.</em></h1>
          <p className="lede">
            Perspectives and tools for leaders who want to build something that lasts — drawn from
            decades in the room with founders, owners, and the teams around them.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          {/* Resources */}
          <div className="resources">
            <span className="kicker on-cream">Free resources</span>
            <h2 style={{ marginTop: 12 }}>Root Motivations</h2>
            <p className="body" style={{ marginTop: 10 }}>
              What is your primary motivation in life &amp; relationships? Discover what drives you
              as a leader — Respect, Value, or Approval — and what happens when that need goes unmet.
            </p>
            <div className="resource-row">
              <a className="btn btn-ghost" href="/resources/root-motivations.pdf" target="_blank" rel="noopener noreferrer">
                Download the resource ↓
              </a>
              <a className="btn btn-ghost" href="/resources/root-motivations-chart.pdf" target="_blank" rel="noopener noreferrer">
                Download the comparison chart ↓
              </a>
            </div>
            <p className="note" style={{ marginTop: 14 }}>
              Prefer to read it here? <Link to="/root-motivations" style={{ color: 'var(--gold)' }}>The three root motivations →</Link>
            </p>
          </div>

          {/* Posts */}
          <p className="note" style={{ marginTop: 4, marginBottom: 26 }}>
            After several years focused on the work itself, we're publishing here regularly again.
          </p>
          <div className="insight-list">
            {posts.map((p) => (
              <Link to="/insights/$slug" params={{ slug: p.slug }} key={p.slug} className="insight-card">
                {p.date && <div className="insight-date">{formatDate(p.date)}</div>}
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="amz">Read →</span>
              </Link>
            ))}
          </div>

          <p className="note" style={{ marginTop: 40 }}>
            Looking for our earlier writing? Browse the <Link to="/archive" style={{ color: 'var(--gold)' }}>archive →</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
