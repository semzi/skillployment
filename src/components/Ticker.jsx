const items = [
  { label: 'HTML / CSS / JS', hot: true },
  { label: 'REACT' },
  { label: 'NODE.JS' },
  { label: 'UI / UX DESIGN', hot: true },
  { label: 'FIGMA' },
  { label: 'PYTHON' },
  { label: 'SQL / EXCEL', hot: true },
  { label: 'POWER BI' },
  { label: 'SOCIAL MEDIA MARKETING', hot: true },
  { label: 'META ADS' },
  { label: 'API DESIGN' },
  { label: 'POSTGRESQL', hot: true },
]

export default function Ticker() {
  const row = [...items, ...items]
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {row.map((item, i) => (
          <span key={i} className={item.hot ? 'hot' : undefined}>{item.label}</span>
        ))}
      </div>
    </div>
  )
}
