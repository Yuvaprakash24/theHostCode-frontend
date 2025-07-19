'use client'
import React, { useState } from 'react';
import { Button } from '../common';

const menuItems = [
  {
    label: 'About us',
    dropdown: true,
    dropdownContent: [
      { label: 'Syncqubits Story', href: '#' },
      { label: 'Syncqubits Values', href: '#' },
      { label: 'Timeline', href: '#' },
      { label: 'Team Member', href: '#' },
    ],
    image: '/drop-down/about-us-dropdown.png',
    imageDesc: 'Learn more about the Syncqubits',
    exploreText: 'Explore about us'
  },
  { 
    label: 'Services', 
    dropdown: true,
    dropdownContent: [
      { label: 'Web Development', href: '#' },
      { label: 'AI & ML Projects', href: '#' },
      { label: 'Cloud Solutions', href: '#' },
      { label: 'Consulting', href: '#' },
    ],
    image: '/drop-down/about-us-dropdown.png',
    imageDesc: 'Discover our comprehensive services',
    exploreText: 'Explore our services'
  },
  { 
    label: 'Career', 
    dropdown: true,
    dropdownContent: [
      { label: 'Open Positions', href: '#' },
      { label: 'Life at Syncqubits', href: '#' },
      { label: 'Benefits', href: '#' },
      { label: 'Apply Now', href: '#' },
    ],
    image: '/drop-down/about-us-dropdown.png',
    imageDesc: 'Join our amazing team',
    exploreText: 'Explore careers'
  },
  { 
    label: 'Blogs', 
    dropdown: true,
    dropdownContent: [
      { label: 'Latest Posts', href: '#' },
      { label: 'Tech Insights', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Industry News', href: '#' },
    ],
    image: '/drop-down/about-us-dropdown.png',
    imageDesc: 'Read our latest insights and updates',
    exploreText: 'Explore our blogs'
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="w-full bg-main-color relative z-50">
      <div className="max-w-10xl px-4 py-2 items-center flex justify-between">
        {/* Logo */}
        <div className="hidden lg:flex flex-1 justify-start">
          <span className="font-extrabold text-lg tracking-tight font-mono">
            <img src="/logo.png" alt="logo" className="w-26 h-10" />
          </span>
        </div>
        
        {/* Hamburger for mobile */}
        <div className="flex lg:hidden justify-end-safe">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex flex-1 justify-between">
          <ul className="flex space-x-24">
            {menuItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center relative"
              >
                <a
                  href="#"
                  className="text-sm px-2 py-1 hover:text-black whitespace-nowrap flex items-center"
                  onClick={e => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`w-3 h-3 ml-1 mt-0.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Desktop Mega Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div
                    className="fixed left-0 right-0 bg-white shadow-lg flex px-24 py-8 z-50"
                    style={{ minHeight: 300, top: '50px' }}
                  >
                    {/* Left: Links */}
                    <div className="flex-1 flex flex-col justify-center pl-60">
                      <span className="text-xs text-gray-500 mb-4">{item.exploreText}</span>
                      <ul className="space-y-4">
                        {item.dropdownContent?.map((link) => (
                          <li key={link.label}>
                            <a href={link.href} className="text-lg hover:font-bold transition-all">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Right: Image */}
                    <div className="flex-1 flex flex-col -ml-30 justify-center">
                      <img 
                        src={item.image} 
                        alt={item.label} 
                        className="rounded-xl w-80 h-56 object-cover mb-4" 
                      />
                      <span className="text-sm text-gray-600 text-center -ml-35">{item.imageDesc}</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact Us Button */}
        <div className="hidden lg:flex flex-1 justify-end">
          <Button className="text-white rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-semibold shadow-none border-none text-xs sm:text-base">
            contact us
          </Button>
        </div>
      </div>
      
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-2">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="flex flex-col items-start w-full">
                <a
                  href="#"
                  className="text-base px-2 py-2 hover:text-black hover:font-bold transition-all flex items-center font-normal w-full"
                  onClick={e => {
                    if (item.dropdown) {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === item.label ? null : item.label);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`w-3 h-3 ml-1 mt-0.5 transition-transform duration-200 ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Mobile Mega Dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="w-full bg-gray-50 rounded-xl mt-2 flex flex-col md:flex-row px-4 py-6">
                    <div className="flex-1 flex flex-col justify-center pr-0 md:pr-8 mb-4 md:mb-0">
                      <span className="text-xs text-gray-500 mb-4">{item.exploreText}</span>
                      <ul className="space-y-4">
                        {item.dropdownContent?.map((link) => (
                          <li key={link.label}>
                            <a href={link.href} className="text-lg hover:font-bold transition-all">
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.label} 
                        className="rounded-xl w-64 h-40 object-cover mb-4" 
                      />
                      <span className="text-sm text-gray-600 text-center">{item.imageDesc}</span>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
          
          {/* Contact Us Button in Mobile Menu */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center">
            <Button className="w-50 text-white rounded-2xl px-6 py-3 font-semibold shadow-none border-none text-base">
              contact us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;