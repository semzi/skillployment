import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBand from '../components/CtaBand'
import useReveal from '../hooks/useReveal'

const tracksData = {
  'ui-ux-design': { idx: '01', name: 'UI/UX Design', desc: 'Research, wireframes, prototyping, design systems', stack: 'FIGMA · USER RESEARCH', duration: '10 WEEKS' },
  'frontend-engineering': { idx: '02', name: 'Frontend Engineering', desc: 'Interactive interfaces with modern JavaScript', stack: 'JS · REACT · GIT', duration: '12 WEEKS' },
  'backend-engineering': { idx: '03', name: 'Backend Engineering', desc: 'Servers, databases, APIs that hold up in production', stack: 'NODE.JS · SQL · APIS', duration: '12 WEEKS' },
  'data-analytics': { idx: '04', name: 'Data Analytics', desc: 'Clean data, sharp dashboards, real decisions', stack: 'EXCEL · SQL · PYTHON', duration: '10 WEEKS' },
  'social-media-marketing': { idx: '05', name: 'Social Media Marketing', desc: 'Content strategy, paid ads, growth analytics', stack: 'META ADS · ANALYTICS', duration: '8 WEEKS' }
}

export default function TrackPage() {
  const { id } = useParams()
  useReveal()

  const track = tracksData[id]

  if (!track) {
    return (
      <>
        <div className="hero-shell" style={{ minHeight: '50vh' }}>
          <Navbar />
          <div className="hero-body">
            <h1 className="hero-title">Track Not Found</h1>
            <Link to="/" className="btn btn-accent">Go Home</Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className="hero-shell" style={{ minHeight: '60vh' }}>
        <Navbar />
        <div className="hero-body">
          <span className="eyebrow" style={{ color: 'rgba(245,241,232,0.6)' }}>Track {track.idx}</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>{track.name}</h1>
          <div className="hero-grid">
            <p className="hero-sub">{track.desc}</p>
          </div>
        </div>
      </div>
      
      <main className="wrap" style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="reveal" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '88px' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 className="section-title">Course Details</h2>
            <p style={{ marginTop: '16px', lineHeight: '1.6', color: 'var(--ink-soft)' }}>
              Master {track.name} through hands-on projects and real-world scenarios. 
              Over {track.duration}, you will build a professional portfolio using industry standard tools: {track.stack}.
            </p>
          </div>
          <div style={{ flex: 1, minWidth: '300px', background: '#fff', padding: '32px', borderRadius: '16px', border: '1px solid var(--line-dark)' }}>
            <div style={{ marginBottom: '16px' }}>
              <span className="eyebrow">Duration</span>
              <div style={{ fontSize: '24px', fontWeight: 'bold', fontFamily: 'Archivo, sans-serif' }}>{track.duration}</div>
            </div>
            <div>
              <span className="eyebrow">Tech Stack</span>
              <div style={{ fontSize: '16px', fontFamily: 'Figtree, sans-serif' }}>{track.stack}</div>
            </div>
          </div>
        </div>
        <CtaBand />
      </main>
      <Footer />
    </>
  )
}
