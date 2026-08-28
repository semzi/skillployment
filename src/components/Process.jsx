const steps = [
  { num: 'STEP 01', title: 'Pick your track', desc: 'Take a short skills assessment and choose the track that fits where you want to work.' },
  { num: 'STEP 02', title: 'Build in public', desc: 'Weekly projects, code reviews, and design critiques from mentors already working in the field.' },
  { num: 'STEP 03', title: 'Get placed', desc: 'Portfolio review, mock interviews, and direct introductions to our hiring partners.' },
]

export default function Process() {
  return (
    <section id="process">
      <div className="section-head reveal">
        <div>
          <span className="eyebrow" style={{ color: 'var(--ink-soft)' }}>How it works</span>
          <h2 className="section-title" style={{ marginTop: 14 }}>From zero experience to your first offer letter.</h2>
        </div>
      </div>
      <div className="process-grid reveal">
        {steps.map((s) => (
          <div className="process-step" key={s.num}>
            <span className="num">{s.num}</span>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
