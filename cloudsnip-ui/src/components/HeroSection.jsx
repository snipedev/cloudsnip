import CheckIcon from './CheckIcon'
import StatCard from './StatCard'

const HERO_PROOF_ITEMS = [
  'Designed for teams spending $8k to $250k monthly on cloud',
  'First wave of cleanup opportunities surfaced in 72 hours',
  'Operator-first output: no dashboards you never use',
]

export default function HeroSection() {
  return (
    <section className="hero container" id="top">
      <div className="hero-grid">
        <div>
          <p className="eyebrow">Built for startup CEOs who move fast</p>
          <h1>
            Turn cloud cost
            <span>into runway.</span>
          </h1>
          <p className="hero-copy">
            Most cloud audits give you a generic PDF. CloudSnip gives you a cut-ready backlog your
            team can ship this sprint: exact resource groups to remove, rightsize, or quarantine,
            with safety notes and owner mapping.
          </p>

          <div className="hero-actions">
            <a className="btn btn-ink" href="#signup">
              Get My Cost Teardown
            </a>
            <a className="btn btn-soft" href="#difference">
              See Why It Stands Out
            </a>
          </div>

          <ul className="proof-list" aria-label="Key outcomes">
            {HERO_PROOF_ITEMS.map((item) => (
              <li key={item}>
                <CheckIcon className="check" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="signal-board" aria-label="Cloud spend signal board">
          <p className="signal-title">Signal Board</p>
          <div className="signal-pill-row">
            <span className="signal-pill">AWS</span>
            <span className="signal-pill">GCP</span>
            <span className="signal-pill">Azure</span>
          </div>
          <div className="signal-metrics">
            <StatCard label="Potential monthly savings" value="18-34%" note="after quick wins" />
            <StatCard label="Time to first actions" value="72h" note="from kickoff" />
            <StatCard label="Engineering overhead" value="Low" note="clear owner map" />
          </div>
        </aside>
      </div>
    </section>
  )
}
