import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team')({
  head: () => ({ meta: [{ title: 'Our Team · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">Our team</p>
      <h1 style={{ marginTop: 18 }}>On a journey together <em>since 1991</em>.</h1>
      <p className="lede">In the US, Eastern Europe, and beyond — building leaders for today and the next generation.</p>

      <h2 id="john">John D. Erickson, DMin</h2>
      <p>John has always been curious about how things work. That curiosity took him from electrical engineering at Purdue to the US Navy's aircraft development program, then to the State Department — traveling with the Secretary of State and designing embassy security across Africa and the Middle East, with postings in Nairobi, Jerusalem, and Tel Aviv.</p>
      <p>Somewhere along the way the question changed. He stopped asking how systems work and started asking how leaders work. That question carried him to Eastern Europe, where he taught in graduate schools and launched two leadership development organizations in Croatia, and then home to co-found Eden Business Concepts with Dennis.</p>
      <p>Today John serves on the doctoral faculty at Trinity Evangelical Divinity School, where he co-teaches conflict management with Dennis. He chairs two Convene peer advisory forums for business owners and CEOs. And he writes. He is the author of seven books, with an eighth, <em>Walking Alongside</em>, forthcoming.</p>
      <p className="muted">{'{VERIFY: marriage years}'} John has been married to Debbie for over 40 years; together they have a son, a daughter, and three grandchildren. He continues to mentor young leaders around the Purdue campus and across the world — a number of whom have lived in his home and taken full advantage of his love of cooking, wine, and jazz.</p>

      <h2 id="dennis">Dennis R. Humphrey, PhD</h2>
      <p>Dennis started his career on the front lines of juvenile corrections. He moved into behavioral counseling, then executive career development with one of the nation's prominent human resource firms, then C-suite advising with a boutique consultancy. Across all of it he watched the same thing happen: leaders get isolated trying to make their companies succeed. He co-founded Eden Business Concepts to move leaders out of isolation and into confident, connected leadership.</p>
      <p>His description of the work is simple: "I help leaders get unstuck in business and life concerns. When leaders get unstuck, they bring thriving to their companies and communities."</p>
      <p>Dennis holds a PhD in education and is a Licensed Clinical Professional Counselor with more than thirty years across business consulting, higher education, and behavioral health. He chairs a Convene peer advisory forum, serves on the doctoral faculty at Trinity Evangelical Divinity School alongside John, and is co-author of <em>Leading Through Conflict</em>.</p>
      <p className="muted">{'{DENNIS TO VERIFY}'} Born and raised in Southern Ontario, Dennis lives in Illinois with his wife Heather; they have four adult children. In his spare time he enjoys house projects, trap shooting, and writing.</p>
    </div>
  )
}
