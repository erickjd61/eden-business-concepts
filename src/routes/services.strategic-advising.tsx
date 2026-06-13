import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/strategic-advising')({
  head: () => ({ meta: [{ title: 'Strategic Advising · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">Strategic advising</p>
      <h1 style={{ marginTop: 18 }}>Clarity for the decisions that keep you up at night.</h1>
      <p className="lede">Strategy, succession, structure, decision making, and leadership coaching — with thirty-five years of pattern recognition behind every conversation.</p>
      <h2>Strategic planning</h2>
      <p>Is everyone in your company on the same page about where you're going and how to get there? We work the plan from purpose to path: big picture, desired outcomes, and the decisions that get you there.</p>
      <h2>Organizational development</h2>
      <p>Are your people in the right jobs for their abilities and passions? Do your core processes hold under pressure? Structure follows clarity; we build both.</p>
      <h2>Succession and legacy planning</h2>
      <p>Everything you have built should flow forward through the leaders you have developed. We design the framework and walk the transition with you, at any stage of your leadership.</p>
      <h2>Decision making</h2>
      <p>Every decision is emotional; good decisions understand why. We dig into your decision-making style — mental, emotional, strategic — and the outcomes it generates.</p>
      <h2>Leadership coaching</h2>
      <p>It begins with a conversation: your story, your challenges, your strengths. From there we form a plan for your real leadership situation — conversations, conflicts, and day-to-day decisions.</p>
    </div>
  )
}
