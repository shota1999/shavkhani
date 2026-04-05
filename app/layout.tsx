import type { Metadata, Viewport } from 'next'
import { Cinzel, Geist, Geist_Mono, Rubik_Moonrocks } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { LanguageProvider } from '@/lib/language-context'
import { Navbar } from '@/components/navbar'
import { CartDrawer } from '@/components/cart-drawer'
import { Footer } from '@/components/footer'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const cinzel = Cinzel({ subsets: ['latin'], weight: ['700'], variable: '--font-cinzel' })
const rubikMoonrocks = Rubik_Moonrocks({ subsets: ['latin'], weight: ['400'], variable: '--font-rubik-moonrocks' })

export const metadata: Metadata = {
  title: 'SHAVKHANI',
  description:
    'ხელნაკეთი დანები, ტყავის საფულეები და ქარქაშები. თითოეული ნივთი იქმნება ტრადიციული ტექნიკითა და ხარისხიანი მასალებით.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ka">
      <body className={`${geist.variable} ${geistMono.variable} ${cinzel.variable} ${rubikMoonrocks.variable} font-sans antialiased`}>
        <LanguageProvider>
          <CartProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
