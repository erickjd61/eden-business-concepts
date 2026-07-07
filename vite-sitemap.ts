import fs from 'node:fs'
import path from 'node:path'

const SITE = 'https://www.edenbusinessconcepts.com'

const STATIC_ROUTES = [
  '/', '/scaling', '/leadership', '/advising', '/conflict', '/books', '/insights',
  '/about', '/contact', '/snapshot', '/work', '/work/servicemaster', '/work/mainstream',
  '/work/theflowstashon', '/root-motivations', '/faq', '/who-we-serve', '/archive',
  '/privacy', '/terms',
]

function readInsightPosts(root: string): { slug: string; date: string }[] {
  const dir = path.join(root, 'content', 'insights')
  let files: string[]
  try {
    files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
  } catch {
    return []
  }
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(dir, f), 'utf8')
    const m = /^---\s*\n([\s\S]*?)\n---/.exec(raw)
    const meta: Record<string, string> = {}
    if (m) {
      for (const line of m[1].split('\n')) {
        const i = line.indexOf(':')
        if (i === -1) continue
        let v = line.slice(i + 1).trim()
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1)
        }
        meta[line.slice(0, i).trim()] = v
      }
    }
    return { slug: meta.slug || f.replace(/\.md$/, ''), date: meta.date || '' }
  })
}

function buildSitemap(root: string): string {
  const posts = readInsightPosts(root).sort((a, b) => (a.slug < b.slug ? -1 : 1))
  const entries = [
    ...STATIC_ROUTES.map((r) => ({ loc: SITE + r, lastmod: '' })),
    ...posts.map((p) => ({ loc: `${SITE}/insights/${p.slug}`, lastmod: p.date })),
  ]
  const body = entries
    .map(
      (e) =>
        `  <url>\n    <loc>${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}\n  </url>`,
    )
    .join('\n')
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`
}

export function edenSitemap() {
  const write = () => {
    const root = process.cwd()
    fs.writeFileSync(path.join(root, 'public', 'sitemap.xml'), buildSitemap(root))
  }
  return {
    name: 'eden-sitemap',
    buildStart() {
      write()
    },
    configureServer() {
      write()
    },
  }
}
