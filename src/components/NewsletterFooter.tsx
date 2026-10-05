import React, { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const NewsletterFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="w-full bg-[#1C1C1C] text-white pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Newsletter Split Card Banner */}
        <div id="newsletter" className="bg-[#1C1C1C] overflow-hidden mb-20 shadow-2xl border border-gray-800">
          <div className="grid lg:grid-cols-12 items-stretch">
            
            {/* Left Image Side (Building + Foliage) */}
            <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[320px]">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                alt="Modern Architecture"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#1C1C1C] hidden lg:block" />
            </div>

            {/* Right Form Side */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-center text-left">
              <h3 className="font-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-3">
                Get Our Monthly Newsletter
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8 max-w-lg leading-relaxed">
                Stay up to date with new property listings, market insights, and exclusive invitations to off-market private viewings.
              </p>

              {isSubmitted ? (
                <div className="bg-white/10 p-4 flex items-center gap-3 text-white text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Thank you! You have been added to our monthly newsletter.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex max-w-md w-full">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white text-black px-4 py-3.5 text-xs sm:text-sm font-medium focus:outline-none placeholder:text-gray-400"
                  />
                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white px-5 py-3.5 flex items-center justify-center shrink-0 active:scale-95 transition-all cursor-pointer"
                    title="Submit"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-800 text-left">
          
          {/* Col 1: Brand & Intro */}
          <div className="lg:col-span-5">
            <h4 className="font-tetra font-black text-2xl tracking-tighter text-white uppercase mb-4">
              LEGACY HOMES
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm mb-6">
              Premier real estate advisory delivering verified luxury residences, transparent transactions, and on-demand certified home care.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-900 hover:bg-white hover:text-black text-gray-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-900 hover:bg-white hover:text-black text-gray-400 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-900 hover:bg-white hover:text-black text-gray-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-gray-900 hover:bg-white hover:text-black text-gray-400 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66a1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-4">
              ABOUT
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#property" className="hover:text-white transition-colors">Property</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2">
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-4">
              SERVICES
            </h5>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Plumber</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Painting</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Handyman</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Furniture</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cleaning</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3">
            <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-white mb-4">
              CONTACT US
            </h5>
            <div className="space-y-2.5 text-xs text-gray-400">
              <p>+1 (800) 555-0199</p>
              <p>concierge@legacyhomes.com</p>
              <p>9440 Wilshire Blvd, Beverly Hills, CA</p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-gray-600">
          <p>© {new Date().getFullYear()} Legacy Homes. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
};
