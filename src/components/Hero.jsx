import Navbar from './Navbar'

export default function Hero({ children }) {
  return (
    <div className="hero-shell">
      {/* Demo placeholder video — swap the src below for the final brand footage */}
      <video className="hero-video" autoPlay muted loop playsInline poster="">
        <source src="/skillployment.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      {children}

      <div className="hero-body">
        <span className="eyebrow" style={{ color: 'rgba(245,241,232,0.6)' }}>Skill Acquisition Program</span>
        <h1 className="hero-title" style={{ marginTop: 16 }}>Skills That<br />Get You <span>Hired.</span></h1>

        <div className="hero-grid">
          <p className="hero-sub">Web Development, UI/UX Design, Data Analytics and Social Media Marketing — taught by working practitioners, structured around real jobs, not just certificates.</p>
          <div className="hero-cta-row">
            <a href="#tracks" className="btn btn-accent">View Tracks ↗</a>
            <a href="#apply" className="btn btn-light">Apply Now ↗</a>
          </div>
        </div>


      </div>
    </div>
  )
}
