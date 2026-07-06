'use server'
// Server function: validate a Snapshot submission, score it, and save it.
// The tally is recomputed here — the browser's numbers are never trusted.
import { createServerFn } from '@tanstack/react-start'
import { ID } from 'node-appwrite'
import { getServerDatabases, DB_ID, SNAPSHOT_COLLECTION_ID } from './appwrite'

type Root = 'R' | 'V' | 'A'
const ROOTS: Root[] = ['R', 'V', 'A']

type Payload = {
  firstName: string
  lastInitial: string
  teamCode: string
  answers: string[]
  viewedFaith: boolean
}

function clean(s: unknown, max: number): string {
  return typeof s === 'string' ? s.trim().slice(0, max) : ''
}

export const saveSnapshot = createServerFn({ method: 'POST' })
  .validator((data: Payload) => data)
  .handler(async ({ data }) => {
    const answers = Array.isArray(data.answers) ? data.answers : []

    // Must be exactly 12 answers, each R/V/A.
    if (answers.length !== 12 || !answers.every((a) => ROOTS.includes(a as Root))) {
      throw new Error('Invalid submission')
    }

    // Score on the server.
    const count = { R: 0, V: 0, A: 0 }
    for (const a of answers) count[a as Root]++
    const order = [...ROOTS].sort((a, b) => count[b] - count[a])
    const dominant = order[0]
    const secondary = order[1]
    const nearTie = count[dominant] - count[secondary] <= 1

    const db = getServerDatabases()
    await db.createDocument(DB_ID, SNAPSHOT_COLLECTION_ID, ID.unique(), {
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
    })

    return { ok: true }
  })