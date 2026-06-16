import { Link } from '@tanstack/react-router'
import { useState } from 'react'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <nav className="site-nav">
      <div className="wrap nav-in">
        <Link to="/" className="logo" aria-label="Eden Business Concepts home" onClick={close}>
          {/* nav mark; swap to /nav-mark-tree.png to compare the tree treatment */}
          <img src="/nav-mark-circle.png" alt="" aria-hidden="true" />
          <span className="e">Eden</span>
          <span className="r">Business Concepts</span>
        </Link>

        <div className="nav-links">
          <Link to="/scaling">Scaling</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/advising">Advising</Link>
          <Link to="/books">Books</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="btn btn-gold cta">Let's talk</Link>
        </div>

        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
      </div>

      {open && (
        <div className="nav-drawer">
          <Link to="/scaling" onClick={close}>Scaling</Link>
          <Link to="/leadership" onClick={close}>Leadership</Link>
          <Link to="/advising" onClick={close}>Advising</Link>
          <Link to="/books" onClick={close}>Books</Link>
          <Link to="/insights" onClick={close}>Insights</Link>
          <Link to="/about" onClick={close}>About</Link>
          <Link to="/contact" className="btn btn-gold" onClick={close}>Let's talk</Link>
        </div>
      )}
    </nav>
  )
}