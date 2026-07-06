// setup-eden-appwrite.mjs
// One-time setup: creates the Eden database, the snapshot_results table, its
// columns and indexes. Safe to re-run — it skips anything that already exists.
//
// 1) In the Appwrite console, create a project and an API key (see instructions).
// 2) Install the SDK in any folder:  npm install node-appwrite
// 3) Run with your three values:
//
//    APPWRITE_ENDPOINT="https://<region>.cloud.appwrite.io/v1" \
//    APPWRITE_PROJECT_ID="xxxxxxxx" \
//    APPWRITE_API_KEY="yyyyyyyy" \
//    node setup-eden-appwrite.mjs
//
// When it finishes it prints the env block to paste into eden-deploy/.env and Vercel.

import { Client, Databases } from "node-appwrite";

const ENDPOINT = process.env.APPWRITE_ENDPOINT;
const PROJECT  = process.env.APPWRITE_PROJECT_ID;
const KEY      = process.env.APPWRITE_API_KEY;

if (!ENDPOINT || !PROJECT || !KEY) {
  console.error("Missing APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, or APPWRITE_API_KEY.");
  process.exit(1);
}

const DB_ID  = "eden";
const COL_ID = "snapshot_results";

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT).setKey(KEY);
const db = new Databases(client);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function safe(label, fn) {
  try { await fn(); console.log("  \u2713 " + label); }
  catch (e) {
    if (e?.code === 409) console.log("  \u2022 " + label + " (already exists, skipped)");
    else { console.error("  \u2717 " + label + " \u2014 " + (e?.message || e)); throw e; }
  }
}

async function waitForAttributes() {
  process.stdout.write("  waiting for columns to become available");
  for (let i = 0; i < 30; i++) {
    const col = await db.getCollection(DB_ID, COL_ID);
    const pending = col.attributes.filter((a) => a.status !== "available");
    if (pending.length === 0) { console.log("  \u2014 ready"); return; }
    process.stdout.write(".");
    await sleep(1500);
  }
  console.log("\n  (columns still processing; indexes may need a re-run)");
}

async function main() {
  console.log("\nSetting up Eden Appwrite \u2192 database '" + DB_ID + "', table '" + COL_ID + "'\n");

  await safe("database", () => db.create(DB_ID, "Eden"));
  await safe("table snapshot_results", () => db.createCollection(DB_ID, COL_ID, "snapshot_results", [], false));

  console.log("Columns:");
  await safe("firstName",   () => db.createStringAttribute(DB_ID, COL_ID, "firstName", 100, false));
  await safe("lastInitial", () => db.createStringAttribute(DB_ID, COL_ID, "lastInitial", 5, false));
  await safe("teamCode",    () => db.createStringAttribute(DB_ID, COL_ID, "teamCode", 50, false));
  await safe("answers",     () => db.createStringAttribute(DB_ID, COL_ID, "answers", 400, false));
  await safe("countR",      () => db.createIntegerAttribute(DB_ID, COL_ID, "countR", false));
  await safe("countV",      () => db.createIntegerAttribute(DB_ID, COL_ID, "countV", false));
  await safe("countA",      () => db.createIntegerAttribute(DB_ID, COL_ID, "countA", false));
  await safe("dominant",    () => db.createStringAttribute(DB_ID, COL_ID, "dominant", 1, false));
  await safe("secondary",   () => db.createStringAttribute(DB_ID, COL_ID, "secondary", 1, false));
  await safe("nearTie",     () => db.createBooleanAttribute(DB_ID, COL_ID, "nearTie", false));
  await safe("viewedFaith", () => db.createBooleanAttribute(DB_ID, COL_ID, "viewedFaith", false));

  await waitForAttributes();

  console.log("Indexes:");
  await safe("idx_dominant", () => db.createIndex(DB_ID, COL_ID, "idx_dominant", "key", ["dominant"]));
  await safe("idx_teamCode", () => db.createIndex(DB_ID, COL_ID, "idx_teamCode", "key", ["teamCode"]));

  console.log("\nDone. Paste these into eden-deploy/.env (and Vercel project env):\n");
  console.log("  VITE_APPWRITE_ENDPOINT=" + ENDPOINT);
  console.log("  VITE_APPWRITE_PROJECT_ID=" + PROJECT);
  console.log("  APPWRITE_API_KEY=" + KEY + "   # server only \u2014 do NOT prefix with VITE_");
  console.log("  APPWRITE_DATABASE_ID=" + DB_ID);
  console.log("  APPWRITE_SNAPSHOT_COLLECTION_ID=" + COL_ID + "\n");
}

main().catch((e) => { console.error("\nSetup stopped:", e?.message || e); process.exit(1); });
