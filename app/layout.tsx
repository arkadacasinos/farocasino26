import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Manrope } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Faro Casino — официальный сайт и рабочее зеркало для игры онлайн',
  description:
    'Faro Casino — официальный сайт казино с рабочим зеркалом. Играйте онлайн в слоты и настольные игры, получайте бонусы и выводите выигрыши быстро и безопасно.',
  alternates: {
    canonical: 'https://farocasino26.vercel.app/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://farocasino26.vercel.app/',
    siteName: 'Faro Casino',
    title: 'Faro Casino — официальный сайт и рабочее зеркало для игры онлайн',
    description:
      'Faro Casino — официальный сайт казино с рабочим зеркалом. Играйте онлайн в слоты и настольные игры, получайте бонусы и выводите выигрыши быстро и безопасно.',
    images: [
      {
        url: 'https://farocasino26.vercel.app/images/faro-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Faro Casino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faro Casino — официальный сайт и рабочее зеркало для игры онлайн',
    description:
      'Faro Casino — официальный сайт казино с рабочим зеркалом. Играйте онлайн в слоты и настольные игры, получайте бонусы и выводите выигрыши быстро и безопасно.',
    images: ['https://farocasino26.vercel.app/images/faro-hero.jpg'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0e3b2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${manrope.variable}`}>
      <head>
        <meta name="yandex-verification" content="c283f9c0532d5fef" />
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
        <link rel="canonical" href="https://farocasino26.vercel.app/" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0e3b2e" />
      </head>
      <body>{children}</body>
    </html>
  )
}
