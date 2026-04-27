const FAQ_ITEMS = [
  {
    question: 'How much can CloudSnip typically cut from cloud spend?',
    answer:
      'Most teams identify immediate opportunities in the 18% to 34% range, depending on workload maturity and ownership hygiene.',
  },
  {
    question: 'How quickly do we get actionable recommendations?',
    answer:
      'You receive the first prioritized actions within 72 hours, then a full 7-day execution-ready teardown plan.',
  },
  {
    question: 'Do we need to buy another dashboard or platform?',
    answer:
      'No. CloudSnip focuses on a practical action backlog with owner mapping, risk notes, and rollback guidance your team can execute directly.',
  },
  {
    question: 'Is this only for AWS, or does it include GCP and Azure too?',
    answer:
      'CloudSnip supports AWS, GCP, and Azure environments, including mixed-cloud startup footprints.',
  },
]

export default function FaqSection() {
  return (
    <section className="container faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-head">
        <p className="eyebrow">Founder questions</p>
        <h2 id="faq-title">Cloud cost audit FAQ for startup teams.</h2>
      </div>

      <div className="faq-grid">
        {FAQ_ITEMS.map((item) => (
          <article className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
