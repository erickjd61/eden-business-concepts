import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  head: () => ({ meta: [{ title: 'Contact · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">Contact</p>
      <h1 style={{ marginTop: 18 }}>Ready to <em>flourish</em>? Let's talk.</h1>
      <p className="lede">A conversation costs nothing and usually clarifies everything.</p>
      <h2>John D. Erickson, DMin</h2>
      <p><a href="mailto:john@edenbusinessconcepts.com">john@edenbusinessconcepts.com</a> · 800-765-7450 Ext. 1</p>
      <h2>Dennis R. Humphrey, PhD</h2>
      <p><a href="mailto:dennis@edenbusinessconcepts.com">dennis@edenbusinessconcepts.com</a> · 800-765-7450 Ext. 2</p>
      <p className="muted" style={{ marginTop: 40 }}>{'{BUILD NOTE: contact form lands here — Formspree per the XTRM pattern, or re-embedded LeadConnector, pending the plumbing decision in the Migration Plan §5.}'}</p>
    </div>
  )
}
