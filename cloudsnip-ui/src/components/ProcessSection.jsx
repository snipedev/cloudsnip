const PROCESS_STEPS = [
  {
    title: 'Day 1-2 - Spend anatomy',
    description: 'Map what exists, what is used, and who owns each major cost center.',
  },
  {
    title: 'Day 3-5 - Waste isolation',
    description: 'Identify stale and oversized resources with confidence grading per item.',
  },
  {
    title: 'Day 6-7 - Cut-ready plan',
    description: 'Deliver sequenced actions by savings, risk, and implementation effort.',
  },
]

export default function ProcessSection() {
  return (
    <section className="band">
      <div className="container process-grid" id="how">
        <div>
          <p className="eyebrow">Execution model</p>
          <h2>A 7-day cost clarity sprint.</h2>
          <p>
            This is built for busy startup teams. You get executive clarity and engineer-level tasks
            without creating process drag.
          </p>
        </div>

        <ol className="step-list">
          {PROCESS_STEPS.map((step) => (
            <li key={step.title}>
              <strong>{step.title}</strong>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
