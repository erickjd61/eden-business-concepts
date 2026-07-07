import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'
import { JsonLd } from '../components/JsonLd'

export const Route = createFileRoute('/root-motivations')({
  head: () =>
    seoHead({
      title: 'The Three Root Motivations of a Leader · Eden Business Concepts',
      description:
        'Every leader is driven by a root motivation — Respect, Value, or Approval. What each one is, its strength, its failure mode under pressure, and how it matures.',
    }),
  component: RootMotivations,
})

const schema = {
  '@context': 'https://schema.org',
  '@type': 'DefinedTermSet',
  '@id': 'https://edenbusinessconcepts.com/root-motivations',
  name: 'The Three Root Motivations of a Leader',
  description:
    'A framework used by Eden Business Concepts: most leaders lead primarily from one of three root motivations — Respect, Value, or Approval.',
  url: 'https://edenbusinessconcepts.com/root-motivations',
  hasDefinedTerm: [
    { '@type': 'DefinedTerm', name: 'Respect', description: 'The drive to be seen as capable and right; its shadow is the fear of being exposed as less than one appears.' },
    { '@type': 'DefinedTerm', name: 'Value', description: 'The drive to matter and make a difference; its shadow is the fear of insignificance.' },
    { '@type': 'DefinedTerm', name: 'Approval', description: 'The drive to be accepted and wanted; its shadow is the fear of rejection.' },
  ],
}

function RootMotivations() {
  return (
    <main>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">The framework</span>
          <h1>The three root motivations of a <em>leader.</em></h1>
          <p className="lede">
            Underneath how any leader works is a deeper question: what you're reaching for, and what
            you're most afraid of. We call the answer your root motivation. Most leaders lead
            primarily from one of three — Respect, Value, or Approval.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          <p>
            None of the three is better than the others. Each carries a real strength at its best, a
            characteristic failure mode under pressure, and the capacity to mature into something
            steadier. Naming yours is the beginning of leading from it deliberately, rather than
            being driven by it from the shadows.
          </p>

          <h2>Respect</h2>
          <p>
            The leader who leads with Respect is reaching to be seen as capable and right — and most
            fears being exposed as less than they appear. At its best, this makes for a sharp,
            prepared leader: the one who tells the truth others won't and steadies a room with sound
            judgment. Under pressure it turns inward — defending rather than listening, treating
            being wrong as being exposed, protecting standing at the cost of the people around them.
            The maturing arc isn't less drive; it's a steadier source. Respect that has to be seized
            stays fragile. Respect that is received — from work done well and judgment offered freely
            — sets a leader down. That is the road from the sharpest person in the room to the wisest.
          </p>

          <h2>Value</h2>
          <p>
            The leader who leads with Value is reaching to matter — and most fears insignificance,
            the sense that without what they build they are nothing. At its best, this is the engine:
            the leader who carries weight others can't, the one things move around. Under pressure the
            engine can't idle — rest feels like exposure, worth gets tied to the result, and a flat
            quarter lands not as a setback but as a verdict on the self. The maturing arc is to find
            worth where results can't reach it. When a leader's value isn't on the line, they stop
            building monuments to themselves and start building people — the turn from a driven
            performer into someone others are genuinely inspired by.
          </p>

          <h2>Approval</h2>
          <p>
            The leader who leads with Approval is reaching to be accepted and wanted — and most fears
            rejection, being left on the outside. At its best, this is the leader who holds a team
            together: reads the room, senses what's unsaid, builds belonging. Under pressure the same
            instinct goes quiet at the worst moment — the hard conversation is delayed, softened, or
            swallowed, because the disapproval on the other side feels heavier than it can carry, and
            a surface peace hides a problem growing underneath. The maturing arc is a security that
            doesn't depend on the next person's approval — and from there, the freedom to say the
            hard thing, which is the only road to a peace that lasts.
          </p>

          <h2>Naming your own</h2>
          <p>
            Most leaders recognize themselves in one of the three within a few honest minutes — and
            often see a second, quieter pull underneath it. The Root Motivation Snapshot is a short,
            structured way to find yours and to reflect on what it's been doing in your leadership.
          </p>
          <p style={{ marginTop: 28 }}>
            <Link to="/snapshot" className="btn btn-gold">Take the Snapshot</Link>{' '}
            <Link to="/leadership" className="btn btn-ghost" style={{ marginLeft: 8 }}>How we form leaders</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
