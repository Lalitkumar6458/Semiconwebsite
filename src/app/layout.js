import Footer from './Components/Base/Footer'
import Header from './Components/Base/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Scrollbar from 'smooth-scrollbar';
// import { ThemeProvider } from "next-themes"
import ThemeProvider from './Components/Base/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Shemicon - Empowering Transformation Through Web Development and Digital Marketing',
  description: 'Discover Shemicon, a visionary web development company in Mumbai. We specialize in SEO, website design, digital marketing, and mobile app development, delivering measurable business value through cutting-edge technology.',
  metadataBase: new URL('https://shemicon.com'),
  alternates: {
    canonical: 'https://shemicon.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'Rlmqcus8biOrHbhu1U2fSqhpPPLi7NipaMathkj8oBg', // Add your Google Search Console verification code
  },
  keywords: [
    'Shemicon',
    'web development',
    'SEO',
    'website design',
    'digital marketing',
    'mobile app development',
    'Mumbai',
    'Technology Development',
    'Innovation center',
    'client-centric solutions',
    'brand solutions',
    'online success',
    'UI/UX design',
    'HTML website design',
    'e-commerce website',
    'web application',
    'mobile-first development',
    'mobile app design',
    'cross-platform app development',
    'native app development',
    'mobile app testing',
    'app maintenance and support',
    'security audits',
    'software updates',
    'backup solutions',
    'performance optimization',
    'content updates',
    'domain registration',
    'web hosting',
    'SSL certificates',
    'server management',
    'technical support',
    'email solutions',
    'Google Workspace',
    'Zoho Mail',
    'email analytics',
  ].join(', '),
  openGraph: {
    title: 'Shemicon - Empowering Transformation Through Web Development and Digital Marketing',
    description: 'Join Shemicon on a transformative journey. As a visionary web development company in Mumbai, we excel in SEO, website design, digital marketing, and mobile app development. Discover our client-centric solutions that drive online success.',
    url: 'https://shemicon.com/',
    type: 'website',
    images: [
      {
        url: 'https://shemicon.com/Images/clientImg/custom-website-development.webp', // Replace with the actual image URL
        width: 800,
        height: 600,
        alt: 'Shemicon',
      },
    ],
    site_name: 'Shemicon',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shemicon - Empowering Transformation Through Web Development and Digital Marketing',
    description: 'Discover Shemicon, a visionary web development company in Mumbai. We specialize in SEO, website design, digital marketing, and mobile app development, delivering measurable business value through cutting-edge technology.',
    image: 'https://shemicon.com/Images/clientImg/custom-website-development.webp', // Replace with the actual image URL
    site: '@Shemicon', // Replace with the actual Twitter handle
    creator: '@Shemicon',
    creatorId: 'your-twitter-id', // Add your Twitter ID
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shemicon",
    "description": "A visionary web development company in Mumbai specializing in SEO, website design, digital marketing, and mobile app development.",
    "url": "https://shemicon.com",
    "logo": "https://shemicon.com/Images/clientImg/custom-website-development.webp",
    "image": "https://shemicon.com/Images/clientImg/custom-website-development.webp",
    "foundingDate": "YYYY", // Add your founding year
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 8369794933",
      "contactType": "customer service",
      "email": "shemiconinfotech@gmail.com",
      "contactOption": "TollFree"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai Central",
      "addressLocality": "Mumbai",
      "postalCode": "400004",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://facebook.com/shemicon",
      "https://twitter.com/shemicon",
      "https://linkedin.com/company/shemicon",
      "https://instagram.com/shemicon"
      // Add your actual social media URLs
    ]
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer data-deferred="1"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative bg-white dark:bg-blueDark">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className=''>
            <Header/>
          </div>
          <div className=''>
            {children}
          </div>
          <div className=''>
            <Footer/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
