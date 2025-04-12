
import HeroSection from '@/components/sections/HeroSection';
import TrustSection from '@/components/sections/TrustSection';
import EditableText from '@/components/editor/EditableText';
import EditableImage from '@/components/editor/EditableImage';

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
              <EditableText 
                id="company-title" 
                defaultText="Our Company" 
                as="h2"
                className="text-3xl font-bold mb-6"
              />
              <EditableText 
                id="company-para-1" 
                defaultText="Blyevic Technology Solutions Ltd. was established to provide professional cooling and fabrication solutions to clients across East Africa. With a focus on quality, innovation, and customer satisfaction, we have quickly established ourselves as a trusted name in the industry." 
                className="text-gray-700 mb-4"
              />
              <EditableText 
                id="company-para-2" 
                defaultText="Our team of skilled professionals brings extensive experience in HVAC systems, cold storage solutions, mortuary equipment, commercial kitchen installations, and metal fabrication. We work closely with our clients to understand their specific needs and deliver tailored solutions that exceed expectations." 
                className="text-gray-700 mb-4"
              />
              <EditableText 
                id="company-para-3" 
                defaultText="At Blyevic Technology Solutions, we are committed to using the highest quality materials and the latest technologies to ensure the reliability and efficiency of our installations. Our dedication to excellence is reflected in every project we undertake." 
                className="text-gray-700"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <div className="text-center p-8">
                <EditableText 
                  id="victor-name" 
                  defaultText="Victor Odhiambo" 
                  as="h3"
                  className="text-2xl font-bold mb-4"
                />
                <EditableText 
                  id="victor-title" 
                  defaultText="Technical Director" 
                  className="text-brand-blue font-medium mb-4"
                />
                <EditableText 
                  id="victor-bio" 
                  defaultText="Victor Odhiambo leads our team with years of technical expertise and industry knowledge. With a strong background in engineering and a passion for innovative solutions, Victor ensures that Blyevic Technology Solutions delivers professional cooling and fabrication services that meet the highest standards of quality." 
                  className="text-gray-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <EditableText 
                id="mission-title" 
                defaultText="Our Mission" 
                as="h3"
                className="text-2xl font-bold mb-4 text-brand-blue"
              />
              <EditableText 
                id="mission-text" 
                defaultText="To provide innovative, high-quality cooling and fabrication solutions that meet the specific needs of our clients, while maintaining the highest standards of professionalism, integrity, and customer service." 
                className="text-gray-700"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <EditableText 
                id="vision-title" 
                defaultText="Our Vision" 
                as="h3"
                className="text-2xl font-bold mb-4 text-brand-blue"
              />
              <EditableText 
                id="vision-text" 
                defaultText="To be the leading provider of cooling systems and metal fabrication services in East Africa, recognized for our technical expertise, innovation, and commitment to excellence in all aspects of our operations." 
                className="text-gray-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profile */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <EditableText 
              id="leadership-title" 
              defaultText="Our Leadership" 
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-4"
            />
            <EditableText 
              id="leadership-subtitle" 
              defaultText="Meet the expert behind Blyevic Technology Solutions, driving our commitment to excellence." 
              className="text-gray-600 max-w-2xl mx-auto"
            />
          </div>
          
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-8 text-center">
              <EditableText 
                id="leader-name" 
                defaultText="Victor Odhiambo" 
                as="h3"
                className="text-2xl font-bold mb-2"
              />
              <EditableText 
                id="leader-title" 
                defaultText="Technical Director" 
                className="text-brand-blue font-medium mb-4"
              />
              <EditableText 
                id="leader-bio-1" 
                defaultText="Victor Odhiambo brings years of technical expertise and industry knowledge to Blyevic Technology Solutions. With a strong background in engineering and a passion for innovative solutions, Victor leads our team in delivering professional cooling and fabrication services that meet the highest standards of quality." 
                className="text-gray-700 mb-4"
              />
              <EditableText 
                id="leader-bio-2" 
                defaultText="Under Victor's leadership, Blyevic Technology Solutions has established itself as a trusted partner for businesses across East Africa seeking reliable HVAC systems, cold storage solutions, mortuary equipment, commercial kitchen installations, and metal fabrication services." 
                className="text-gray-700"
              />
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
            <EditableText 
              id="cta-title" 
              defaultText="Partner with Us for Your Next Project" 
              as="h2"
              className="text-3xl md:text-4xl font-bold mb-6"
            />
            <EditableText 
              id="cta-text" 
              defaultText="Experience the Blyevic difference with our professional approach, technical expertise, and commitment to customer satisfaction." 
              className="text-white/90 mb-8 text-lg"
            />
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
