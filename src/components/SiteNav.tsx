import { Link } from '@tanstack/react-router'

export function SiteNav() {
  return (
    <nav className="site-nav">
      <div className="wrap nav-in">
        <Link to="/" className="logo" aria-label="Eden Business Concepts home">
          <span className="e">Eden</span>
          <span className="r">Business Concepts</span>
        </Link>
        <div className="nav-links">
          <Link to="/scaling">Scaling</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/advising">Advising</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="btn btn-gold cta">Let's talk</Link>
        </div>
      </div>
    </nav>
  )
}
