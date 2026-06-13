import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/services/team-optimization')({
  head: () => ({ meta: [{ title: 'Team Optimization · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">Team optimization</p>
      <h1 style={{ marginTop: 18 }}>Root issues, not symptoms.</h1>
      <p className="lede">Conflict mediation, crisis intervention, and people development for teams that want to work — and stay working.</p>
      <h2>Conflict mediation</h2>
      <p>People with different experiences, values, and motives reach different conclusions. When those differences carry emotional weight, conflict is how we protect our position. Our proven strategy moves individuals, groups, and organizations through conflict to understanding, cooperation, and restored working relationships. We wrote the book on it — literally: <em>Leading Through Conflict</em>, which we also teach at the doctoral level.</p>
      <h2>Crisis intervention</h2>
      <p>When a leader faces a highly stressful or potentially damaging situation, the first response is critical for the recovery of the leader and the company. Our training and experience let us step in and walk with you in the middle of it.</p>
      <h2>People and leadership development</h2>
      <p>A life-giving workplace grows when people feel safe, heard, respected, and valued. We build that capacity through keynotes, seminars, and courses: self-awareness, thriving in conflict, leadership dynamics, communication, and mentoring relationships.</p>
    </div>
  )
}
