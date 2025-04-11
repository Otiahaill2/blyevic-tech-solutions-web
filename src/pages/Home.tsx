
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import ServiceCard from '@/components/sections/ServiceCard';
import { AirVent, Snowflake, Hospital, UtensilsCrossed, Layers, Square } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Innovative Cooling. Professional Engineering. Trusted Delivery."
        subtitle="Providing professional HVAC, cold storage, and metal fabrication solutions across East Africa."
        backgroundImage="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80"
      >
        <div className="flex flex-wrap gap-4">
          <a 
            href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire Now
          </a>
          <a href="/services" className="btn-secondary">
            Our Services
          </a>
        </div>
      </HeroSection>

      {/* Company Intro */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Welcome to Blyevic Technology Solutions</h2>
            <p className="text-gray-700 mb-8 text-lg">
              Blyevic Technology Solutions Ltd. is a leading provider of professional cooling systems, storage solutions, and metal fabrication services across East Africa. We combine technical expertise with innovative engineering to deliver reliable solutions that meet your specific needs.
            </p>
            <a href="/about" className="btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of professional services to meet your cooling and fabrication needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="HVAC Systems" 
              description="Professional installation and maintenance of heating, ventilation, and air conditioning systems for commercial and industrial applications."
              Icon={AirVent}
            />
            <ServiceCard 
              title="Cold Storage Solutions" 
              description="Custom cold storage installations for preserving perishable goods, with efficient cooling technologies for various industries."
              Icon={Snowflake}
            />
            <ServiceCard 
              title="Mortuary Equipment" 
              description="Specialized mortuary refrigeration systems and equipment designed for reliability and performance in medical facilities."
              Icon={Hospital}
            />
            <ServiceCard 
              title="Commercial Kitchen Equipment" 
              description="High-quality kitchen installations and equipment for restaurants, hotels, and other commercial food service operations."
              Icon={UtensilsCrossed}
            />
            <ServiceCard 
              title="Stainless Steel Fabrication" 
              description="Custom stainless steel fabrication for durable, hygienic, and corrosion-resistant applications across industries."
              Icon={Layers}
            />
            <ServiceCard 
              title="Mild Steel Fabrication" 
              description="Professional mild steel fabrication services for structural applications and general engineering projects."
              Icon={Square}
            />
          </div>
          
          <div className="text-center mt-10">
            <a href="/services" className="btn-primary">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your requirements and discover how Blyevic Technology Solutions can provide you with the perfect cooling or fabrication solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
                className="bg-white text-brand-blue font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire Now
              </a>
              <a 
                href="/contact" 
                className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-md hover:bg-white/10 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
