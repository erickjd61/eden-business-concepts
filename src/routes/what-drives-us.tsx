import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/what-drives-us')({
  head: () => ({ meta: [{ title: 'What Drives Us · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">What drives us</p>
      <h1 style={{ marginTop: 18 }}>You will flounder or <em>flourish</em> based on how well you know your own heart.</h1>
      <p className="lede">We move leaders, their people, and their companies from floundering to flourishing. The path runs through the heart — the leader's first, then the organization's.</p>

      <h2>Our conviction</h2>
      <p>Every leader carries four questions, whether they have named them or not: Who am I? Why am I here? Where am I going? Who loves me? How a leader answers these questions shapes every decision, every conflict, and every culture they build. Our work starts there.</p>

      <h2>Our values</h2>
      <p><strong>Space.</strong> Work should not equal identity. Leaders build places where people live out purpose and value.</p>
      <p><strong>Life.</strong> Healthy companies take the long view. They give life to their people, customers, and communities.</p>
      <p><strong>Wisdom.</strong> Strategy and skill matter. So do understanding, integrity, and empathy. Leaders need both streams.</p>

      <h2>Our strategy</h2>
      <p>We listen first. Then we bring order from chaos, name the real issue, and chart a path your team can actually walk. Accuracy, efficiency, purpose — in that order.</p>
    </div>
  )
}
