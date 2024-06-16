
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
    url: 'https://shemicon.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://shemicon.vercel.app/Images/clientImg/custom-website-development.webp', // Replace with the actual image URL
        width: 800,
        height: 600,
        alt: 'Shemicon',
      },
    ],
    site_name: 'Shemicon',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shemicon - Empowering Transformation Through Web Development and Digital Marketing',
    description: 'Discover Shemicon, a visionary web development company in Mumbai. We specialize in SEO, website design, digital marketing, and mobile app development, delivering measurable business value through cutting-edge technology.',
    image: 'https://shemicon.vercel.app/Images/clientImg/custom-website-development.webp', // Replace with the actual image URL
    site: '@Shemicon', // Replace with the actual Twitter handle
  },
  canonical: 'https://shemicon.vercel.app',
};

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const scrollbar = Scrollbar.init(document.body);

  //     // Additional customization or event listeners can be added here
  //   }
  // }, []);
  return (

    <html lang="en">
    <head>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" defer data-deferred="1"></script>
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
