import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/thrive-space')({
  head: () => ({ meta: [{ title: 'Thrive Space · Eden Business Concepts' }] }),
  component: Page,
})

function Page() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Thrive Space</span>
          <h1>Growing the heart of your <em>business.</em></h1>
          <p className="lede">
            Perspectives and tools for leaders who want to build something that lasts.
          </p>
        </div>
      </section>
      <section className="prose">
        <div className="wrap">
          <p className="note">
            Twenty-four articles from our archive are being brought over here. The reading
            experience is the next piece to build.
          </p>
        </div>
      </section>
    </main>
  )
}
