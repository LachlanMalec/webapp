import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lachlan Malec',
  description: 'Lachlan Malec is a software engineer based in Brisbane, Australia.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">{children}</main>
      </body>
    </html>
  )
}
