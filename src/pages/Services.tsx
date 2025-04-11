
import HeroSection from '@/components/sections/HeroSection';
import { AirVent, Snowflake, Hospital, UtensilsCrossed, Layers, Square } from 'lucide-react';

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Professional cooling and fabrication solutions tailored to your needs."
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80"
      />

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Solutions for Your Business</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of professional services to meet your cooling and fabrication needs.
            </p>
          </div>
          
          {/* HVAC Systems */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <AirVent className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">HVAC Systems</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our professional HVAC services include the design, installation, and maintenance of heating, ventilation, and air conditioning systems for commercial and industrial applications. We provide energy-efficient solutions that ensure optimal comfort and air quality while reducing operational costs.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Commercial and industrial air conditioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Ventilation systems for various environments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Regular maintenance and servicing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Energy-efficient HVAC solutions</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+HVAC+systems+services."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire About HVAC Systems
              </a>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?auto=format&fit=crop&q=80"
                alt="HVAC Systems"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Cold Storage Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&q=80"
                alt="Cold Storage Solutions"
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Snowflake className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Cold Storage Solutions</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We provide custom cold storage installations for preserving perishable goods, with efficient cooling technologies designed for various industries including food processing, pharmaceuticals, and agriculture. Our solutions are tailored to meet your specific temperature and humidity requirements.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Cold rooms and freezer installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Temperature-controlled storage solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Custom designs for specific applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Ongoing maintenance and support</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+Cold+Storage+Solutions."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire About Cold Storage
              </a>
            </div>
          </div>
          
          {/* Mortuary Equipment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Hospital className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Mortuary Equipment</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our specialized mortuary refrigeration systems and equipment are designed for reliability and performance in medical facilities. We understand the sensitive nature of these installations and provide solutions that meet the highest standards of quality and compliance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Mortuary refrigeration systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Specialized storage solutions for medical facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Customized designs based on facility requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Professional installation and maintenance</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+Mortuary+Equipment."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire About Mortuary Equipment
              </a>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80"
                alt="Mortuary Equipment"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Commercial Kitchen Equipment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?auto=format&fit=crop&q=80"
                alt="Commercial Kitchen Equipment"
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <UtensilsCrossed className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Commercial Kitchen Equipment</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We provide high-quality kitchen installations and equipment for restaurants, hotels, and other commercial food service operations. Our solutions are designed for efficiency, durability, and compliance with industry standards, helping you create a productive kitchen environment.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Complete commercial kitchen installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Custom stainless steel equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Food preparation and storage solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Kitchen ventilation and exhaust systems</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+Commercial+Kitchen+Equipment."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire About Kitchen Equipment
              </a>
            </div>
          </div>
          
          {/* Stainless Steel Fabrication */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Layers className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Stainless Steel Fabrication</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Our custom stainless steel fabrication services cater to durable, hygienic, and corrosion-resistant applications across industries. Whether for food processing equipment, medical facilities, or architectural elements, we deliver high-quality stainless steel products tailored to your specifications.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Custom stainless steel fabrication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Food-grade stainless steel equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Medical and laboratory installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Architectural and decorative elements</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+Stainless+Steel+Fabrication."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire About Stainless Steel
              </a>
            </div>
            <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?auto=format&fit=crop&q=80"
                alt="Stainless Steel Fabrication"
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Mild Steel Fabrication */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1501286353178-1ec881214838?auto=format&fit=crop&q=80"
                alt="Mild Steel Fabrication"
                className="w-full h-auto"
              />
            </div>
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Square className="text-brand-blue h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">Mild Steel Fabrication</h3>
              </div>
              <p className="text-gray-700 mb-6">
                We offer professional mild steel fabrication services for structural applications and general engineering projects. Our experienced team can create custom solutions for your specific requirements, ensuring durability and structural integrity.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Structural steel fabrication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Custom metal components and frameworks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Industrial equipment and machinery parts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-green font-bold mr-2">✓</span>
                  <span>Welding and finishing services</span>
                </li>
              </ul>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+Mild+Steel+Fabrication."
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inquire About Mild Steel
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a Custom Solution?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your specific requirements. Our team of experts will work with you to design and implement the perfect solution for your business.
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

export default Services;
