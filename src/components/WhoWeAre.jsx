import { Link } from 'react-router-dom';

const tracks = [
  { num: '01', glyph: 'DESIGN', title: 'UI/UX Design', desc: 'Research, wireframes, prototypes in Figma.', path: '/track/ui-ux-design' },
  { num: '02', glyph: 'CODE', title: 'Frontend & Backend', desc: 'HTML, React, Node.js, APIs, databases.', path: '/track/frontend-engineering' },
  { num: '03', glyph: 'DATA', title: 'Data Analytics', desc: 'Excel, SQL, Python, dashboards that matter.', path: '/track/data-analytics' },
  { num: '04', glyph: 'GROWTH', title: 'Social Media Marketing', desc: 'Content, ads, analytics that grow brands.', path: '/track/social-media-marketing' },
]

export default function WhoWeAre() {
  return (
    <section>
      <div className="section-head reveal">
        <div>
          <span className="eyebrow" style={{ color: 'var(--ink-soft)' }}>Who we are</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>We turn total beginners into <span className="grey">hireable tech talent</span> — one cohort at a time.</h2>
        </div>
        <a href="#about" className="link-arrow">→ About Skillployment</a>
      </div>

      <div className="track-strip reveal">
        {tracks.map((t) => (
          <Link to={t.path} className="track-card" key={t.num} style={{ textDecoration: 'none' }}>
            <span className="big-num">{t.num}</span>
            <span className="glyph">{t.glyph}</span>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
