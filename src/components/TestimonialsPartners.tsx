import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsPartners: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Ethan Cole',
      role: 'Homeowner, Los Angeles',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
      comment:
        'Legacy Homes transformed our entire buying experience. The legal deed transfer was completely seamless with zero hidden markups, and their master plumber network handled our custom fittings within 24 hours.',
    },
    {
      id: 2,
      name: 'David Vance',
      role: 'Real Estate Investor, New York',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      comment:
        'In over a decade of property acquisitions, I have rarely seen a platform integrate luxury residential purchasing with verified on-demand maintenance so efficiently. Outstanding quality and execution.',
    },
    {
      id: 3,
      name: 'Sarah Jenkins',
      role: 'Penthouse Resident, Miami',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      comment:
        'The concierge attention to detail is remarkable. From 3D virtual previews to key handover and interior styling, Legacy Homes provided an unrivaled five-star experience from start to finish.',
    },
  ];

  const partners = [
    {
      name: 'ALEXANDER REED',
      role: 'Managing Partner - Capital Ventures',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'MICHAEL STERLING',
      role: 'Chief Architect - Urban Developments',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* 1. Client Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-28 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-4">
              CLIENT TESTIMONIALS
            </h2>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Read authentic reviews from satisfied property owners, tenants, and investors across our global network.
            </p>
          </div>

          {/* Testimonial Cards Layout (Left portrait, Center featured card with quote, Right portrait) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Card: Portrait 1 */}
            <div className="hidden lg:block lg:col-span-3 h-80 relative overflow-hidden shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Client Portrait"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4 p-2 bg-black/80 text-white text-center text-xs font-bold uppercase tracking-wider">
                Resident Profile
              </div>
            </div>

            {/* Middle Card: Featured Testimonial (6 cols) */}
            <div className="lg:col-span-6 bg-white border border-gray-200 shadow-xl overflow-hidden flex flex-col sm:flex-row">
              
              {/* Left half: Client photo */}
              <div className="sm:w-1/2 aspect-square sm:aspect-auto relative">
                <img
                  src={testimonials[activeTestimonialIdx].avatar}
                  alt={testimonials[activeTestimonialIdx].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right half: Quote text & Author */}
              <div className="sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between text-left">
                <div>
                  <Quote className="w-8 h-8 text-black mb-4 fill-black" />
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 italic">
                    "{testimonials[activeTestimonialIdx].comment}"
                  </p>
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-black uppercase">
                    {testimonials[activeTestimonialIdx].name}
                  </h4>
                  <p className="text-[11px] text-gray-400">
                    {testimonials[activeTestimonialIdx].role}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Card: Portrait 3 */}
            <div className="hidden lg:block lg:col-span-3 h-80 relative overflow-hidden shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
                alt="Client Portrait"
                className="w-full h-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4 p-2 bg-black/80 text-white text-center text-xs font-bold uppercase tracking-wider">
                Investor Profile
              </div>
            </div>

          </div>

          {/* Testimonials Switcher Buttons */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 border border-black hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold text-gray-500">
              0{activeTestimonialIdx + 1} / 0{testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 border border-black hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 2. Partners Section */}
      <section id="partners" className="py-20 md:py-28 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Partners Content */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-8">
                PARTNERS
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-5">
                We collaborate with top-tier architectural firms, institutional developers, and financial consortia worldwide to provide exclusive off-market residential access.
              </p>

              <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-8">
                Our strategic network allows us to deliver end-to-end investment security, bespoke renovations, and preferential mortgage terms to every Legacy Homes client.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => alert('Partner application form opened.')}
                  className="px-6 py-3.5 bg-black hover:bg-gray-800 text-white font-heading text-xs font-bold uppercase tracking-widest active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  BECOME OUR PARTNER
                </button>
                <button
                  type="button"
                  onClick={() => alert('Browse partner portfolio')}
                  className="w-12 h-12 border border-black hover:bg-black hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next partner"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: 2 Executive Corporate Photos */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[3/4] overflow-hidden shadow-xl bg-gray-100 group"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Name overlay banner at bottom */}
                  <div className="absolute bottom-6 left-6 right-6 text-left">
                    <p className="font-heading text-base font-bold text-white uppercase tracking-wider">
                      {partner.name}
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">
                      {partner.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
