export default function SiteHeader() {
  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <a className="brand" href="#top">
          <span className="brand-mark" />
          <span>
            <strong>CloudSnip</strong>
            <small>Cloud cost rescue</small>
          </span>
        </a>

        <nav className="top-nav" aria-label="Primary">
          <a href="#proof">Proof</a>
          <a href="#difference">Why different</a>
          <a href="#how">Process</a>
          <a href="#signup">Get proposal</a>
        </nav>

        <a href="#signup" className="btn btn-ink">
          Book Cost Teardown
        </a>
      </div>
    </header>
  )
}
