import './App.css'
import CtaSection from './components/CtaSection'
import FaqSection from './components/FaqSection'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import ProofSection from './components/ProofSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

export default function App() {
  return (
    <div className="page-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <div className="aurora" aria-hidden="true" />
      <div className="mesh" aria-hidden="true" />

      <SiteHeader />

      <main id="main-content">
        <HeroSection />
        <ProofSection />
        <ProcessSection />
        <FaqSection />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}
