import React from 'react';
import lookingForTenantImg from '../assets/lookingfortenant.png';
import dedicatedImg from '../assets/dedicated.png';
import marketingPromotionImg from '../assets/marketingpromotion.png';
import tenantSelectImg from '../assets/tenantselect.png';
import freedomImg from '../assets/freedom.png';
import dealClosureImg from '../assets/dealclosure.png';

interface StepItem {
  title: string;
  description: string;
  image: string;
}

export const HowItWorks: React.FC = () => {
  const steps: StepItem[] = [
    {
      title: 'LOOKING FOR TENANT',
      description: 'Find verified residents and discover curated luxury properties tailored to your exact architectural and lifestyle needs.',
      image: lookingForTenantImg,
    },
    {
      title: 'DEDICATED MANAGER',
      description: 'A licensed personal property advisor oversees on-site VIP tours, contract negotiations, and concierge onboarding.',
      image: dedicatedImg,
    },
    {
      title: 'MARKETING & PROMOTION',
      description: 'Global multi-channel exposure for luxury listings, high-resolution photography, and 3D virtual walkthroughs.',
      image: marketingPromotionImg,
    },
    {
      title: 'TENANT SELECT',
      description: 'Comprehensive background checks, credit approvals, and verified rental applications processed seamlessly.',
      image: tenantSelectImg,
    },
    {
      title: 'FREEDOM & LEGAL CLEARANCE',
      description: 'Zero encumbrance title deed audits, transparent tax documentation, and secure escrow guarantees.',
      image: freedomImg,
    },
    {
      title: 'DEAL CLOSURE',
      description: 'Official deed package handover, smart key activation, and seamless integration into our on-demand care network.',
      image: dealClosureImg,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-4">
            HOW IT WORKS?
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Follow our proven six-step framework for seamless property discovery, acquisition, and lifelong home maintenance.
          </p>
        </div>

        {/* 6 Feature Points in 2-Column x 3-Row Grid with Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200 border-t border-b border-gray-200">
          
          {/* Left Column (Items 0, 2, 4) */}
          <div className="flex flex-col divide-y divide-gray-200">
            {[steps[0], steps[2], steps[4]].map((item, idx) => (
              <div
                key={idx}
                className="py-12 px-6 sm:px-12 flex flex-col items-center text-center group hover:bg-white transition-colors"
              >
                <div className="mb-6 h-40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-black uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (Items 1, 3, 5) */}
          <div className="flex flex-col divide-y divide-gray-200">
            {[steps[1], steps[3], steps[5]].map((item, idx) => (
              <div
                key={idx}
                className="py-12 px-6 sm:px-12 flex flex-col items-center text-center group hover:bg-white transition-colors"
              >
                <div className="mb-6 h-40 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-36 w-auto object-contain"
                  />
                </div>
                <h3 className="font-heading text-lg font-bold text-black uppercase tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 max-w-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
