import { createFileRoute } from '@tanstack/react-router'
import { useMemo, useState } from 'react'

export const Route = createFileRoute('/snapshot')({ component: Snapshot })

type Root = 'R' | 'V' | 'A'

function saveSnapshot(opts: { data: { firstName: string; lastInitial: string; teamCode: string; answers: Root[]; viewedFaith: boolean } }) {
  return import('../lib/snapshot-save').then((m) => m.saveSnapshot(opts))
}

export const Route = createFileRoute('/snapshot')({ component: Snapshot })

type Root = 'R' | 'V' | 'A'

const ROOTS: Record<Root, {
  name: string; type: string
  market: string; reflect: string[]; move: string; sin: string; faith: string
}> = {
  R: {
    name: 'Respect', type: 'The Proven',
    market: "You lead with Respect. Underneath, you’re reaching to be seen as capable and right — and what you most fear is being exposed as less than you appear. At your best it makes you sharp and prepared, the one who tells the truth others won’t and steadies a room with sound judgment. Under pressure it turns: you defend instead of listen, being wrong feels like being exposed, and you begin protecting your standing at the cost of the people around you. The growth isn’t less drive — it’s a steadier source. Respect you have to seize stays fragile; respect received, from work done well and judgment offered freely, sets you down. That’s the road from the sharpest in the room to the wisest.",
    reflect: ['Where does being right matter more to you than being useful?', 'Whose correction do you resist most — and why?', 'What would change if your standing were already secure?'],
    move: 'Name one thing you’ve been defending, and let yourself be wrong about it — out loud, to one person you trust.',
    sin: 'pride',
    faith: "Named plainly, this pull is pride. Respect is meant to be received; pride reaches out and takes it into its own hands. Underneath lies the question, Who am I? Pride answers with your record — so any challenge to your competence feels like a challenge to your very self. The Gospel answers differently: God knew you and held you before you had proved a single thing, and His regard for you cannot be lost. That kind of security is the only ground solid enough to make a leader wise. Pride is really wisdom turned in on itself. Christ turns it back out.",
  },
  V: {
    name: 'Value', type: 'The Builder',
    market: "You lead with Value. Underneath, you’re reaching to matter — and what you most fear is being insignificant, that without what you build you are nothing. At your best you’re the engine: you carry weight others can’t, and things move when you walk in. Under pressure the engine can’t idle — rest feels like exposure, you tie your worth to the result, and a flat quarter lands not as a setback but as a verdict on you. The growth is to find your worth where results can’t reach it. When your value isn’t on the line, you stop building monuments to yourself and start building people. That’s the turn from a driven performer into an inspiration.",
    reflect: ['Where do you keep producing when you should rest?', 'Whose worth — including your own — are you measuring by output?', 'What would change this week if your value weren’t on the line?'],
    move: 'Name the result you’re treating as a verdict on yourself, and tell one trusted person: I am not that result.',
    sin: 'idolatry',
    faith: "Named plainly, this pull is idolatry. It takes a good thing — your work — and hangs your whole worth on it. Underneath lies the question, Why am I here? Idolatry answers with your output, and no one can live on output alone. The Gospel answers differently: your worth was settled at the cross, while you were still producing nothing. You are not what you produce. You are loved, and the love came first. When your worth rests there instead, the work stops being an idol and becomes an offering.",
  },
  A: {
    name: 'Approval', type: 'The Peacemaker',
    market: "You lead with Approval. Underneath, you’re reaching to be accepted and wanted — and what you most fear is rejection, being left on the outside. At your best you’re the one who holds a team together: you read the room, sense what’s unsaid, and build belonging. Under pressure the same instinct goes quiet at the worst moment — the hard conversation gets delayed, softened, or swallowed, because the disapproval on the other side feels heavier than you can carry. You keep a surface peace while the real problem grows beneath it. The growth is a security that doesn’t depend on the next person’s approval — and from there you can finally say the hard thing, which is the only road to a peace that lasts.",
    reflect: ['What hard conversation have you been avoiding to keep the peace?', 'Whose approval are you managing right now?', 'What would you say if their displeasure couldn’t touch you?'],
    move: 'Have the one honest conversation you’ve been softening — and say the true thing, in care.',
    sin: 'unbelief',
    faith: "Named plainly, this pull is unbelief. Deep down it doubts that you are truly held, so it works to keep everyone happy in order to feel safe. Underneath lies the question, Who loves me? Unbelief answers with the crowd. The Gospel answers once and for all: you are loved by the One whose approval you can never lose, settled at the cross before you earned a thing. When you know you are already held, you can risk someone’s disapproval for their good. Real peace was never the absence of conflict — it is love that is secure enough to tell the truth.",
  },
}

const SECOND: Record<Root, string> = {
  R: 'a sharp need to be seen as capable, and you defend your judgment more than most.',
  V: 'a restless drive to produce and to be needed.',
  A: 'a strong pull to keep people close and the peace kept.',
}

