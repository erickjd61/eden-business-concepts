import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'
import { JsonLd } from '../components/JsonLd'

export const Route = createFileRoute('/faq')({
  head: () =>
    seoHead({
      title: 'Frequently Asked Questions · Eden Business Concepts',
      description:
        'Answers on how Eden works — EOS/Traction, engagement pricing, family and non-family businesses, faith, and the Root Motivation Snapshot.',
    }),
  component: Faq,
})

const FAQ = [
  { q: 'Are you EOS Implementers?', a: "We're not affiliated with EOS Worldwide. We support implementation of the Traction/EOS model developed by Gino Wickman, and we serve as fractional integrators under the guidance of a certified EOS Implementer — helping you install and run the operating system rather than selling you the framework." },
  { q: 'How are engagements priced?', a: "We don't sell packages. Because we're process consultants, we scope each engagement to the situation — a standing advisory seat, a defined sprint around a single decision, or a full operating-system build — and we're clear about what it will take before we begin. If cost is the question, the fastest answer is a short conversation." },
  { q: 'Do you only work with family businesses?', a: 'No. Our deepest experience is with closely held and family-owned companies, where ownership, leadership, and family are woven together, but we work with owner-led and closely held businesses of many kinds. If the company and the people leading it are inseparable, we are likely a fit.' },
  { q: 'What does an engagement actually look like?', a: "It starts with listening. We diagnose before we prescribe, then bring the right tools to your situation rather than running every company down the same track, and we design the cadence with you. The aim throughout is capability, not dependency: we've done the work well when the company can run without us." },
  { q: 'Is your work faith-based?', a: 'Our work is informed by a conviction that leadership is, at root, a matter of the heart. That conviction runs through our books, and the Root Motivation Snapshot offers an optional layer in the language of faith. We serve leaders of every background, faith or none, and our advisory work stands on its own.' },
  { q: 'Do you work remotely or in person?', a: 'Both. We are based in Lafayette, Indiana and the Chicago area, we work with clients across the Midwest and beyond, and we meet in person and remotely as the work requires.' },
  { q: 'What is the Root Motivation Snapshot?', a: 'A short self-reflection tool that helps a leader notice what tends to drive them — Respect, Value, or Approval. It is a structured starting point for conversation, not a validated psychological assessment and not a hiring or selection tool.' },
]

const schema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

function Faq() {
  return (
    <main>
      <JsonLd data={schema} />
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Questions</span>
          <h1>Straight answers to the <em>honest questions.</em></h1>
          <p className="lede">
            The things owners actually ask before starting a conversation. If yours isn't here, ask
            us.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          {FAQ.map((f) => (
            <div key={f.q} style={{ marginBottom: 32 }}>
              <h2 style={{ marginBottom: 8 }}>{f.q}</h2>
              <p style={{ marginTop: 0 }}>{f.a}</p>
            </div>
          ))}
          <p style={{ marginTop: 40 }}>
            <Link to="/snapshot" className="btn btn-gold">Take the Snapshot</Link>{' '}
            <Link to="/contact" className="btn btn-ghost" style={{ marginLeft: 8 }}>Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
