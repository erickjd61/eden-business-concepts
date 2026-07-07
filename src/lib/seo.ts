const SITE = 'https://www.edenbusinessconcepts.com'

export function seoHead({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path?: string
}) {
  const meta = [
    { title },
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
  ]
  const links: { rel: string; href: string }[] = []
  if (path) {
    const clean = path !== '/' && path.endsWith('/') ? path.slice(0, -1) : path
    links.push({ rel: 'canonical', href: SITE + clean })
  }
  return { meta, links }
}
