import React, { useState } from 'react';
import { Bed, Bath, Square, MapPin, X, Check, PhoneCall, Calendar } from 'lucide-react';

interface PropertyItem {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  description: string;
  features: string[];
}

export const PropertyShowcase: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<PropertyItem | null>(null);

  const properties: PropertyItem[] = [
    {
      id: 'prop-1',
      title: 'Commercial Real Estate in Los Angeles, California',
      location: '104 Crestline Dr, Los Angeles, CA',
      price: '$2,850,000',
      beds: 4,
      baths: 3,
      sqft: 3400,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Stunning contemporary villa featuring private pool, open floor architectural planning, smart security, and panoramic city vistas.',
      features: ['Private Heated Pool', 'Smart Lighting Automation', 'Floor-to-Ceiling Windows', '2-Car Garage'],
    },
    {
      id: 'prop-2',
      title: 'Modern Apartment in New York City, New York',
      location: '740 Park Ave, New York, NY',
      price: '$1,920,000',
      beds: 3,
      baths: 2,
      sqft: 2200,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80',
      description: 'Sophisticated Manhattan penthouse interior with custom minimalist carpentry, skyline views, and 24/7 concierge building services.',
      features: ['Concierge Service', 'Private Terrace', 'Designer Kitchen Appliances', 'Fitness Club Access'],
    },
    {
      id: 'prop-3',
      title: 'Luxury Residence in Miami Beach, Florida',
      location: '88 Oceanview Blvd, Miami, FL',
      price: '$3,400,000',
      beds: 5,
      baths: 4,
      sqft: 4800,
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80',
      description: 'Exclusive beachfront architecture with landscaped palms, dual master suites, outdoor cabana kitchen, and private boat dock.',
      features: ['Beachfront Access', 'Summer Kitchen & BBQ', 'Gated Community Enclave', 'Private Docking'],
    },
  ];

  return (
    <section id="property" className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl font-black text-black tracking-tight uppercase mb-4">
            PROPERTY
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Discover our curated selection of premier residences available for immediate acquisition and long-term residency.
          </p>
        </div>

        {/* 3 Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((prop) => (
            <div
              key={prop.id}
              className="bg-white border border-gray-200 overflow-hidden flex flex-col group hover:shadow-xl hover:border-black transition-all duration-300"
            >
              {/* Property Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between text-left">
                <div>
                  {/* Title / Description */}
                  <h3 className="font-bold text-base text-black mb-4 leading-snug line-clamp-2">
                    {prop.title}
                  </h3>

                  {/* Specs Row */}
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-600 border-t border-b border-gray-100 py-3 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-black" />
                      <span>{prop.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Bath className="w-4 h-4 text-black" />
                      <span>{prop.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Square className="w-4 h-4 text-black" />
                      <span>{prop.sqft} sqft</span>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProperty(prop)}
                  className="w-full py-3 bg-black hover:bg-gray-800 text-white font-heading text-xs font-bold uppercase tracking-widest active:scale-98 transition-all cursor-pointer"
                >
                  VIEW DETAILS
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 text-left relative shadow-2xl animate-in zoom-in-95 duration-150">
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative aspect-video w-full mb-6 overflow-hidden">
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
              <MapPin className="w-4 h-4 text-black" />
              <span>{selectedProperty.location}</span>
            </div>

            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-2xl font-bold text-black">
                {selectedProperty.title}
              </h3>
              <span className="text-xl font-black text-black">
                {selectedProperty.price}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 py-3 px-4 bg-gray-50 border border-gray-100 text-center mb-6">
              <div>
                <span className="text-xs text-gray-400 block">Beds</span>
                <span className="text-sm font-bold text-black">{selectedProperty.beds}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Baths</span>
                <span className="text-sm font-bold text-black">{selectedProperty.baths}</span>
              </div>
              <div>
                <span className="text-xs text-gray-400 block">Area</span>
                <span className="text-sm font-bold text-black">{selectedProperty.sqft} sqft</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              {selectedProperty.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-3">
                Key Amenities
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {selectedProperty.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                    <Check className="w-4 h-4 text-black" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 pt-4 border-t border-gray-100">
              <a
                href="tel:+18005550199"
                className="flex-1 py-3 bg-black hover:bg-gray-800 text-white font-heading text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contact Agent</span>
              </a>
              <button
                onClick={() => {
                  alert(`Private tour scheduled for ${selectedProperty.title}!`);
                  setSelectedProperty(null);
                }}
                className="flex-1 py-3 border border-black hover:bg-gray-50 text-black font-heading text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Tour</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
