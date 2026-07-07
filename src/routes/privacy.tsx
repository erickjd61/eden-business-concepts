import { createFileRoute } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/privacy')({
  head: () =>
    seoHead({
      title: 'Privacy Policy · Eden Business Concepts',
      description:
        'How Eden Business Concepts collects, uses, and protects the information you share, including Root Motivation Snapshot responses.',
    }),
  component: Privacy,
})

function Privacy() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Privacy</span>
          <h1>Your privacy, <em>plainly stated.</em></h1>
          <p className="lede">
            We keep this simple. This page explains what we collect, why, and what you can ask
            us to do with it.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <p className="note">Last updated: July 2026</p>

          <h2>What we collect</h2>
          <p>
            <b>What you send us.</b> When you email, call, or reach out through the site, we
            receive whatever you choose to share — your name, contact details, and the substance
            of your message.
          </p>
          <p>
            <b>The Root Motivation Snapshot.</b> If you take the Snapshot, we may store the first
            name and last initial you enter, an optional team code, and your answers, so we can
            generate your results and — where you ask us to — talk them through with you. The
            Snapshot is a self-reflection tool; we do not use it for hiring, selection, or any
            clinical or diagnostic purpose.
          </p>
          <p>
            <b>Basic technical data.</b> Like most sites, ours and our hosting providers record
            standard technical information (such as browser type and general location) to keep
            the site running and secure.
          </p>

          <h2>How we use it</h2>
          <p>
            We use what you share to respond to you, to generate and discuss your Snapshot
            results, and to improve the site and the tool.{' '}
            <b>We do not sell your personal information, and we do not share it with advertisers.</b>
          </p>

          <h2>Who processes it</h2>
          <p>
            The site is hosted on Vercel, and Snapshot responses are stored using Appwrite. These
            providers process data on our behalf so the site and tool can function. We don't share
            your information with anyone else except where the law requires it.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep information only as long as we need it for the purpose you gave it to us, and
            no longer. You can ask us to delete your information at any time.
          </p>

          <h2>Your choices</h2>
          <p>
            Write to us and we'll tell you what we hold, correct it, or delete it. The easiest way
            is email:{' '}
            <a href="mailto:john@edenbusinessconcepts.com" style={{ color: 'var(--gold-br)' }}>
              john@edenbusinessconcepts.com
            </a>
            .
          </p>

          <h2>Children</h2>
          <p>This site is intended for business leaders and is not directed to children under 16.</p>

          <h2>Changes</h2>
          <p>
            If we update this policy, we'll change the date above. Continued use of the site means
            you accept the current version.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about privacy? Email{' '}
            <a href="mailto:john@edenbusinessconcepts.com" style={{ color: 'var(--gold-br)' }}>
              john@edenbusinessconcepts.com
            </a>{' '}
            or write to Eden Business Concepts, LLC, Lafayette, Indiana.
          </p>
        </div>
      </section>
    </main>
  )
}
