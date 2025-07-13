import React from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';

const socialIcons = [
  {
    href: 'https://github.com/',
    label: 'GitHub',
    icon: <FaGithub className="w-4 h-4" />,
  },
  {
    href: 'https://linkedin.com/',
    label: 'LinkedIn',
    icon: <FaLinkedin className="w-4 h-4" />,
  },
  {
    href: 'https://instagram.com/',
    label: 'Instagram',
    icon: <FaInstagram className="w-4 h-4" />,
  },
  {
    href: 'https://twitter.com/',
    label: 'Twitter',
    icon: <FaTwitter className="w-4 h-4" />,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-xs md:text-sm p-10">
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Left: Logo & Address */}
          <div className="md:w-1/3 space-y-4">
            <div className="font-extrabold text-base md:text-lg tracking-tight font-mono">
                <img src="/logo.jpg" alt="logo" className="w-30 h-10" />
            </div>
            <div className="flex items-start space-x-2 text-gray-300">
              <span className="mt-1">
                <FaMapMarkerAlt className="w-4 h-4" />
              </span>
              <span>
                No. 216, 5th avenue, brigade road,<br />
                blr-01, Brigade Road,<br />
                Bangalore, Karnataka, 560001
              </span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>
                <FaEnvelope className="w-4 h-4" />
              </span>
              <span>info@theHostCode.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>
                <FaPhone className="w-4 h-4 rotate-90" />
              </span>
              <span>+91 9876543210</span>
            </div>
          </div>
          {/* Right: Columns */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 md:pl-8">
            {/* Company */}
            <div>
              <h4 className="font-bold mb-1 md:mb-2">Company</h4>
              <ul className="space-y-0.5 md:space-y-1">
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Career</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="font-bold mb-1 md:mb-2">Legal</h4>
              <ul className="space-y-0.5 md:space-y-1">
                <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                <li><a href="#" className="hover:underline">Privacy policy</a></li>
                <li><a href="#" className="hover:underline">Cookie policy</a></li>
                <li><a href="#" className="hover:underline">Disclaimer</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 className="font-bold mb-1 md:mb-2">Resources</h4>
              <ul className="space-y-0.5 md:space-y-1">
                <li><a href="#" className="hover:underline">Security & Compliance</a></li>
                <li><a href="#" className="hover:underline">Blogs</a></li>
                <li><a href="#" className="hover:underline">Case study</a></li>
                <li><a href="#" className="hover:underline">FAQs</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t my-6" />
        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 pb-2">
          <p className="text-gray-400 text-[11px] md:text-xs">© 2025 theHostCode. All rights reserved.</p>
          <div className="flex items-center space-x-2 md:space-x-2 md:ml-auto">
            <span className="text-gray-400 text-[11px] md:text-xs mr-1">Connect with us:</span>
            {socialIcons.map((icon) => (
              <a key={icon.label} href={icon.href} target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400">
                {icon.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 