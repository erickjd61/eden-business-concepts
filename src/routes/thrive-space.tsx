import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/thrive-space')({
  head: () => ({ meta: [{ title: 'Thrive Space · Growing the Heart of Your Business' }] }),
  component: Page,
})

function Page() {
  return (
    <div className="page wrap">
      <p className="eyebrow">Thrive Space</p>
      <h1 style={{ marginTop: 18 }}>Growing the heart of your <em>business</em>.</h1>
      <p className="lede">Perspectives and tools for leaders who would rather flourish than flounder.</p>
      <p className="muted">{'{BUILD NOTE: blog index renders here once the WordPress export is converted — 24 posts migrate to /thrive-space/[slug], slugs preserved.}'}</p>
    </div>
  )
}
