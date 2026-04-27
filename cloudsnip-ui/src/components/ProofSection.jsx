import CheckIcon from './CheckIcon'
import FeatureCard from './FeatureCard'

const PROOF_CARDS = [
  {
    title: 'Dead weight infrastructure',
    description:
      'Orphaned volumes, idle IPs, forgotten snapshots, abandoned load balancers, stale artifacts.',
  },
  {
    title: 'Zombie runtime spend',
    description:
      'Non-prod clusters and background jobs running 24/7 with little or zero business value.',
  },
  {
    title: 'Oversized critical paths',
    description:
      'Compute and databases provisioned for historic peaks, not present demand curves.',
  },
]

const DIFFERENTIATORS = [
  'Decision-ready recommendations, not 400 charts.',
  'Each action includes expected savings and rollback guidance.',
  'Execution framing your engineers can finish in one sprint.',
]

export default function ProofSection() {
  return (
    <section className="container bento-grid" id="proof">
      {PROOF_CARDS.map((card) => (
        <FeatureCard key={card.title} title={card.title} description={card.description} />
      ))}

      <article className="feature-card feature-card-strong" id="difference">
        <h3>Why founders pick CloudSnip over "cost tooling"</h3>
        <ul>
          {DIFFERENTIATORS.map((item) => (
            <li key={item}>
              <CheckIcon className="check" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
