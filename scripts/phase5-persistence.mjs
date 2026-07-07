import fs from 'node:fs'
const log = []
const read = p => fs.readFileSync(p, 'utf8')
const write = (p, c) => fs.writeFileSync(p, c)

const file = 'src/routes/snapshot.tsx'
let c = read(file)

const edits = [
  {
    find: "import { saveSnapshot } from '../lib/save-snapshot'",
    repl: "import { saveSnapshot } from '../lib/snapshot-save'",
    label: 'repoint import to the server function directly',
  },
  {
    find: "saveSnapshot({ firstName: first, lastInitial: initial, teamCode: team, answers: all, viewedFaith: false }).catch(() => {})",
    repl: "saveSnapshot({ data: { firstName: first, lastInitial: initial, teamCode: team, answers: all, viewedFaith: false } }).catch((e) => console.error('Snapshot save failed', e))",
    label: 'finish() -> { data } wrapper + logged catch',
  },
  {
    find: "saveSnapshot({ firstName: first, lastInitial: initial, teamCode: team, answers, viewedFaith: true }).catch(() => {})",
    repl: "saveSnapshot({ data: { firstName: first, lastInitial: initial, teamCode: team, answers, viewedFaith: true } }).catch((e) => console.error('Snapshot save failed', e))",
    label: 'revealFaith() -> { data } wrapper + logged catch',
  },
]

for (const e of edits) {
  if (c.includes(e.repl)) { log.push('persist skip  ' + e.label + ' (already applied)'); continue }
  if (!c.includes(e.find)) { log.push('persist MISS  ' + e.label + '  <-- anchor not found'); continue }
  c = c.replace(e.find, e.repl); log.push('persist OK    ' + e.label)
}
write(file, c)

console.log('\n=== Phase 5.2 · snapshot persistence ===')
console.log(log.join('\n'))
