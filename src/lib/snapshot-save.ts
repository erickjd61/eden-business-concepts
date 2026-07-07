import { createServerFn } from '@tanstack/react-start'

type Root = 'R' | 'V' | 'A'
const ROOTS: Root[] = ['R', 'V', 'A']

export type SnapshotPayload = {
  firstName: string
  lastInitial: string
  teamCode: string
  answers: Root[]
  viewedFaith: boolean
}

function clean(s: unknown, max: number): string {
  return typeof s === 'string' ? s.trim().slice(0, max) : ''
}

export const saveSnapshot = createServerFn({ method: 'POST' })
  .validator((d: SnapshotPayload) => d)
  .handler(async ({ data }) => {
    const { Client, Databases, ID } = await import('node-appwrite')

    const answers = Array.isArray(data.answers) ? data.answers : []
    if (answers.length !== 12 || !answers.every((a) => ROOTS.includes(a as Root))) {
      throw new Error('Invalid submission')
    }

    const count = { R: 0, V: 0, A: 0 }
    for (const a of answers) count[a as Root]++
    const order = [...ROOTS].sort((a, b) => count[b] - count[a])
    const dominant = order[0]
    const secondary = order[1]
    const nearTie = count[dominant] - count[secondary] <= 1

    const client = new Client()
      .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT!)
      .setProject(process.env.VITE_APPWRITE_PROJECT_ID!)
      .setKey(process.env.APPWRITE_API_KEY!)
    const db = new Databases(client)

    await db.createDocument(
      process.env.APPWRITE_DATABASE_ID ?? 'eden',
      process.env.APPWRITE_SNAPSHOT_COLLECTION_ID ?? 'snapshot_results',
      ID.unique(),
      {
        firstName: clean(data.firstName, 100),
        lastInitial: clean(data.lastInitial, 5),
        teamCode: clean(data.teamCode, 50),
        answers: JSON.stringify(answers),
        countR: count.R,
        countV: count.V,
        countA: count.A,
        dominant,
        secondary,
        nearTie,
        viewedFaith: Boolean(data.viewedFaith),
      },
    )

    return { ok: true }
  })