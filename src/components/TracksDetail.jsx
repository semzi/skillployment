const tracks = [
  { idx: '01', name: 'UI/UX Design', desc: 'Research, wireframes, prototyping, design systems', stack: 'FIGMA · USER RESEARCH', duration: '10 WEEKS' },
  { idx: '02', name: 'Frontend Engineering', desc: 'Interactive interfaces with modern JavaScript', stack: 'JS · REACT · GIT', duration: '12 WEEKS' },
  { idx: '03', name: 'Backend Engineering', desc: 'Servers, databases, APIs that hold up in production', stack: 'NODE.JS · SQL · APIS', duration: '12 WEEKS' },
  { idx: '04', name: 'Data Analytics', desc: 'Clean data, sharp dashboards, real decisions', stack: 'EXCEL · SQL · PYTHON', duration: '10 WEEKS' },
  { idx: '05', name: 'Social Media Marketing', desc: 'Content strategy, paid ads, growth analytics', stack: 'META ADS · ANALYTICS', duration: '8 WEEKS' },
]

export default function TracksDetail() {
  return (
    <div className="tracks-shell" id="tracks">
      <div className="wrap" style={{ padding: '88px 32px' }}>
        <div className="section-head reveal">
          <div>
            <span className="eyebrow">Tracks</span>
            <h2 className="section-title" style={{ marginTop: 14 }}>Five tracks. One outcome — <span className="grey" style={{ color: 'rgba(245,241,232,0.45)' }}>a job.</span></h2>
          </div>
          <p style={{ maxWidth: 280, fontSize: 13.5, color: 'rgba(245,241,232,0.6)', lineHeight: 1.6 }}>Every track ends with a shipped portfolio project and a placement push through our employer network.</p>
        </div>

        <div className="track-grid reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
          {tracks.map((t) => (
            <div className="track-card-new" key={t.idx} style={{ background: 'var(--bg-soft)', padding: '32px', borderRadius: '16px', border: '1px solid var(--line)', transition: 'all 0.3s ease', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.borderColor = 'var(--accent)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--line)'; }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'Figtree, sans-serif', color: 'var(--accent)', fontSize: '14px', fontWeight: 'bold' }}>{t.idx}</span>
                <span style={{ fontSize: '12px', color: 'rgba(245,241,232,0.5)', border: '1px solid var(--line)', padding: '4px 10px', borderRadius: '20px' }}>{t.duration}</span>
              </div>
              <h3 style={{ fontSize: '24px', fontFamily: 'Archivo, sans-serif', marginBottom: '12px', letterSpacing: '-0.02em' }}>{t.name}</h3>
              <p style={{ fontSize: '14.5px', color: 'rgba(245,241,232,0.7)', lineHeight: '1.6', marginBottom: '28px' }}>{t.desc}</p>
              <div style={{ fontSize: '11px', fontFamily: 'Figtree, sans-serif', color: 'rgba(245,241,232,0.4)', paddingTop: '16px', borderTop: '1px solid var(--line)' }}>
                {t.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
