import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/')({
  head: () => ({ meta: [{ title: 'What We Do · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">What we do</p>
      <h1 style={{ marginTop: 18 }}>Purposeful, targeted support.</h1>
      <p className="lede">For you, your people, and your company. Three ways we work.</p>
      <div className="offer-grid" style={{ marginTop: 56 }}>
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
          <p>A seat among peers. Convene-affiliated forums where owners and CEOs sharpen one another.</p>
          <Link to="/forums">Find your forum →</Link>
        </div>
      </div>
    </div>
  )
}
