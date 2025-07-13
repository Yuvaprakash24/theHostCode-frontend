import React from 'react';
import { Button } from '../common';
const menuItems = [
  { label: 'About us' },
  { label: 'Services' },
  { label: 'Career' },
  { label: 'Blogs' },
];

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center min-w-[140px]">
          <span className="font-extrabold text-lg tracking-tight font-mono">
            <img src="/logo.jpg" alt="logo" className="w-50 h-20" />
          </span>
        </div>
        {/* Menu */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.label} className="flex items-center">
                <a
                  href="#"
                  className={`text-sm px-2 py-1 hover:text-black hover:font-bold transition-all flex items-center font-normal`}
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 ml-1 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Contact Us Button */}
        <div className="min-w-[120px] flex justify-end">
          <Button className="bg-gradient-to-r from-black to-gray-600 text-white rounded-2xl px-8 py-3 font-semibold shadow-none border-none">
            contact us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header; 