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
      description: 'We provide certified master plumbing services, rapid leak fixing, bathroom fittings, and 24/7 emergency water network repair.',
      icon: Wrench,
    },
    {
      id: 'painting',
      title: 'PAINTING',
      description: 'Professional interior and exterior painting services with precision edging, high-grade wall textures, and weatherproof finishes.',
      icon: Paintbrush,
    },
    {
      id: 'handyman',
      title: 'HANDYMAN',
      description: 'Expert residential repairs, electrical fixture updates, drilling, mountings, and versatile household restoration.',
      icon: Hammer,
    },
    {
      id: 'cleaning',
      title: 'CLEANING',
      description: 'Deep residential cleaning, steam sanitized floors, spot removal, and move-in ready sanitization packages.',
      icon: Sparkles,
    },
    {
      id: 'furniture',
      title: 'FURNITURE',
      description: 'Custom carpentry, ergonomic furniture assembly, luxury woodwork maintenance, and interior styling support.',
      icon: Armchair,
    },
    {
      id: 'more',
      title: 'MORE ITEM',
      description: 'Explore full catalog of residential management, pest control, solar maintenance, and custom landscaping solutions.',
      icon: LayoutGrid,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-4">
            SERVICES
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            We provide a wide range of verified home maintenance and master trade services to keep your residence in pristine condition.
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
