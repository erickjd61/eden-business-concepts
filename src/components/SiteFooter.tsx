export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap inner">
        <div>© {new Date().getFullYear()} Eden Business Concepts, LLC · Innovating Workplaces That Thrive</div>
        <div className="foot-links">
          <a href="https://www.linkedin.com/company/eden-business-concepts-llc/">LinkedIn</a>
          <a href="https://www.facebook.com/edenbusinessconcepts">Facebook</a>
          <a href="https://www.youtube.com/channel/UCwNwuGX2m_HnkscE-jpM3Gw">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
