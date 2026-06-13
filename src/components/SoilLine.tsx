/**
 * The Eden signature device: the page crossing from canopy to roots.
 * Use ONLY where content genuinely moves from surface to depth.
 * Maximum twice per page (see Design Token System §5).
 */
export function SoilLine() {
  return (
    <svg className="soil" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0,58 C120,52 240,64 360,58 C480,52 600,66 720,58 C840,50 960,64 1080,58 C1200,52 1320,64 1440,58 L1440,120 L0,120 Z"
        fill="var(--eden-navy)"
      />
      <g stroke="var(--eden-paper)" strokeOpacity=".22" strokeWidth="2.5" fill="none" strokeLinecap="round">
        <path d="M200,62 C195,80 205,92 192,112" />
        <path d="M200,70 C212,82 220,96 232,104" />
        <path d="M480,60 C485,78 472,90 478,114" />
        <path d="M480,72 C466,84 460,94 450,102" />
        <path d="M740,62 C735,82 748,94 740,116" />
        <path d="M740,74 C754,86 762,98 776,106" />
        <path d="M1020,60 C1026,78 1012,92 1020,112" />
        <path d="M1020,70 C1006,82 998,94 988,104" />
        <path d="M1280,62 C1275,80 1288,94 1278,114" />
      </g>
    </svg>
  )
}

export function RootsAccent() {
  return (
    <svg className="roots-bg" viewBox="0 0 400 160" aria-hidden="true">
      <path
        d="M200,0 C200,50 195,70 200,90 M200,60 C170,90 150,100 120,140 M200,70 C230,100 255,110 285,145 M200,90 C190,120 185,135 180,158 M200,95 C215,125 222,138 230,156"
        stroke="var(--eden-paper)"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}