const QUESTIONS: [string, [Root, string][]][] = [
  ['When something you do fails, what stings most?', [['R', 'Looking incompetent — like I didn’t know what I was doing.'], ['V', 'The feeling that it — and maybe I — didn’t really matter.'], ['A', 'Letting people down, and feeling them pull away.']]],
  ['What do you most want from the people whose opinion you value?', [['R', 'To be respected for my judgment and ability.'], ['V', 'To be seen as someone who makes a real difference.'], ['A', 'To be genuinely accepted and wanted.']]],
  ['The criticism that would cut the deepest:', [['R', '“You’re not as capable as you think you are.”'], ['V', '“You never really amounted to much.”'], ['A', '“People don’t actually enjoy being around you.”']]],
  ['You feel most settled when…', [['R', 'I know I’m good at what I do, and it shows.'], ['V', 'I can see that what I do genuinely matters.'], ['A', 'I’m close and in good standing with the people I care about.']]],
  ['When someone has something you quietly wish you had, it’s usually…', [['R', 'Their ability — they’re plainly more capable than me.'], ['V', 'Their significance — they’re plainly doing something that matters.'], ['A', 'Their belonging — they’re plainly loved and wanted.']]],
  ['Deep down, what are you most afraid of being?', [['R', 'A fraud — exposed as not as capable as people think.'], ['V', 'Insignificant — someone whose life didn’t count for much.'], ['A', 'Alone — unwanted, on the outside.']]],
  ['Where do you most draw your sense of who you are?', [['R', 'From being competent and respected.'], ['V', 'From making a difference that matters.'], ['A', 'From my closeness with the people I love.']]],
  ['When you drive yourself hardest, what are you really after?', [['R', 'To prove I’m capable — to be undeniable.'], ['V', 'To prove I matter — that I’m not insignificant.'], ['A', 'To secure my place with people — to be wanted and needed.']]],
  ['What would you least be able to bear losing?', [['R', 'The regard people have for what I can do.'], ['V', 'The sense that my life counts for something.'], ['A', 'The closeness of the people I love.']]],
  ['Walking into a room you want to win over, your quiet hope is…', [['R', 'That they’ll see I’m sharp and know my stuff.'], ['V', 'That they’ll see I’m someone who matters.'], ['A', 'That they’ll like me and be glad I’m there.']]],
  ['Years from now, what would mean the most to hear said of you?', [['R', 'That I was brilliant at what I did.'], ['V', 'That my life made a real difference.'], ['A', 'That I was deeply loved.']]],
  ['What quietly fuels your worst stress?', [['R', 'The worry that I’ll be found out as not good enough.'], ['V', 'The worry that none of it really matters.'], ['A', 'The worry that I’ll be rejected or left behind.']]],
]

function shuffle<T>(a: T[]): T[] {
  const b = a.slice()
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]] }
  return b
}

