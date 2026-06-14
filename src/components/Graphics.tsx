// Custom framework graphics — original interpretations, no stock imagery.

export function PredictableSuccessCurve() {
  // 7 stages; arch peaks at Predictable Success. Ascent = growth (gold),
  // descent = decline (muted). Original interpretation of the Les McKeown model.
  const stages = [
    ['1', 'Early Struggle', 70],
    ['2', 'Fun', 183],
    ['3', 'Whitewater', 296],
    ['4', 'Predictable Success', 410],
    ['5', 'Treadmill', 523],
    ['6', 'The Big Rut', 636],
    ['7', 'Death Rattle', 750],
  ] as const
  return (
    <svg viewBox="0 0 820 430" className="fw-graphic ps-curve" role="img"
      aria-label="The Predictable Success lifecycle: Early Struggle, Fun, Whitewater, Predictable Success, Treadmill, The Big Rut, Death Rattle">
      <defs>
        <linearGradient id="ascFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFB162" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#FFB162" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="descFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8C8472" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#8C8472" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* target zone behind peak */}
      <rect x="368" y="56" width="84" height="284" fill="#FFB162" opacity="0.06" />
      {/* baseline */}
      <line x1="40" y1="340" x2="780" y2="340" stroke="rgba(238,233,223,.18)" strokeWidth="1" />

      {/* fills */}
      <path d="M70,300 C130,260 150,210 183,196 C240,175 265,158 296,150 C350,138 385,100 410,82 L410,340 L70,340 Z" fill="url(#ascFill)" />
      <path d="M410,82 C435,100 470,138 523,150 C555,158 600,205 636,240 C670,272 710,300 750,318 L750,340 L410,340 Z" fill="url(#descFill)" />

      {/* strokes */}
      <path d="M70,300 C130,260 150,210 183,196 C240,175 265,158 296,150 C350,138 385,100 410,82" fill="none" stroke="#FFB162" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M410,82 C435,100 470,138 523,150 C555,158 600,205 636,240 C670,272 710,300 750,318" fill="none" stroke="#8C8472" strokeWidth="2.5" strokeLinecap="round" />

      {/* dashed guide at peak */}
      <line x1="410" y1="92" x2="410" y2="340" stroke="#FFB162" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />

      {/* dots */}
      {stages.map(([num, , x], i) => {
        const ys = [300, 196, 150, 82, 150, 240, 318]
        const isPeak = i === 3
        return (
          <g key={num}>
            {isPeak && <circle cx={x} cy={ys[i]} r="11" fill="none" stroke="#FFB162" strokeWidth="1.5" opacity="0.5" />}
            <circle cx={x} cy={ys[i]} r={isPeak ? 6 : 4} fill={i <= 3 ? '#FFB162' : '#8C8472'} />
          </g>
        )
      })}

      {/* labels */}
      <g fontFamily="'Space Mono', monospace">
        {stages.map(([num, label, x], i) => (
          <g key={num} textAnchor="middle">
            <text x={x} y="372" fontSize="11" fontWeight={i === 3 ? 700 : 400} fill={i === 3 ? '#FFB162' : (i < 3 ? '#C9C1B1' : '#8C8472')}>{label}</text>
          </g>
        ))}
        {/* ascent / descent hints */}
        <text x="200" y="404" fontSize="10" fill="#C9C1B1" letterSpacing="2" textAnchor="middle">⟵ BUILDING</text>
        <text x="620" y="404" fontSize="10" fill="#8C8472" letterSpacing="2" textAnchor="middle">DRIFTING ⟶</text>
      </g>
    </svg>
  )
}

export function FourQuestions() {
  const qs = [
    ['01', 'Who am I?', 'Identity'],
    ['02', 'Why am I here?', 'Purpose'],
    ['03', 'Where am I going?', 'Direction'],
    ['04', 'Who loves me?', 'Belonging'],
  ]
  return (
    <div className="fq-grid" role="img" aria-label="The four questions every leader must answer">
      {qs.map(([n, q, tag]) => (
        <div className="fq" key={n}>
          <span className="fq-bg">{n}</span>
          <div className="fq-body">
            <span className="fq-tag">{tag}</span>
            <span className="fq-q">{q}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
