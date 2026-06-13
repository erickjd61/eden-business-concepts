import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forums')({
  head: () => ({ meta: [{ title: 'Business Forum Groups · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">Business forum groups</p>
      <h1 style={{ marginTop: 18 }}>A seat among <em>peers</em>.</h1>
      <p className="lede">Leadership is isolating. A forum fixes that. John and Dennis each chair Convene-affiliated peer advisory teams where business owners, CEOs, and senior leaders sharpen one another with expert facilitation.</p>
      <p>Around the table: leaders who carry what you carry — payroll, succession, growth, conflict, the weight of being the one everyone looks to. Monthly rhythm, complete confidentiality, real accountability.</p>
      <p>If you want to know whether a forum is right for you, the way to find out is a conversation.</p>
      <p><a className="btn btn-green" href="mailto:ebc@edenbusinessconcepts.com">Ask about a seat</a></p>
    </div>
  )
}
