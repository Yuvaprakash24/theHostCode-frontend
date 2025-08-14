// TypeScript fixes for your Header component
'use client'
import React, { useState, useEffect, useRef, JSX } from 'react';
import { Button } from '../common';
import Link from 'next/link';

// Define proper TypeScript interfaces
interface DropdownLink {
  label: string;
  href: string;
}

interface MenuItem {
  label: string;
  dropdown: boolean;
  layout?: 'horizontal' | 'grid' | 'vertical';
  dropdownContent?: DropdownLink[];
  image?: string;
  imageDesc?: string;
  exploreText?: string;
}

const menuItems: MenuItem[] = [
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
    layout: 'grid', 
    dropdownContent: [
      { label: 'Our Services', href: '/services' },
      { label: 'Artificial Intelligence', href: '#' },
      { label: 'Data Science', href: '#' },
      { label: 'Cloud Computing', href: '#' },
      { label: 'Web Development', href: '#' },
      { label: 'UI/UX designing', href: '#' },
      { label: 'Digital marketing', href: '#' },
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
    layout: 'grid',
    dropdownContent: [
      { label: 'Latest Posts', href: '/blog' },
      { label: 'AI in Daily Life', href: '#' },
      { label: 'Business Growth Strategies', href: '#' },
      { label: 'Web Development Tips', href: '#' },
      { label: 'Digital Marketing Hacks', href: '#' },
      { label: 'UI/UX Best Practices', href: '#' },
      { label: 'Cloud Tech Explained', href: '#' },
      { label: 'Optimizing Website Performance', href: '#' },
      { label: 'Mobile-First Design', href: '#' },
      { label: 'API Development', href: '#' },
      { label: 'Cybersecurity Best Practices', href: '#' },
    ],
    image: '/drop-down/about-us-dropdown.png',
    imageDesc: 'Read our latest insights and updates',
    exploreText: 'Explore our blogs'
  },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle dropdown state changes with animation timing
  const handleDropdownToggle = (itemLabel: string): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (openDropdown === itemLabel) {
      setIsAnimating(true);
      timeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
        setIsAnimating(false);
      }, 300);
    } else {
      if (openDropdown) {
        setIsAnimating(true);
        timeoutRef.current = setTimeout(() => {
          setOpenDropdown(itemLabel);
          setIsAnimating(false);
        }, 150);
      } else {
        setOpenDropdown(itemLabel);
      }
    }
  };

  // Handle hover events for desktop
  const handleMouseEnter = (itemLabel: string): void => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      hoverTimeoutRef.current = setTimeout(() => {
        if (openDropdown !== itemLabel) {
          setOpenDropdown(itemLabel);
        }
      }, 150);
    }
  };

  const handleMouseLeave = (): void => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      
      hoverTimeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
        timeoutRef.current = setTimeout(() => {
          setOpenDropdown(null);
          setIsAnimating(false);
        }, 300);
      }, 300);
    }
  };

  const handleDropdownMouseEnter = (): void => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsAnimating(false);
  };

  const handleDropdownMouseLeave = (): void => {
    setIsAnimating(true);
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setIsAnimating(false);
    }, 300);
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element;
      if (!target.closest('header') && !target.closest('.dropdown-container')) {
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

  // Function to render dropdown content based on layout
  const renderDropdownContent = (item: MenuItem): JSX.Element => {
    const currentItem = menuItems.find(menuItem => menuItem.label === item.label);
    
    if (currentItem?.layout === 'horizontal') {
      return (
        <div className="flex flex-wrap gap-8 justify-start max-w-4xl">
          {item.dropdownContent?.map((link, index) => (
            <Link 
              key={`${item.label}-${index}`}
              href={link.href} 
              className={`text-lg hover:font-bold transition-all duration-300 hover:text-black hover:translate-x-1 transform whitespace-nowrap ${
                openDropdown === item.label && !isAnimating
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
              style={{
                transitionDelay: openDropdown === item.label ? `${200 + index * 50}ms` : '0ms'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      );
    } else if (currentItem?.layout === 'grid') {
      return (
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          {item.dropdownContent?.map((link, index) => (
            <Link 
              key={`${item.label}-${index}`}
              href={link.href} 
              className={`text-lg hover:font-bold transition-all duration-300 hover:text-black hover:translate-x-1 block transform whitespace-nowrap ${
                openDropdown === item.label && !isAnimating
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-3'
              }`}
              style={{
                transitionDelay: openDropdown === item.label ? `${200 + index * 50}ms` : '0ms'
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      );
    } else {
      // For vertical layout - create columns when more than 7 items
      const itemsPerColumn = 7;
      const totalItems = item.dropdownContent?.length || 0;
      const numberOfColumns = Math.ceil(totalItems / itemsPerColumn);
      
      if (totalItems > itemsPerColumn) {
        // Multi-column layout
        const columns: DropdownLink[][] = [];
        for (let i = 0; i < numberOfColumns; i++) {
          const startIndex = i * itemsPerColumn;
          const endIndex = Math.min(startIndex + itemsPerColumn, totalItems);
          columns.push(item.dropdownContent?.slice(startIndex, endIndex) || []);
        }
        
        return (
          <div className="flex gap-16">
            {columns.map((column, columnIndex) => (
              <ul key={`column-${columnIndex}`} className="space-y-4">
                {column.map((link, index) => {
                  const globalIndex = columnIndex * itemsPerColumn + index;
                  return (
                    <li key={`${item.label}-${globalIndex}`}>
                      <Link 
                        href={link.href} 
                        className={`text-lg hover:font-bold transition-all duration-300 hover:text-black hover:translate-x-1 block transform ${
                          openDropdown === item.label && !isAnimating
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                        style={{
                          transitionDelay: openDropdown === item.label ? `${200 + globalIndex * 50}ms` : '0ms'
                        }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        );
      } else {
        // Single column layout
        return (
          <ul className="space-y-4">
            {item.dropdownContent?.map((link, index) => (
              <li key={`${item.label}-${index}`}>
                <Link 
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
                </Link>
              </li>
            ))}
          </ul>
        );
      }
    }
  };

  return (
    <>
      <header className="w-full bg-main-color relative z-50">
        <div className="max-w-10xl px-4 py-2 items-center flex justify-between">
          {/* Logo */}
          <div className="flex flex-1 justify-start">
            <span className="font-extrabold text-lg tracking-tight font-mono">
              <img src="/logo.png" alt="logo" className="w-26 h-10" />
            </span>
          </div>
          
          {/* Hamburger for mobile */}
          <div className="flex lg:hidden justify-end">
            <button
              className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 justify-between" onMouseLeave={handleMouseLeave}>
            <ul className="flex space-x-24">
              {menuItems.map((item, index) => (
                <li
                  key={`menu-${index}`}
                  className="flex items-center relative"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                >
                  <button
                    className="text-sm px-2 py-1 hover:text-black whitespace-nowrap flex items-center transition-colors duration-200 bg-transparent border-none"
                    onClick={(e) => {
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
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Contact Us Button */}
          <div className="hidden lg:flex flex-1 justify-end">
            <Link href="/contact">
              <Button className="text-white rounded-2xl px-2 py-1 sm:px-4 sm:py-2 font-semibold shadow-none border-none text-xs sm:text-base my-font">
                contact us
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Desktop Mega Dropdown */}
      {menuItems.map((item, index) => (
        <div
          key={`dropdown-${index}`}
          className={`dropdown-container hidden lg:block fixed left-0 right-0 bg-white shadow-2xl transition-all duration-300 ease-out transform z-40 ${
            openDropdown === item.label && !isAnimating
              ? 'opacity-100 translate-y-0 visible'
              : 'opacity-0 -translate-y-4 invisible'
          }`}
          style={{
            top: '50px',
            minHeight: item.layout === 'horizontal' ? 200 : 300,
          }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="flex px-24 py-8 h-full">
            {/* Left: Links */}
            <div className={`flex-1 flex flex-col justify-center ${
              item.layout === 'horizontal' ? 'pl-32' : 'pl-60'
            }`}>
              <span 
                className={`text-xs text-gray-500 mb-4 transition-all duration-500 delay-100 ${
                  openDropdown === item.label && !isAnimating
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-2'
                }`}
              >
                {item.exploreText}
              </span>
              {renderDropdownContent(item)}
            </div>
            
            {/* Right: Image - Always on the right */}
            {item.image && (
              <div className="flex-1 flex flex-col justify-center items-center ml-8">
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
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-sm text-gray-600 text-center">{item.imageDesc}</span>
                  </div>
                </div>
              </div>
            )}
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
              <li key={`mobile-${itemIndex}`} className="flex flex-col items-start w-full">
                <button
                  className={`text-base px-2 py-2 hover:text-black hover:font-bold transition-all duration-300 flex items-center font-normal w-full transform bg-transparent border-none text-left ${
                    mobileMenuOpen 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-4'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${itemIndex * 50}ms` : '0ms'
                  }}
                  onClick={() => {
                    if (item.dropdown) {
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
                </button>
                
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
                    {item.layout === 'horizontal' ? (
                      <div className="grid grid-cols-2 gap-2">
                        {item.dropdownContent?.map((link, linkIndex) => (
                          <Link 
                            key={`mobile-${item.label}-${linkIndex}`}
                            href={link.href} 
                            className={`text-base hover:font-bold transition-all duration-300 block transform ${
                              openDropdown === item.label
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-2'
                            }`}
                            style={{
                              transitionDelay: openDropdown === item.label ? `${100 + linkIndex * 50}ms` : '0ms'
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <ul className="space-y-4">
                        {item.dropdownContent?.map((link, linkIndex) => (
                          <li key={`mobile-list-${item.label}-${linkIndex}`}>
                            <Link 
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
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
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