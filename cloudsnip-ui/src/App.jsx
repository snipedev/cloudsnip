import './App.css'
import CtaSection from './components/CtaSection'
import HeroSection from './components/HeroSection'
import ProcessSection from './components/ProcessSection'
import ProofSection from './components/ProofSection'
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

export default function App() {
  return (
    <div className="page-shell">
      <div className="aurora" aria-hidden="true" />
      <div className="mesh" aria-hidden="true" />

      <SiteHeader />

      <main>
        <HeroSection />
        <ProofSection />
        <ProcessSection />
        <CtaSection />
      </main>

      <SiteFooter />
    </div>
  )
}
