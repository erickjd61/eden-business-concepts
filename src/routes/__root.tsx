/// <reference types="vite/client" />
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import appCss from '../styles.css?url'
import { SiteNav } from '../components/SiteNav'
import { SiteFooter } from '../components/SiteFooter'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Eden Business Concepts · A heart-focused approach to scaling and leadership' },
      {
        name: 'description',
        content:
          'Eden Business Concepts brings a heart-focused approach to the two hardest problems in business: scaling the company you have built and growing the leadership strength to carry it. Comprehensive business scaling, leadership formation, and conflict transformation since 1991.',
      },
      { property: 'og:title', content: 'Eden Business Concepts' },
      {
        property: 'og:description',
        content:
          'A heart-focused approach to scaling the company you have built and growing the leadership strength to carry it.',
      },
      { property: 'og:image', content: '/og-image.png' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: '/og-image.png' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Newsreader:ital,opsz,wght@0,6..72,300..600;1,6..72,300..500&family=Space+Mono:wght@400;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icon-32.png' },
      { rel: 'apple-touch-icon', href: '/icon-180.png' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
        <Scripts />
      </body>
    </html>
  )
}
