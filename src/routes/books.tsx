import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/books')({
  head: () => ({ meta: [{ title: 'The Books · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">The books</p>
      <h1 style={{ marginTop: 18 }}>We write what we <em>practice</em>.</h1>
      <p className="lede">Every framework in these books was forged in real advising rooms with real leaders. Start anywhere; they all lead to the same place — a healthier heart and a healthier company.</p>
      <div className="cover-grid">
        <img src="/img/books/leaders-motivation.jpg" alt="The Leader's Motivation cover" loading="lazy" />
        <img src="/img/books/leaders-foundation.jpg" alt="The Leader's Foundation cover" loading="lazy" />
        <img src="/img/books/leaders-direction.jpg" alt="The Leader's Direction cover" loading="lazy" />
        <img src="/img/books/three-paths.jpg" alt="Three Paths Out of Paradise cover" loading="lazy" />
        <img src="/img/books/known-called.jpg" alt="Known and Called cover" loading="lazy" />
        <img src="/img/books/heart-well-kept.jpg" alt="A Heart Well Kept cover" loading="lazy" />
        <img src="/img/books/leading-through-conflict.jpg" alt="Leading Through Conflict cover" loading="lazy" />
      </div>
      <h2>The leadership trilogy</h2>
      <p><strong>The Leader's Motivation.</strong> Awakening the inner forces that shape how you lead. Discover the root motivations beneath your decisions — and learn to lead from a settled heart.</p>
      <p><strong>The Leader's Foundation.</strong> Where trust becomes the strongest strategy.</p>
      <p><strong>The Leader's Direction.</strong> Finding clarity in who you are and where you're called to go.</p>
      <h2>The heart series</h2>
      <p><strong>Three Paths Out of Paradise.</strong> You will either flounder or flourish in every relationship, depending on how well you know your own heart. The book that started it all.</p>
      <p><strong>Known and Called.</strong> Four questions every leader must answer: Who am I? Why am I here? Where am I going? Who loves me?</p>
      <p><strong>A Heart Well Kept.</strong> Five pillars — Peace, Patience, Process, Purpose, Permission — for anyone who walks alongside another person and wants to do it well.</p>
      <h2>With Dennis</h2>
      <p><strong>Leading Through Conflict.</strong> The practice of heart-first leadership. By John D. Erickson and Dennis R. Humphrey — a practical model for moving through conflict rather than around it, the same model we teach at the doctoral level.</p>
      <h2>Forthcoming</h2>
      <p><strong>Walking Alongside.</strong> The story of one mentoring relationship, and a guide for anyone called to walk with the next generation.</p>
    </div>
  )
}
