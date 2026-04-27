import { useMemo, useState } from 'react'

export default function EmailSignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const trimmedEmail = useMemo(() => email.trim(), [email])
  const canSubmit = trimmedEmail.length > 3 && status.state !== 'loading'

  function onSubmit(e) {
    e.preventDefault()
    setStatus({ state: 'loading', message: '' })

    setTimeout(() => {
      setStatus({
        state: 'success',
        message: "You're on the list. I'll reach out with a short audit proposal.",
      })
    }, 600)
  }

  return (
    <form className="signup-form" onSubmit={onSubmit}>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        type="email"
        required
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@company.com"
      />

      <button type="submit" disabled={!canSubmit}>
        {status.state === 'loading' ? 'Submitting...' : 'Send My Brief'}
      </button>

      {status.state === 'success' ? (
        <div role="status" className="success-banner">
          {status.message}
        </div>
      ) : null}
    </form>
  )
}
