import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

interface HeroProps {
  onSearch?: (filter: {
    propertyType: string;
    status: string;
    type: string;
    location: string;
  }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [propertyType, setPropertyType] = useState("Duplex");
  const [status, setStatus] = useState("For Sale");
  const [type, setType] = useState("Residential");
  const [location, setLocation] = useState("Los Angeles, CA");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch({ propertyType, status, type, location });
    }
    const element = document.getElementById("property");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <span className="text-base sm:text-lg font-medium text-gray-800 mb-2 tracking-normal">
              Perfect Place To Find your
            </span>

            <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-black tracking-tight leading-[1.05] uppercase mb-6">
              Find Your Dream Property with Legacy Homes
            </h1>

            <p className="text-sm sm:text-base text-gray-500 font-normal leading-relaxed max-w-lg mb-10">
              Find authentic luxury homes, contemporary living and custom homes
              for your lifestyle. Find properties by type, status, category and
              location, and a dedicated expert will be available to take you
              from the initial viewing to the day you receive the keys.
            </p>

            {/* Filter Bar Box */}
            <div className="w-full max-w-2xl bg-white rounded-2xl p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100">
              <form
                onSubmit={handleSearchSubmit}
                className="flex flex-col sm:flex-row items-center gap-3"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 flex-1 w-full">
                  {/* 1. Property Type */}
                  <div className="flex flex-col text-left px-2 py-1">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Property Type
                    </span>
                    <div className="relative">
                      <select
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-gray-900 focus:outline-none appearance-none cursor-pointer pr-4"
                      >
                        <option value="Duplex">Duplex</option>
                        <option value="Villa">Villa</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Penthouse">Penthouse</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 2. Status */}
                  <div className="flex flex-col text-left px-2 py-1 sm:border-l sm:border-gray-200">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Status
                    </span>
                    <div className="relative">
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-gray-900 focus:outline-none appearance-none cursor-pointer pr-4"
                      >
                        <option value="For Sale">For Sale</option>
                        <option value="For Rent">For Rent</option>
                        <option value="Ready to Move">Ready</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 3. Type */}
                  <div className="flex flex-col text-left px-2 py-1 sm:border-l sm:border-gray-200">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Type
                    </span>
                    <div className="relative">
                      <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-gray-900 focus:outline-none appearance-none cursor-pointer pr-4"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Waterfront">Waterfront</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* 4. Location */}
                  <div className="flex flex-col text-left px-2 py-1 sm:border-l sm:border-gray-200">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                      Location
                    </span>
                    <div className="relative">
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-transparent text-xs font-bold text-gray-900 focus:outline-none appearance-none cursor-pointer pr-4 truncate"
                      >
                        <option value="Los Angeles, CA">Los Angeles</option>
                        <option value="New York, NY">New York</option>
                        <option value="Miami, FL">Miami</option>
                        <option value="San Francisco, CA">San Francisco</option>
                      </select>
                      <ChevronDown className="w-3.5 h-3.5 text-gray-400 absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full sm:w-12 h-12 bg-black hover:bg-gray-800 text-white rounded-xl flex items-center justify-center shrink-0 active:scale-95 transition-all shadow-md cursor-pointer"
                  title="Search"
                >
                  <Search className="w-5 h-5 text-white" />
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Hero Skyscraper Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-[3/4]">
              {/* Main upward architecture building photo */}
              <div className="w-full h-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Architectural Tower"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Solid Black Circle Decor (Exact as Figma) */}
              <div className="absolute top-8 -right-6 sm:-right-8 w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full shadow-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
