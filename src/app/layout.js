
import Footer from './Components/Base/Footer'
import Header from './Components/Base/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Scrollbar from 'smooth-scrollbar';
// import { ThemeProvider } from "next-themes"
import ThemeProvider from './Components/Base/theme-provider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Semicon-Website Developement Agency',
  description: 'Semicon Website and software Developement Company',
}

export default function RootLayout({ children }) {
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const scrollbar = Scrollbar.init(document.body);

  //     // Additional customization or event listeners can be added here
  //   }
  // }, []);
  return (

    <html lang="en">
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
