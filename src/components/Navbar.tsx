import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Property', href: '#property' },
    { name: 'Contact Us', href: '#newsletter' },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-tetra font-black text-2xl tracking-tighter text-black font-light">
              LEGACY HOMES
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#login"
              onClick={(e) => { e.preventDefault(); alert('Login modal / flow'); }}
              className="text-sm font-semibold text-gray-800 hover:text-black transition-colors"
            >
              Login
            </a>
            <a
              href="#register"
              onClick={(e) => { e.preventDefault(); alert('Register modal / flow'); }}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-gray-800 active:scale-95 transition-all shadow-xs"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-gray-800 hover:text-black py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex items-center gap-4">
              <button
                onClick={() => { setMobileMenuOpen(false); alert('Login'); }}
                className="text-sm font-semibold text-gray-800"
              >
                Login
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); alert('Register'); }}
                className="px-5 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
