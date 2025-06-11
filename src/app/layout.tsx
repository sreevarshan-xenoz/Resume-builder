import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ResumeProvider } from '@/context/ResumeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Futuristic Resume Builder',
  description: 'Create professional, interactive resumes with our futuristic resume builder',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <ResumeProvider>
          {children}
        </ResumeProvider>
      </body>
    </html>
  )
} 