function Snapshot() {
  const [stage, setStage] = useState<'welcome' | 'quiz' | 'report'>('welcome')
  const [first, setFirst] = useState('')
  const [initial, setInitial] = useState('')
  const [team, setTeam] = useState('')
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState<Root[]>([])
  const [showFaith, setShowFaith] = useState(false)

  const orders = useMemo(() => QUESTIONS.map((q) => shuffle(q[1])), [])

  function pick(root: Root) {
    const next = [...answers]; next[idx] = root; setAnswers(next)
    setTimeout(() => { if (idx < QUESTIONS.length - 1) setIdx(idx + 1); else finish(next) }, 160)
  }

  function finish(all: Root[]) {
    setStage('report')
    saveSnapshot({ data: { firstName: first, lastInitial: initial, teamCode: team, answers: all, viewedFaith: false } }).catch(() => {})
  }

  const counts = useMemo(() => {
    const c = { R: 0, V: 0, A: 0 }; answers.forEach((r) => c[r]++); return c
  }, [answers])
  const order = (['R', 'V', 'A'] as Root[]).sort((a, b) => counts[b] - counts[a])
  const dom = order[0], sec = order[1]
  const near = counts[dom] - counts[sec] <= 1

  function revealFaith() {
    setShowFaith(true)
    saveSnapshot({ data: { firstName: first, lastInitial: initial, teamCode: team, answers, viewedFaith: true } }).catch(() => {})
  }

  return (
    <main>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: 720 }}>

          {stage === 'welcome' && (
            <>
              <span className="kicker">The Root Motivation Snapshot</span>
              <h1>A look beneath what you do, at what you’re <em>reaching for.</em></h1>
              <p className="lede">Twelve questions, a few honest minutes. Choose the option most true — and when none fits perfectly, the closest one anyway. Which way you lean when the fit is rough is itself part of the answer.</p>
              <div style={{ margin: '28px 0', display: 'grid', gap: 14, maxWidth: 420 }}>
                <input value={first} onChange={(e) => setFirst(e.target.value)} placeholder="First name" className="snap-input" />
                <input value={initial} onChange={(e) => setInitial(e.target.value)} placeholder="Last initial" className="snap-input" />
                <input value={team} onChange={(e) => setTeam(e.target.value)} placeholder="Team code (optional)" className="snap-input" />
              </div>
              <button className="btn btn-gold" disabled={!first.trim()} onClick={() => setStage('quiz')}>Begin</button>
            </>
          )}

          {stage === 'quiz' && (
            <>
              <span className="kicker">Question {idx + 1} of {QUESTIONS.length}</span>
              <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 'clamp(26px,3.6vw,38px)', lineHeight: 1.2, margin: '14px 0 30px' }}>{QUESTIONS[idx][0]}</h2>
              <div style={{ display: 'grid', gap: 12 }}>
                {orders[idx].map(([root, text]) => (
                  <button key={text} className="snap-opt" onClick={() => pick(root)}>{text}</button>
                ))}
              </div>
              {idx > 0 && <button className="snap-back" onClick={() => setIdx(idx - 1)}>\u2190 Previous</button>}
            </>
          )}

          {stage === 'report' && (
            <>
              <span className="kicker">Your Snapshot</span>
              <div style={{ margin: '18px 0 34px' }}>
                {(['R', 'V', 'A'] as Root[]).map((k) => (
                  <div key={k} style={{ display: 'grid', gridTemplateColumns: '120px 1fr 28px', alignItems: 'center', gap: 14, margin: '12px 0' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 13, letterSpacing: '.04em', textTransform: 'uppercase', color: k === dom ? 'var(--gold-br)' : 'var(--cream-dim)' }}>{ROOTS[k].name}</div>
                    <div style={{ height: 9, background: 'var(--ink2)', borderRadius: 5, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${(counts[k] / 12) * 100}%`, background: k === dom ? 'var(--gold-br)' : 'var(--cream-dim)', borderRadius: 5, transition: 'width .7s ease' }} />
                    </div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--cream-dim)', textAlign: 'right' }}>{counts[k]}</div>
                  </div>
                ))}
              </div>

              <span className="kicker">You lead with</span>
              <h1 style={{ margin: '4px 0 4px' }}>{ROOTS[dom].name}</h1>
              <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: 'var(--cream-dim)', margin: '0 0 24px' }}>{ROOTS[dom].type}</p>
              <p className="lede">{ROOTS[dom].market}</p>
              <p style={{ borderLeft: '2px solid var(--gold-br)', paddingLeft: 16, color: 'var(--cream)' }}>
                {near
                  ? <>Your second pull, <b>{ROOTS[sec].name}</b>, runs nearly even with your first — your root shifts with the moment. Read this one, and notice which takes over under real pressure.</>
                  : <>Your second pull is <b>{ROOTS[sec].name}</b> — {SECOND[sec]}</>}
              </p>

              <p style={{ background: 'var(--ink2)', borderLeft: '3px solid var(--gold-br)', padding: '16px 20px', borderRadius: '0 3px 3px 0', margin: '28px 0' }}>
                Why this is worth knowing: your root is the pattern beneath your patterns. Unnamed, it runs you from the shadows — the same reaction, the same blind spot, every time the pressure rises. Named, you can see it coming, catch it in the moment, and grow it toward its better form instead of being driven by its worst. Not a label to wear — a handle on the thing that has been quietly steering you.
              </p>

              <h3 className="snap-h">Sit with these</h3>
              <ul className="snap-reflect">{ROOTS[dom].reflect.map((r) => <li key={r}>{r}</li>)}</ul>

              <h3 className="snap-h">One move</h3>
              <p style={{ background: 'var(--ink2)', padding: '18px 20px', borderRadius: 3 }}>{ROOTS[dom].move}</p>

              {!showFaith && (
                <div style={{ textAlign: 'center', margin: '48px 0 0', paddingTop: 38, borderTop: '1px solid var(--line)' }}>
                  <p style={{ color: 'var(--cream-dim)', marginBottom: 20 }}>There is a deeper layer to this, in the language of faith.</p>
                  <button className="btn btn-ghost" onClick={revealFaith}>Read it in the language of faith</button>
                </div>
              )}

              {showFaith && (
                <div style={{ marginTop: 46, paddingTop: 40, borderTop: '2px solid var(--gold)' }}>
                  <span className="kicker on-cream" style={{ color: 'var(--gold)' }}>In the language of faith</span>
                  <p style={{ fontFamily: 'var(--serif)', fontSize: 22, margin: '14px 0 18px' }}>{ROOTS[dom].name}, at its root: <b style={{ color: 'var(--gold-br)' }}>{ROOTS[dom].sin}</b></p>
                  <p className="lede">{ROOTS[dom].faith}</p>
                </div>
              )}

              <p className="note" style={{ marginTop: 40 }}>A tool for self-awareness and growth, not for hiring or selection. It shows the order of your pulls, not a clinical measure — a beginning for the conversation, not the last word.</p>
            </>
          )}

        </div>
      </section>
    </main>
  )
}