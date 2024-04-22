import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computer program hudaldaa Програм хангамж худалдааS',
  description: 'Computer program hudaldaa Програм хангамж худалдаа',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/yXtjRw0/computer-hudaldaa.jpg',
    "twitter:card": "summary_large_image",
    "og:url": "msite.site",
    "og:image": 'https://i.ibb.co/yXtjRw0/computer-hudaldaa.jpg',
    "og:type": "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
