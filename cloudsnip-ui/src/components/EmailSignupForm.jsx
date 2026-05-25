import { useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'

emailjs.init("JWMie4oJCPfwuZieL");

const EMAILJS_SERVICE_ID = 'service_1ntiey9'
const EMAILJS_TEMPLATE_ID = 'template_ul7vihs'

export default function EmailSignupForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  const trimmedEmail = useMemo(() => email.trim(), [email])
  const canSubmit = trimmedEmail.length > 3 && status.state !== 'loading'

  async function onSubmit(e) {
    e.preventDefault()

    setStatus({ state: 'loading', message: '' })

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: trimmedEmail
        },
      )

      setStatus({
        state: 'success',
        message: "You're on the list. I'll reach out with a short audit proposal.",
      })

      setEmail('')
    } catch {
      setStatus({
        state: 'error',
        message: 'Something went wrong while sending. Please try again in a moment.',
      })
    }
  }

  return (
    <form className="signup-form" onSubmit={onSubmit}>
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <input
        id="email"
        name="user_email"
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

      {status.state === 'error' ? (
        <div role="alert" className="success-banner error-banner">
          {status.message}
        </div>
      ) : null}
    </form>
  )
}
