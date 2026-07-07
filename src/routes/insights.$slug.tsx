import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { getPost, renderMarkdown, formatDate } from '../posts'
import { JsonLd } from '../components/JsonLd'

const SITE = 'https://www.edenbusinessconcepts.com'
const ID = 'https://edenbusinessconcepts.com'

export const Route = createFileRoute('/insights/$slug')({
  loader: ({ params }) => {
    const post = getPost(params.slug)
    if (!post) throw notFound()
    return { post }
  },
  head: ({ loaderData }) => {
    const slug = loaderData?.post.slug ?? ''
    return {
      meta: [
        { title: `${loaderData?.post.title ?? 'Insights'} · Eden Business Concepts` },
        { name: 'description', content: loaderData?.post.excerpt ?? '' },
      ],
      links: [{ rel: 'canonical', href: `${SITE}/insights/${slug}` }],
    }
  },
  component: Article,
})

function Article() {
  const { post } = Route.useLoaderData()
  const url = `${SITE}/insights/${post.slug}`
  const blogPosting = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    ...(post.date ? { datePublished: post.date } : {}),
    author: { '@id': `${ID}/#john-erickson` },
    publisher: { '@id': `${ID}/#organization` },
    mainEntityOfPage: url,
    url,
  }
  return (
    <main>
      <JsonLd data={blogPosting} />
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
