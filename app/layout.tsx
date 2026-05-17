import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PostgreSQL Query Cost Tracker — Track Expensive Queries by Feature',
  description: 'Monitor PostgreSQL slow query logs, map queries to application features, and see cost impact per user action. Built for backend developers and DevOps engineers.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="a1993ae9-6d28-429b-b7fc-d62c159eb3b2"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
