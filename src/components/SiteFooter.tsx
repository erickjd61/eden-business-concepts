import { Link } from '@tanstack/react-router'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="wrap foot-in">
        <div>© {year} Eden Business Concepts, LLC · Lafayette, IN &amp; Chicago, IL</div>
        <div className="foot-links">
          <Link to="/scaling">Scaling</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/books">Books</Link>
          <Link to="/about">About</Link>
          <a href="https://www.linkedin.com/company/eden-business-concepts-llc/">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
