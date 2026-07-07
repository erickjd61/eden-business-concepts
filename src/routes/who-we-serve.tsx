import { createFileRoute, Link } from '@tanstack/react-router'
import { seoHead } from '../lib/seo'

export const Route = createFileRoute('/who-we-serve')({
  head: () =>
    seoHead({
      title: 'Who We Serve · Eden Business Concepts',
      description:
        'Eden advises owners of closely held and family-owned businesses — commercial services, real estate, and founder-led companies across Indiana, Chicago, and the Midwest.',
    }),
  component: WhoWeServe,
})

function WhoWeServe() {
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="kicker">Who we serve</span>
          <h1>Built for owners and <em>closely held companies.</em></h1>
          <p className="lede">
            The companies we know best are the ones where ownership, leadership, and family are
            woven together — where a scaling decision touches people you love and a succession plan
            is also a family conversation.
          </p>
        </div>
      </section>

      <section className="prose">
        <div className="wrap">
          <h2>The companies</h2>
          <p>
            We work with owner-led and closely held businesses — most often family-owned companies
            at the point where the business has outgrown the way it's run. We are equally at home
            with a founder building the first real leadership team and a second-generation owner
            navigating a transition.
          </p>

          <h2>The industries</h2>
          <p>
            Our work spans commercial and facilities services, real estate services, professional
            services, and founder-led consumer and experiential brands — and closely held companies
            across many other industries. What matters more than the sector is the shape of the
            company: owner-led, growing, and ready to run on structure rather than on one person.
          </p>

          <h2>The size and stage</h2>
          <p>
            Typically small to mid-market companies that are past the startup and into the hard part
            — scaling without breaking, professionalizing without losing what made the business worth
            building, and moving the founder out of the center so growth is something the business
            can hold.
          </p>

          <h2>Where we work</h2>
          <p>
            We are based in Lafayette, Indiana and the Chicago area, and we serve clients across
            Indiana, Illinois, and the wider Midwest. We work with leaders elsewhere in the country
            as well, in person and remotely, as the engagement calls for.
          </p>

          <p style={{ marginTop: 36 }}>
            <Link to="/work" className="btn btn-ghost">See the work</Link>{' '}
            <Link to="/contact" className="btn btn-gold" style={{ marginLeft: 8 }}>Start a conversation</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
