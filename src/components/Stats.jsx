const stats = [
  { num: '92%', label: 'Job placement rate', stamp: 'verified' },
  { num: '1,200+', label: 'Graduates trained' },
  { num: '40+', label: 'Hiring partners' },
  { num: '12wk', label: 'Avg. track duration' },
]

export default function Stats() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: '32px' }}>
      <span className="eyebrow reveal" style={{ color: 'var(--ink-soft)' }}>By the numbers</span>
      <div className="stats-grid reveal" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '24px', 
        marginTop: 22 
      }}>
        {stats.map((s) => (
          <div className="stat-card" key={s.label} style={{
            background: '#fff',
            padding: '40px 32px',
            borderRadius: '16px',
            border: '1px solid var(--line-dark)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.02)',
            position: 'relative'
          }}>
            {s.stamp && <span className="stamp" style={{
              position: 'absolute', top: '24px', right: '24px', fontSize: '10px',
              fontFamily: 'Figtree, sans-serif', fontWeight: 'bold', textTransform: 'uppercase',
              color: 'var(--accent)', border: '1px solid var(--accent)',
              padding: '4px 8px', borderRadius: '20px', transform: 'rotate(6deg)'
            }}>{s.stamp}</span>}
            <div style={{ color: 'var(--ink)', fontSize: '56px', fontWeight: '900', fontFamily: 'Archivo, sans-serif', lineHeight: 1, marginBottom: '12px', letterSpacing: '-0.02em' }}>
              {s.num}
            </div>
            <div style={{ color: 'var(--ink-soft)', fontSize: '14px', fontWeight: '500' }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
