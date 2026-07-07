import { createFileRoute, Link } from '@tanstack/react-router'
import { archivedPosts, formatDate } from '../posts'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/archive')({
  head: () =>
    seoHead({
      title: 'Archive · Eden Business Concepts',
      description: 'Earlier writing from the Eden Business Concepts archive.',
      path: '/archive',
    }),
  component: Archive,
})

function Archive() {
  const posts = archivedPosts()
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Archive</span>
          <h1>From the <em>archive.</em></h1>
          <p className="lede">
            Earlier writing — including a series on leading through the disruption and collective
            strain of 2020–2022. Kept here for readers who find it useful.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
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
            <Link to="/insights" style={{ color: 'var(--gold)' }}>← Back to Insights</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
