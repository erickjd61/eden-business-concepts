// Server-only Appwrite client. Uses the secret API key from .env.
// Never import this into client code — it must only run inside server functions.
import { Client, Databases } from 'node-appwrite'

export const DB_ID = process.env.APPWRITE_DATABASE_ID ?? 'eden'
export const SNAPSHOT_COLLECTION_ID =
  process.env.APPWRITE_SNAPSHOT_COLLECTION_ID ?? 'snapshot_results'

export function getServerDatabases() {
  const endpoint = process.env.VITE_APPWRITE_ENDPOINT
  const project = process.env.VITE_APPWRITE_PROJECT_ID
  const apiKey = process.env.APPWRITE_API_KEY

  if (!endpoint || !project || !apiKey) {
    throw new Error(
      'Appwrite env vars missing. Need VITE_APPWRITE_ENDPOINT, VITE_APPWRITE_PROJECT_ID, APPWRITE_API_KEY.',
    )
  }

  const client = new Client().setEndpoint(endpoint).setProject(project).setKey(apiKey)
  return new Databases(client)
}