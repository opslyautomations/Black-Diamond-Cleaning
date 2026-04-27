import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import JsonLd from '@/components/JsonLd'
import { localBusinessSchema } from '@/lib/schema'
import { BASE_URL, SITE_NAME } from '@/lib/metadata'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Black Diamond Cleaning | Professional House Cleaning PA & NY',
    template: '%s | Black Diamond Cleaning',
  },
  description:
    'Premium house cleaning, deep cleaning & maid service across Pennsylvania and New York. 4.9★ on Google. 500+ homes cleaned. Get a free quote today.',
  openGraph: {
    siteName: SITE_NAME,
    locale: 'en_US',
  },
  other: {
    'theme-color': '#0B1220',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable}`}>
      <body className="font-body text-brand-gray bg-white antialiased">
        <JsonLd data={localBusinessSchema} />
        <Navbar />
        <main className="pb-16 lg:pb-0">{children}</main>
        <Footer />
        <StickyMobileCTA />

        {/* GHL Form embed script — loaded once globally */}
        <Script
          src="https://link.msgsndr.com/js/form_embed.js"
          strategy="lazyOnload"
        />

        {/* GHL Chat Widget — appears on every page */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69c6eabd13ad14363745bd60"
          strategy="afterInteractive"
        />

        {/* Google Analytics 4 — paste GA4 Measurement ID when provided
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');`}
        </Script>
        */}

        {/* Google Tag Manager — paste GTM container ID when provided
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`}
        </Script>
        */}

        {/* Facebook Pixel — paste Pixel ID when provided
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','PIXEL_ID');fbq('track','PageView');`}
        </Script>
        */}
      </body>
    </html>
  )
}
