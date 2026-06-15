import { marked } from 'marked'

// Posts that lean hard into 2022 pandemic-era crisis/trauma themes — kept available
// in the Archive but held out of the main Insights index.
const ARCHIVED_SLUGS = new Set<string>([
  'leading-through-collective-trauma',
  'thriving-leaders-take-mental-health-seriously',
  'mental-health-and-workplace-chaplaincy',
  'creating-a-trauma-informed-workplace',
  'navigating-a-mental-health-crisis-in-the-workplace',
  'being-prepared-for-a-crisis',
])

// Very short stub files that aren't full articles — excluded from listings.
const STUB_SLUGS = new Set<string>([
  'finding-the-leaders-heart',
  'what-it-means-to-thrive-as-a-business-leader',
])

export type Post = {
  slug: string
  title: string
  date: string
  body: string
  excerpt: string
  archived: boolean
  source: 'archive' | 'linkedin' | 'thrive-space'
}

// Eagerly import every markdown file's raw text at build time.
const files = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const m = /^---\s*\n([\s\S]*?)\n---\s*\n?/.exec(raw)
  if (!m) return { meta: {}, body: raw }
  const meta: Record<string, string> = {}
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':')
    if (i === -1) continue
    const key = line.slice(0, i).trim()
    let val = line.slice(i + 1).trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    meta[key] = val
  }
  return { meta, body: raw.slice(m[0].length) }
}

function deriveExcerpt(body: string): string {
  const text = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/^#{1,6}\s+.*$/gm, '') // headings
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[*_>`#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
  const words = text.split(' ').filter(Boolean)
  const cut = words.slice(0, 32).join(' ')
  return words.length > 32 ? cut + '…' : cut
}

function slugFromPath(path: string): string {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

const ALL: Post[] = Object.entries(files)
  .map(([path, raw]) => {
    const { meta, body } = parseFrontmatter(raw)
    const slug = meta.slug || slugFromPath(path)
    const isLinkedIn = path.includes('/insights/')
    return {
      slug,
      title: meta.title || slug,
      date: meta.date || '',
      body,
      excerpt: meta.excerpt && meta.excerpt.trim() ? meta.excerpt : deriveExcerpt(body),
      archived: ARCHIVED_SLUGS.has(slug),
      source: isLinkedIn ? 'linkedin' : ('thrive-space' as Post['source']),
    }
  })
  .filter((p) => !STUB_SLUGS.has(p.slug))
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

export function currentPosts(): Post[] {
  return ALL.filter((p) => !p.archived)
}
export function archivedPosts(): Post[] {
  return ALL.filter((p) => p.archived)
}
export function getPost(slug: string): Post | undefined {
  return ALL.find((p) => p.slug === slug)
}
export function renderMarkdown(body: string): string {
  return marked.parse(body, { async: false }) as string
}
export function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso + 'T00:00:00')
  if (isNaN(d.getTime())) return iso
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
