'use client'
import React, { useState, useEffect, useRef } from 'react';
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
      { label: 'Latest Posts', href: '/blog/LatestPosts' },
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
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle dropdown state changes with animation timing
  const handleDropdownToggle = (itemLabel: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (openDropdown === itemLabel) {
      // Closing current dropdown
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
        setIsAnimating(false);
      }, 300); // Match CSS animation duration
    } else {
      // Opening new dropdown or switching between dropdowns
      if (openDropdown) {
        // If another dropdown is open, close it first
        setIsAnimating(true);
        timeoutRef.current = setTimeout(() => {
          setOpenDropdown(itemLabel);
          setIsAnimating(false);
        }, 150);
      } else {
        // No dropdown is open, open the new one
        setOpenDropdown(itemLabel);
      }
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('header')) {
        if (openDropdown) {
          setIsAnimating(true);
          timeoutRef.current = setTimeout(() => {
            setOpenDropdown(null);
            setIsAnimating(false);
          }, 300);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openDropdown]);

  return (
    <>
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
                    className="text-sm px-2 py-1 hover:text-black whitespace-nowrap flex items-center transition-colors duration-200"
                    onClick={e => {
                      if (item.dropdown) {
                        e.preventDefault();
                        handleDropdownToggle(item.label);
                      }
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg
                        className={`w-3 h-3 ml-1 mt-0.5 transition-all duration-300 ease-out ${
                          openDropdown === item.label ? 'rotate-180 scale-110' : 'rotate-0 scale-100'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Us Button */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Button className="text-white rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-semibold shadow-none border-none text-xs sm:text-base transition-all duration-200 hover:scale-105">
              contact us
            </Button>
          </div>
        </div>
      </header>

      {/* Desktop Mega Dropdown - Positioned outside header for smooth animation */}
      {menuItems.map((item) => (
        <div
          key={`dropdown-${item.label}`}
          className={`hidden lg:block fixed left-0 right-0 bg-white shadow-2xl transition-all duration-300 ease-out transform z-40 ${
            openDropdown === item.label && !isAnimating
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}
          style={{
            top: '50px',
            minHeight: 300,
          }}
        >
          <div className="flex px-24 py-8 h-full">
            {/* Left: Links */}
            <div className="flex-1 flex flex-col justify-center pl-60">
              <span 
                className={`text-xs text-gray-500 mb-4 transition-all duration-500 delay-100 ${
                  openDropdown === item.label && !isAnimating
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2'
                }`}
              >
                {item.exploreText}
              </span>
              <ul className="space-y-4">
                {item.dropdownContent?.map((link, index) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className={`text-lg hover:font-bold transition-all duration-300 hover:text-black hover:translate-x-1 block transform ${
                        openDropdown === item.label && !isAnimating
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-3'
                      }`}
                      style={{
                        transitionDelay: openDropdown === item.label ? `${200 + index * 50}ms` : '0ms'
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right: Image */}
            <div className="flex-1 flex flex-col -ml-30 justify-center">
              <div 
                className={`transition-all duration-500 delay-200 transform ${
                  openDropdown === item.label && !isAnimating
                    ? 'opacity-100 translate-x-0 scale-100'
                    : 'opacity-0 translate-x-4 scale-95'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.label} 
                  className="rounded-xl w-80 h-56 object-cover mb-4 shadow-lg transition-transform duration-300 hover:scale-105" 
                />
                <div className="flex flex-col items-center justify-center -ml-35">
                  <span className="text-sm text-gray-600 text-center">{item.imageDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile menu dropdown */}
      <div 
        className={`lg:hidden w-full bg-white shadow-md transition-all duration-300 ease-out transform origin-top ${
          mobileMenuOpen 
            ? 'opacity-100 scale-y-100 max-h-screen' 
            : 'opacity-0 scale-y-0 max-h-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-2">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item, itemIndex) => (
              <li key={item.label} className="flex flex-col items-start w-full">
                <a
                  href="#"
                  className={`text-base px-2 py-2 hover:text-black hover:font-bold transition-all duration-300 flex items-center font-normal w-full transform ${
                    mobileMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${itemIndex * 50}ms` : '0ms'
                  }}
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
                      className={`w-3 h-3 ml-1 mt-0.5 transition-all duration-300 ${
                        openDropdown === item.label ? 'rotate-180' : 'rotate-0'
                      }`}
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
                <div 
                  className={`w-full bg-gray-50 rounded-xl mt-2 flex flex-col px-2 py-4 transition-all duration-300 ease-out transform origin-top ${
                    item.dropdown && openDropdown === item.label
                      ? 'opacity-100 scale-y-100 max-h-screen'
                      : 'opacity-0 scale-y-0 max-h-0 py-0'
                  } overflow-hidden`}
                >
                  <div className="flex-1 flex flex-col justify-center pr-0 mb-4">
                    <span className="text-xs text-gray-500 mb-4">{item.exploreText}</span>
                    <ul className="space-y-4">
                      {item.dropdownContent?.map((link, linkIndex) => (
                        <li key={link.label}>
                          <a 
                            href={link.href} 
                            className={`text-lg hover:font-bold transition-all duration-300 block transform ${
                              openDropdown === item.label
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-2'
                            }`}
                            style={{
                              transitionDelay: openDropdown === item.label ? `${100 + linkIndex * 50}ms` : '0ms'
                            }}
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Removed image and description for mobile dropdown */}
                </div>
              </li>
            ))}
          </ul>
          
          {/* Contact Us Button in Mobile Menu */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center">
            <Button 
              className={`w-full bg-main-color text-white rounded-2xl px-6 py-3 font-semibold shadow-none border-none text-base transition-all duration-500 transform ${
                mobileMenuOpen 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-4 scale-95'
              }`}
            >
              contact us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;