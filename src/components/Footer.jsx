import { Link } from 'react-router-dom';

const trackLinks = [
  { name: 'UI/UX Design', path: '/track/ui-ux-design' },
  { name: 'Frontend Engineering', path: '/track/frontend-engineering' },
  { name: 'Backend Engineering', path: '/track/backend-engineering' },
  { name: 'Data Analytics', path: '/track/data-analytics' },
  { name: 'Social Media Marketing', path: '/track/social-media-marketing' },
]

const programLinks = [
  { name: 'How it works', path: '/#process' },
  { name: 'Placements', path: '/#work' },
  { name: 'Community', path: '/#community' },
  { name: 'Apply', path: '/#apply' },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <Link to="/" className="logo"><img src="/logo-color.png" alt="Skillployment" style={{ height: '64px' }} /></Link>
          <div className="footer-cols">
            <div>
              <h5>Tracks</h5>
              {trackLinks.map((l) => <Link to={l.path} key={l.name}>{l.name}</Link>)}
            </div>
            <div>
              <h5>Program</h5>
              {programLinks.map((l) => <Link to={l.path} key={l.name}>{l.name}</Link>)}
            </div>
            <div>
              <h5>Contact</h5>
              <a href="mailto:hello@skillployment.com">hello@skillployment.com</a>
              <Link to="/contact">Send us a message</Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 SKILLPLOYMENT — SKILL ACQUISITION FOR THE JOB MARKET</span>
          <span>DESIGN & BUILD BY MAXI COMMERCE</span>
        </div>
      </div>
    </footer>
  )
}
