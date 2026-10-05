import './globals.css'

export const metadata = {
  title: 'Rajiv Mishra — Fullstack Engineer',
  description: 'The editorial portfolio of Rajiv Mishra, a fullstack engineer working with Next.js and the MERN stack.',
}

export const viewport = {
  colorScheme: 'light',
  themeColor: '#e9e6df',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
