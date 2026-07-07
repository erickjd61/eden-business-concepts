import { createFileRoute } from '@tanstack/react-router'

import { seoHead } from '../lib/seo'
import { JsonLd } from '../components/JsonLd'
import { booksSchema } from '../lib/schema'

export const Route = createFileRoute('/books')({
  head: () => seoHead({ title: "Books · Eden Business Concepts", description: "Eight books on leadership, motivation, and the formed life — the frameworks behind Eden's advising work with leaders and owners." }), component: Books })

const BOOKS = [
  ['/img/books/leaders-motivation.jpg', "The Leader's Motivation",
    'Awakening the inner forces that shape how you lead — the root motivations beneath every decision.', 'https://a.co/d/04Xwfn5a'],
  ['/img/books/leaders-foundation.jpg', "The Leader's Foundation",
    'Where trust becomes the strongest strategy.', 'https://a.co/d/01gAEQjT'],
  ['/img/books/leaders-direction.jpg', "The Leader's Direction",
    'Finding clarity in who you are and where you\u2019re called to go.', 'https://a.co/d/00bO2w6y'],
  ['/img/books/leading-through-conflict.jpg', 'Leading Through Conflict',
    'The practice of heart-first leadership, by John D. Erickson and Dennis R. Humphrey — a model for moving teams through conflict rather than around it.', 'https://a.co/d/0j5j0MQ8'],
  ['/img/books/three-paths.jpg', 'Three Paths Out of Paradise',
    'The first book in a trilogy on longing, identity, and the questions that define a life.', 'https://a.co/d/0i8YWort'],
  ['/img/books/known-called.jpg', 'Known and Called',
    'The four questions that define your life — the framework at the heart of our leadership work.', 'https://a.co/d/059iI9JE'],
  ['/img/books/heart-well-kept.jpg', 'A Heart Well Kept',
    'Building relationships that flourish, rooted in five pillars: peace, patience, process, purpose, and permission.', 'https://a.co/d/0c1ytRgC'],
  ['/img/books/word-worshipping.jpg', 'When the Word Comes Worshipping',
    'A reflection on Scripture, worship, and the formed life.', 'https://a.co/d/04Fu8ley'],
]

function Books() {
  return (
    <main>
      <JsonLd data={booksSchema} />
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">The books</span>
          <h1>We write what we <em>practice.</em></h1>
          <p className="lede">
            Every framework we bring to a company was forged in real advising rooms with real
            leaders. Tap any cover to find it on Amazon.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <div className="book-list">
            {BOOKS.map(([cover, t, d, url]) => (
              <a className="book-row" href={url} target="_blank" rel="noopener noreferrer" key={t}>
                <img src={cover} alt={`${t} cover`} loading="lazy" />
                <div>
                  <h3>{t}</h3>
                  <p>{d}</p>
                  <span className="amz">View on Amazon →</span>
                </div>
              </a>
            ))}
          </div>
          <p className="note" style={{ marginTop: 40 }}><b>Walking Alongside</b> — forthcoming, 2026.</p>
        </div>
      </section>
    </main>
  )
}
