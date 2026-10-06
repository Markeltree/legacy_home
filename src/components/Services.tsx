import React, { useState } from 'react';
import { 
  Wrench, 
  Paintbrush, 
  Hammer, 
  Sparkles, 
  Armchair, 
  LayoutGrid 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const Services: React.FC = () => {
  // Plumber tile active by default as in Figma
  const [activeService, setActiveService] = useState<string>('plumber');

  const services: ServiceItem[] = [
    {
      id: 'plumber',
      title: 'PLUMBER',
      description: 'Whether its fixing a leak quickly or installing bathroom fittings or custom plumbing, our master plumbers are certified. We provide 24-hour-a-day, 7-day-a-week emergency water network repair solutions so that a burst pipe or unexpected leak never has to wait until morning.',
      icon: Wrench,
    },
    {
      id: 'painting',
      title: 'PAINTING',
      description: 'Interior and exterior work is done with precision edging and clean finishes by our professionals. We provide high quality wall textures and weatherproof finishes so your home looks neat and protected throughout the year.',
      icon: Paintbrush,
    },
    {
      id: 'handyman',
      title: 'HANDYMAN',
      description: 'Our professional handymen handle regular residential repairs, electric fixture replacement, drilling and wall mountings. They also do a variety of home restoration jobs, meaning that little tasks can be done well without bothering to find a man who can be trusted for small jobs.',
      icon: Hammer,
    },
    {
      id: 'cleaning',
      title: 'CLEANING',
      description: 'Deep residential cleaning, steam-sanitized floors, and thorough spot removal. Our move-in ready sanitization packages are perfect for new homeowners and tenants who wish to move in to a bright and clean home.',
      icon: Sparkles,
    },
    {
      id: 'furniture',
      title: 'FURNITURE',
      description: 'This furniture service includes custom furniture carpentry, ergonomic furniture assembly, and luxury woodwork maintenance. Interior support provides assistance to make a new property feel like your own.',
      icon: Armchair,
    },
    {
      id: 'more',
      title: 'MORE ITEM',
      description: 'Browse our extensive range of services from residential management to pest control, solar upkeep etc., and even custom landscaping. Our network of trusted partners can take care of any property requirement.',
      icon: LayoutGrid,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-4">
            OUR SERVICES
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Home Maintenance & Master Trade Services are available to help keep your home in prime condition. Our certified team is here 24/7 and available from your first day in the home.
          </p>
        </div>

        {/* 6-Item Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeService === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`p-8 sm:p-10 transition-all duration-300 cursor-pointer flex flex-col items-center text-center group ${
                  isActive
                    ? 'bg-black text-white shadow-2xl scale-[1.02]'
                    : 'bg-white text-black border border-gray-200 hover:border-black hover:shadow-lg'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                    isActive
                      ? 'bg-white/10 text-white'
                      : 'bg-gray-50 text-black group-hover:bg-black group-hover:text-white'
                  }`}
                >
                  <Icon className="w-8 h-8 stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3
                  className={`font-heading text-xl font-bold tracking-tight uppercase mb-3 ${
                    isActive ? 'text-white' : 'text-black'
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed max-w-xs ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
