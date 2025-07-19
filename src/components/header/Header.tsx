'use client'
import React, { useState } from 'react';
import { Button } from '../common';
const menuItems = [
  { label: 'About us', dropdown: false },
  { label: 'Services', dropdown: false },
  { label: 'Career', dropdown: false },
  { label: 'Blogs', dropdown: false },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="w-full bg-gray-100 shadow-sm sticky top-0 z-50">
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
        {/* Menu */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className="flex items-center">
                <a
                  href="#"
                  className={`text-sm px-2 py-1 hover:text-black hover:font-bold transition-all flex items-center font-normal`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 ml-1 mt-0.5"
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
          <Button className="bg-gradient-to-r from-black to-gray-600 text-white rounded-2xl px-4 py-2 sm:px-8 sm:py-3 font-semibold shadow-none border-none text-xs sm:text-base">
            contact us
          </Button>
        </div>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 py-2">
          <ul className="flex flex-col space-y-2">
            {menuItems.map((item) => (
              <li key={item.label} className="flex items-center">
                <a
                  href="#"
                  className="text-base px-2 py-2 hover:text-black hover:font-bold transition-all flex items-center font-normal"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className="w-3 h-3 ml-1 mt-0.5"
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
          {/* Contact Us Button in Mobile Menu */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center">
            <Button className="w-50 bg-gradient-to-r from-black to-gray-600 text-white rounded-2xl px-6 py-3 font-semibold shadow-none border-none text-base">
              contact us
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 