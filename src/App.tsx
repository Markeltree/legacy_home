import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { PropertyShowcase } from './components/PropertyShowcase';
import { HowItWorks } from './components/HowItWorks';
import { TestimonialsPartners } from './components/TestimonialsPartners';
import { NewsletterFooter } from './components/NewsletterFooter';

export function App() {
  const handleSearch = (filters: {
    propertyType: string;
    status: string;
    type: string;
    location: string;
  }) => {
    console.log('Searching properties with filters:', filters);
  };

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#1C1C1C] selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1 w-full">
        {/* 2. Hero Section with Search Filter Bar */}
        <Hero onSearch={handleSearch} />

        {/* 3. Services Grid (with active dark tile for Plumber) */}
        <Services />

        {/* 4. About Us (Text + Geometric Cropped Image) */}
        <AboutUs />

        {/* 5. Property Showcase (3 property cards with specs & 'View Details') */}
        <PropertyShowcase />

        {/* 6. How It Works (6 feature points with illustrations & steps) */}
        <HowItWorks />

        {/* 7. Client Testimonials & Trust Partners */}
        <TestimonialsPartners />
      </main>

      {/* 8. Newsletter & Multi-Column Footer */}
      <NewsletterFooter />
    </div>
  );
}

export default App;
