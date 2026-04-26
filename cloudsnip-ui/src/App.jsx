import { useMemo, useState } from 'react'

function CheckIcon(props) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={props.className}
    >
      <path
        fillRule="evenodd"
        d="M16.704 5.29a1 1 0 0 1 .006 1.415l-7.4 7.45a1 1 0 0 1-1.42.004L3.29 9.56a1 1 0 1 1 1.42-1.41l3.47 3.49 6.69-6.74a1 1 0 0 1 1.414-.01Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function Feature({ title, description }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40">
      <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  )
}

export default function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const trimmedEmail = useMemo(() => email.trim(), [email])
  const canSubmit = trimmedEmail.length > 3 && status.state !== 'loading'

  function onSubmit(e) {
    e.preventDefault()

    // Placeholder: replace with your email tool (Resend, Postmark, SES, etc.)
    setStatus({ state: 'loading', message: '' })
    setTimeout(() => {
      setStatus({
        state: 'success',
        message: "You're on the list. I'll reach out with a short audit proposal.",
      })
    }, 600)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 overflow-hidden"
      >
        <div className="mx-auto mt-[-200px] h-[520px] w-[900px] rounded-full bg-gradient-to-tr from-violet-500/25 via-sky-500/20 to-emerald-400/20 blur-3xl dark:from-violet-400/20 dark:via-sky-400/15 dark:to-emerald-300/15" />
      </div>

      <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-slate-50/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 via-sky-500 to-emerald-400" />
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">CloudSnip</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">Cloud cost audits</div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
            <a className="hover:text-slate-900 dark:hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#what-you-get">
              What you get
            </a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href="#signup"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
          >
            Get the proposal
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Audit stale resources. Cut waste. Move fast.
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Stop paying for{' '}
                <span className="bg-gradient-to-r from-violet-600 via-sky-600 to-emerald-600 bg-clip-text text-transparent dark:from-violet-300 dark:via-sky-300 dark:to-emerald-300">
                  stale cloud resources
                </span>
                .
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
                I help startups reduce AWS/GCP/Azure spend by finding and removing stale resources:
                unattached volumes, idle databases, orphaned load balancers, abandoned environments,
                over-provisioned services, and forgotten snapshots.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                {[
                  'Fast, practical audit that prioritizes biggest savings first',
                  'Clear action plan with owners, risk notes, and rollback steps',
                  'No vendor lock-in—just fixes you can ship this week',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#signup"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Send me the proposal
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white dark:border-slate-800 dark:bg-slate-950/40 dark:text-white dark:hover:bg-slate-950"
                >
                  See the process
                </a>
              </div>

              <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
                You’ll get a short 1–2 page proposal with scope, timeline, and pricing. No spam.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm dark:border-slate-800 dark:bg-slate-950/40">
                  Works with AWS / GCP / Azure
                </span>
                <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm dark:border-slate-800 dark:bg-slate-950/40">
                  Read-only to start
                </span>
                <span className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 shadow-sm dark:border-slate-800 dark:bg-slate-950/40">
                  Actionable backlog
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                    Typical stale-resource wins
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Quick wins that add up fast.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                  1–2 weeks
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Feature
                  title="Orphaned infra"
                  description="Unattached volumes, IPs, LBs, snapshots, old AMIs."
                />
                <Feature
                  title="Idle services"
                  description="Non-prod clusters, jobs, caches and pipelines left running."
                />
                <Feature
                  title="Oversized compute"
                  description="Rightsize instances, nodes, DBs based on real utilization."
                />
                <Feature
                  title="Guardrails"
                  description="Budgets, tagging, TTL policies, and alerts to prevent relapse."
                />
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/30">
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  What you get
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                  {[
                    'Savings estimate + prioritized cleanup backlog',
                    'Safe deletion steps + verification checklist',
                    'Ownership mapping + tagging conventions',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckIcon className="mt-0.5 h-5 w-5 text-sky-600 dark:text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                A simple process your team can trust
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
                Minimal disruption, clear risk boundaries, and documentation your engineers will
                actually use.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: '1) Quick discovery',
                desc: 'Read-only access (or screen-share). Inventory spend, tags, and ownership.',
              },
              {
                title: '2) Stale resource audit',
                desc: 'Identify idle/unused resources and validate with usage signals + logs.',
              },
              {
                title: '3) Cleanup plan',
                desc: 'A prioritized backlog with blast-radius notes, rollbacks, and owners.',
              },
            ].map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40"
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="what-you-get" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  Built for CTOs and CEOs
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  You’ll get an executive-friendly summary plus a technical checklist engineers can
                  execute quickly.
                </p>
                <div className="mt-6 grid gap-3">
                  {[
                    'Executive summary: what to cut, what to keep, and why',
                    'Engineering backlog: tasks ordered by savings and risk',
                    'Guardrails to prevent spend creep after the cleanup',
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/30">
                      <CheckIcon className="mt-0.5 h-5 w-5 text-violet-600 dark:text-violet-400" />
                      <div className="text-sm text-slate-700 dark:text-slate-200">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="signup" className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900/30 sm:p-7">
                <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
                  Get a short proposal in your inbox
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Drop your email. I’ll send a concise scope + timeline + pricing. (Email delivery is
                  a placeholder for now—you’ll integrate it later.)
                </p>

                <form className="mt-5 space-y-3" onSubmit={onSubmit}>
                  <label className="block">
                    <span className="sr-only">Email address</span>
                    <input
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none ring-violet-500/30 placeholder:text-slate-400 focus:ring-4 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={!canSubmit}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    {status.state === 'loading' ? 'Submitting…' : 'Send proposal'}
                  </button>

                  {status.state === 'success' ? (
                    <div
                      role="status"
                      className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-900/40 dark:bg-emerald-950/30 dark:text-emerald-200"
                    >
                      {status.message}
                    </div>
                  ) : null}
                </form>

                <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  By submitting, you agree to be contacted about this service. No newsletters.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">FAQ</h2>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {[
              {
                q: 'Do you need access to our cloud account?',
                a: 'Not necessarily. We can start with read-only access or a guided screen-share. If you later want me to implement changes, we can scope that separately.',
              },
              {
                q: 'Will this break production?',
                a: 'The audit focuses on evidence-backed “stale” resources and proposes safe steps with rollback plans. Your team controls what gets deleted or resized.',
              },
              {
                q: 'What clouds do you support?',
                a: 'AWS, GCP, and Azure. The approach is similar across providers: inventory, validate usage, prioritize, and add guardrails.',
              },
              {
                q: 'How fast can we see savings?',
                a: 'Often within days for obvious stale resources. Rightsizing and guardrails typically follow within 1–2 weeks depending on team bandwidth.',
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40"
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.q}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/50 py-10 dark:border-slate-800 dark:bg-slate-950/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600 dark:text-slate-300">
            <span className="font-semibold text-slate-900 dark:text-white">CloudSnip</span> — Cloud cost audits for startups.
          </div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} CloudSnip. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
