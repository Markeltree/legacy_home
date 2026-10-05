import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-8">
              ABOUT US
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
              Legacy Homes is a premier real estate and property lifestyle advisory founded on the ideals of architectural distinction, legal transparency, and comprehensive lifetime residency support.
            </p>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-5">
              We eliminate the traditional friction of property transactions by pairing discerning buyers and tenants with vetted properties while providing our certified master service network for turnkey renovations and maintenance.
            </p>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
              Every home in our portfolio undergo strict title authentication and structural inspection, ensuring your investment is backed by certified legal peace of mind.
            </p>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3.5 bg-black hover:bg-gray-800 text-white font-heading text-xs font-bold uppercase tracking-widest active:scale-95 transition-all shadow-md cursor-pointer"
            >
              ABOUT US
            </button>
          </div>

          {/* Right Column: Architectural Image & Black Circles */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[440px] aspect-[4/5]">
              
              {/* Main upward modern glass skyscraper photo */}
              <div className="w-full h-full overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Glass Skyscraper Architecture"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Top-Right Solid Black Circle */}
              <div className="absolute -top-6 -right-6 sm:-right-8 w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full shadow-2xl pointer-events-none" />

              {/* Floating Left-Middle Solid Black Circle */}
              <div className="absolute top-1/2 -left-8 sm:-left-10 -translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-black rounded-full shadow-2xl pointer-events-none" />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
