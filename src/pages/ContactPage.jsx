import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useReveal from '../hooks/useReveal'

export default function ContactPage() {
  useReveal()

  return (
    <>
      <div className="hero-shell" style={{ minHeight: '60vh' }}>
        <Navbar />
        <div className="hero-body">
          <span className="eyebrow" style={{ color: 'rgba(245,241,232,0.6)' }}>Get in touch</span>
          <h1 className="hero-title" style={{ marginTop: 16 }}>Contact Us</h1>
          <div className="hero-grid">
            <p className="hero-sub">Have questions about our tracks, admissions, or hiring our graduates? Send us a message.</p>
          </div>
        </div>
      </div>
      
      <main className="wrap" style={{ paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="reveal" style={{ maxWidth: '600px', margin: '0 auto', background: '#fff', padding: '40px', borderRadius: '16px', border: '1px solid var(--line-dark)' }}>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Figtree, sans-serif' }}>Name</label>
              <input type="text" placeholder="Your name" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line-dark)', fontSize: '15px', fontFamily: 'Figtree, sans-serif', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Figtree, sans-serif' }}>Email</label>
              <input type="email" placeholder="hello@example.com" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line-dark)', fontSize: '15px', fontFamily: 'Figtree, sans-serif', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Figtree, sans-serif' }}>Subject</label>
              <input type="text" placeholder="How can we help?" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line-dark)', fontSize: '15px', fontFamily: 'Figtree, sans-serif', width: '100%' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Figtree, sans-serif' }}>Message</label>
              <textarea placeholder="Tell us more..." rows="5" style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--line-dark)', fontSize: '15px', fontFamily: 'Figtree, sans-serif', resize: 'vertical', width: '100%' }}></textarea>
            </div>
            <button type="submit" className="btn btn-accent" style={{ marginTop: '16px', alignSelf: 'flex-start' }}>Send Message ↗</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  )
}
