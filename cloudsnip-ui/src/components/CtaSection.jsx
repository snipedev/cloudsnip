import EmailSignupForm from './EmailSignupForm'

export default function CtaSection() {
  return (
    <section className="container cta-wrap" id="signup">
      <div className="cta-panel">
        <div>
          <p className="eyebrow">Next step</p>
          <h2>Get a custom teardown brief for your cloud bill.</h2>
          <p>
            Share your work email and I will send a concise scope, timeline, and pricing outline
            tailored to your current cloud footprint.
          </p>
        </div>

        <EmailSignupForm />
      </div>
    </section>
  )
}
