import { Link } from '@tanstack/react-router'

export function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="wrap inner">
        <Link to="/" className="logo" aria-label="Eden Business Concepts home">
          <span className="e">Eden</span>
          <span className="rest">Business Concepts</span>
        </Link>
        <div className="nav-links">
          <Link to="/what-drives-us">What drives us</Link>
          <Link to="/services">What we do</Link>
          <Link to="/books">Books</Link>
          <Link to="/team">Our team</Link>
          <Link to="/contact" className="btn btn-green">Let's talk</Link>
        </div>
      </div>
    </nav>
  )
}
