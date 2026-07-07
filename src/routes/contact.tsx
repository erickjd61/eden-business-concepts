import { createFileRoute } from '@tanstack/react-router'

import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/contact')({
  head: () => seoHead({ path: '/contact', title: "Contact · Eden Business Concepts", description: "Tell us where the company is and what's keeping you up at night. Start a conversation with Eden Business Concepts." }), component: Contact })

function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Let's talk</span>
          <h1>A conversation costs nothing — and usually <em>clarifies everything.</em></h1>
          <p className="lede">
            Tell us where the company is and what's keeping you up at night. We'll tell you,
            honestly, whether and how we can help.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <p style={{ marginTop: 0, marginBottom: 8 }}>
            <a className="btn btn-gold" href="https://calendly.com/john-erickson-meeting/30min" target="_blank" rel="noopener noreferrer">Book a 30-minute conversation →</a>
          </p>
          <p className="note" style={{ marginTop: 0, marginBottom: 36 }}>
            Pick a time that works — or reach us directly below.
          </p>
          <h2>Reach us</h2>
          <p>
            <b>Email</b><br />
            <a href="mailto:john@edenbusinessconcepts.com" style={{ color: 'var(--gold-br)' }}>john@edenbusinessconcepts.com</a>
          </p>
          <p>
            <b>Phone</b><br />
            <a href="tel:18472046570" style={{ color: 'var(--gold-br)' }}>847-204-6570</a>
          </p>
          <p>
            <b>Offices</b><br />
            Lafayette, Indiana &amp; Chicago, Illinois
          </p>
        </div>
      </section>
    </main>
  )
}
