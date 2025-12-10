import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Invertox - Tu Socio en Trading & Inversiones LATAM',
  description: 'Tecnología Libro A, educación profesional, cuentas fondeadas y comunidad de traders en Latinoamérica. Spreads competitivos y ejecución real.',
  keywords: 'trading, forex, cuentas fondeadas, educación financiera, invertox, LATAM, fintech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}

