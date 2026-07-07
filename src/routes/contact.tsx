import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({ component: Contact })

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
