import Header from './components/Header'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Next 13 Crash Course',
  description: 'Blah blah blah',
  keywords: 'web dev, web design'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}
