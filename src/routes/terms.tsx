import { createFileRoute } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/terms')({
  head: () =>
    seoHead({ path: '/terms',
      title: 'Terms of Use · Eden Business Concepts',
      description:
        'The terms that govern your use of the Eden Business Concepts website, its content, and the Root Motivation Snapshot.',
    }),
  component: Terms,
})

function Terms() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Terms</span>
          <h1>Terms of <em>use.</em></h1>
          <p className="lede">
            The short version: use the site in good faith, the content is ours, and it's offered
            for insight rather than as formal advice.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <p className="note">Last updated: July 2026</p>

          <h2>Using this site</h2>
          <p>
            By using this site you agree to these terms. Please use it for lawful, personal, and
            informational purposes, and don't attempt to disrupt it or misuse what you find here.
          </p>

          <h2>Our content</h2>
          <p>
            The writing, frameworks, graphics, and books on this site belong to Eden Business
            Concepts, LLC and its principals, and are protected by copyright. You're welcome to
            read and share links; please don't reproduce substantial portions as your own.
          </p>

          <h2>The Root Motivation Snapshot</h2>
          <p>
            The Snapshot is a structured self-reflection exercise offered to prompt insight and
            conversation. <b>It is not a validated psychological assessment, and it is not for
            hiring, selection, or clinical or diagnostic use.</b> Treat your results as a starting
            point, not a verdict.
          </p>

          <h2>Not professional advice</h2>
          <p>
            The content here is general and educational. It is not legal, financial, tax, or
            clinical advice, and it doesn't create an advisory or counseling relationship. For
            decisions that carry real consequences, work with a qualified professional who knows
            your situation.
          </p>

          <h2>As-is, and limits of liability</h2>
          <p>
            The site is provided "as is," without warranties of any kind. To the fullest extent
            allowed by law, Eden Business Concepts, LLC is not liable for any loss arising from
            your use of the site or reliance on its content.
          </p>

          <h2>Links to other sites</h2>
          <p>
            Some links lead elsewhere — for example, to Amazon for our books. We aren't responsible
            for the content or practices of sites we don't operate.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Indiana, without regard to its
            conflict-of-laws rules.
          </p>

          <h2>Changes</h2>
          <p>
            We may update these terms; we'll change the date above when we do. Continued use of the
            site means you accept the current version.
          </p>

          <h2>Contact</h2>
          <p>
            Questions? Email{' '}
            <a href="mailto:john@edenbusinessconcepts.com" style={{ color: 'var(--gold-br)' }}>
              john@edenbusinessconcepts.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  )
}
