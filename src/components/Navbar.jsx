import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="nav">
      <Link to="/" className="logo"><img src="/logo-white.png" alt="Skillployment" style={{ height: '64px' }} /></Link>
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </button>
      <nav className={`links ${isOpen ? 'open' : ''}`}>
        <Link to="/">Home</Link>
        <div className="nav-dropdown">
          <span className="nav-link">Tracks ▾</span>
          <div className="dropdown-menu">
            <Link to="/track/ui-ux-design">UI/UX Design</Link>
            <Link to="/track/frontend-engineering">Frontend Engineering</Link>
            <Link to="/track/backend-engineering">Backend Engineering</Link>
            <Link to="/track/data-analytics">Data Analytics</Link>
            <Link to="/track/social-media-marketing">Social Media Marketing</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
        <Link to="/#apply">Apply</Link>
      </nav>
      <Link to="/#apply" className="btn btn-light book-btn">Book A Seat ↗</Link>
    </header>
  )
}
