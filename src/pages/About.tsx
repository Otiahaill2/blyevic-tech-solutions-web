
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="About Blyevic Technology Solutions"
        subtitle="Professional engineering and innovative solutions for your cooling and fabrication needs."
        backgroundImage="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80"
      />

      {/* Company Background */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Company</h2>
              <p className="text-gray-700 mb-4">
                Blyevic Technology Solutions Ltd. was established to provide professional cooling and fabrication solutions to clients across East Africa. With a focus on quality, innovation, and customer satisfaction, we have quickly established ourselves as a trusted name in the industry.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of skilled professionals brings extensive experience in HVAC systems, cold storage solutions, mortuary equipment, commercial kitchen installations, and metal fabrication. We work closely with our clients to understand their specific needs and deliver tailored solutions that exceed expectations.
              </p>
              <p className="text-gray-700">
                At Blyevic Technology Solutions, we are committed to using the highest quality materials and the latest technologies to ensure the reliability and efficiency of our installations. Our dedication to excellence is reflected in every project we undertake.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80"
                alt="Professional cooling equipment installation"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Mission</h3>
              <p className="text-gray-700">
                To provide innovative, high-quality cooling and fabrication solutions that meet the specific needs of our clients, while maintaining the highest standards of professionalism, integrity, and customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-blue">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading provider of cooling systems and metal fabrication services in East Africa, recognized for our technical expertise, innovation, and commitment to excellence in all aspects of our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the expert behind Blyevic Technology Solutions, driving our commitment to excellence.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="md:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Victor Odhiambo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:col-span-2 p-8">
                <h3 className="text-2xl font-bold mb-2">Victor Odhiambo</h3>
                <p className="text-brand-blue font-medium mb-4">Technical Director</p>
                <p className="text-gray-700 mb-4">
                  Victor Odhiambo brings years of technical expertise and industry knowledge to Blyevic Technology Solutions. With a strong background in engineering and a passion for innovative solutions, Victor leads our team in delivering professional cooling and fabrication services that meet the highest standards of quality.
                </p>
                <p className="text-gray-700">
                  Under Victor's leadership, Blyevic Technology Solutions has established itself as a trusted partner for businesses across East Africa seeking reliable HVAC systems, cold storage solutions, mortuary equipment, commercial kitchen installations, and metal fabrication services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner with Us for Your Next Project</h2>
            <p className="text-white/90 mb-8 text-lg">
              Experience the Blyevic difference with our professional approach, technical expertise, and commitment to customer satisfaction.
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

export default About;
