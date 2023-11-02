import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'
import './globals.css'
import Navbar from './_components/navbar/navbar'
import { ThemeProvider } from '@/components/theme-provider'


export const metadata: Metadata = {
  title: 'Make it in Australia',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
