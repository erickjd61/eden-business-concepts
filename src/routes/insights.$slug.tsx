import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPost, renderMarkdown, formatDate } from '../posts'

export const Route = createFileRoute('/insights/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return { post }
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title ?? 'Insights'} · Eden Business Concepts` },
      { name: 'description', content: loaderData?.post.excerpt ?? '' },
    ],
  }),
  component: Article,
})

function Article() {
  const { post } = Route.useLoaderData()
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">
            <Link to="/insights" style={{ color: 'var(--gold)' }}>Insights</Link>
          </span>
          <h1>{post.title}</h1>
          {post.date && <p className="lede" style={{ marginTop: 10 }}>{formatDate(post.date)}</p>}
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <div className="article" dangerouslySetInnerHTML={{ __html: renderMarkdown(post.body) }} />
          <p className="note" style={{ marginTop: 44 }}>
            <Link to="/insights" style={{ color: 'var(--gold)' }}>← All insights</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
