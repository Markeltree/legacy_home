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
      title: 'Find the Tenant on the map',
      description: 'We match confirmed tenants to selected luxury apartments in line with design preference and lifestyle requirements. Owners receive qualified interest and tenants/buyers only see pre-qualified homes.',
      image: lookingForTenantImg,
    },
    {
      title: 'Marketing & Promotion',
      description: 'All listings are exposed all throughout the world, but across multiple channels. Multiple high-resolution photographs of each property showcase their best image, while 3D virtual tours allow you to view every room from before you travel to see them.',
      image: dedicatedImg,
    },
    {
      title: 'Freedom & Legal Clearance',
      description: 'We finish a title deed audit of zero encumbrances and make clear tax documents before any person signs. Escrow is safeguarded by Secure Escrow to ensure that money is not released until everything has been fulfilled.',
      image: marketingPromotionImg,
    },
    {
      title: 'Dedicated Manager',
      description: 'A personal property advisor with a license is assigned to you. They offer on-site VIP tours, manage your contract negotiations and concierge onboarding – you always have one point of contact.',
      image: tenantSelectImg,
    },
    {
      title: 'Tenant Selection',
      description: 'Rental applications are thoroughly reviewed, credit checked, and applicants are thoroughly vetted. Owners can be confident in who they are allowing to move in.',
      image: freedomImg,
    },
    {
      title: 'Deal Closure',
      description: 'You will receive the official deed package, your smart key will be activated and you will be greeted as a part of our on-demand care network. All the plumbing, painting, cleaning, and other services are available immediately.',
      image: dealClosureImg,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-4">
            Your Path to Your Dream Home
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            We've developed a highly effective six-step process that helps you discover a home and then has it cared for well past the closing date.
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
