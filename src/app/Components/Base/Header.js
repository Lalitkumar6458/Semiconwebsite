"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import { ThemeSwitcher } from './ThemeSwitcher';
import { usePathname } from 'next/navigation'
import { Drawer } from 'antd';
import { LiaAngleDownSolid, LiaAngleUpSolid } from "react-icons/lia"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState({});
  
  const pathname = usePathname();

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const Menu = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    {
      name: 'Services',
      link: '/services',
      submenu: [
        { name: "Website Development", link: "/services/web-development" },
        { name: "App Development", link: "/services/app-development" },
        { name: "Website Care", link: "/services/website-care" },
        { name: "Domain & Hosting", link: "/services/domain-hosting" },
        { name: "Digital Marketing", link: "/services/digital-marketing" },
        { name: "Email Solution", link: "/services/email-solutions" },
      ]
    },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Contact', link: '/contact' }
  ];

  const toggleSubmenu = (name) => {
    setMobileSubmenu(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isScrolled ? 'bg-blueDark shadow-lg' : 'bg-transparent'}
      ${pathname === '/' ? 'text-[#060922] dark:text-white' : 'text-white'}
    `}>
      <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              className="h-12 w-auto md:h-14" 
              src="/Images/shemiconlogo.png" 
              width={200} 
              height={80} 
              alt="Shemicon" 
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {Menu.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  href={item.link}
                  className="flex items-center space-x-1 font-medium hover:text-orangeClr transition-colors"
                >
                  <span>{item.name}</span>
                  {item.submenu && <LiaAngleDownSolid className="transition group-hover:rotate-180" />}
                </Link>

                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-56 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.link}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-orangeClr transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <BiSearch className="w-5 h-5" />
            </button>
            <ThemeSwitcher isScrolled={isScrolled} />
            <button 
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              onClick={() => setOpen(true)}
            >
              <GiHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <Drawer
        title={
          <div className="flex items-center space-x-2">
            <Image 
              src="/Images/shemiconlogo.png" 
              width={150} 
              height={40} 
              alt="Shemicon"
              className="h-8 w-auto"
            />
          </div>
        }
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={300}
        className="dark:bg-gray-900"
      >
        <nav className="flex flex-col space-y-1">
          {Menu.map((item) => (
            <div key={item.name} className="border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between py-3">
                <Link
                  href={item.link}
                  className="font-medium text-white hover:text-orangeClr transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="p-1 text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                  >
                    {mobileSubmenu[item.name] ? 
                      <LiaAngleUpSolid className="w-5 h-5" /> : 
                      <LiaAngleDownSolid className="w-5 h-5" />
                    }
                  </button>
                )}
              </div>
              {item.submenu && (
                <div className={`
                  overflow-hidden transition-all duration-300
                  ${mobileSubmenu[item.name] ? 'max-h-96' : 'max-h-0'}
                `}>
                  <div className="pl-4 pb-3 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.link}
                        className="block py-2 text-white text-sm hover:text-orangeClr transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </Drawer>
    </header>
  );
};

export default Header;