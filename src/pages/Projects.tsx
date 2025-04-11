
import HeroSection from '@/components/sections/HeroSection';

// Project data
const projects = [
  {
    id: 1,
    title: 'Commercial Kitchen Installation',
    description: 'Complete stainless steel kitchen installation for a 5-star hotel in Nairobi.',
    category: 'Commercial Kitchen',
    image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Hospital Cold Storage',
    description: 'Custom cold storage solution for medical supplies at a major hospital.',
    category: 'Cold Storage',
    image: 'https://images.unsplash.com/photo-1438565434616-3ef039228b15?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Mortuary Facility Equipment',
    description: 'Complete mortuary refrigeration system for a new medical facility.',
    category: 'Mortuary Equipment',
    image: 'https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Office Building HVAC',
    description: 'Energy-efficient HVAC installation for a multi-story office building.',
    category: 'HVAC Systems',
    image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Food Processing Steel Fabrication',
    description: 'Custom stainless steel equipment for a food processing plant.',
    category: 'Stainless Steel Fabrication',
    image: 'https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Warehouse Storage Solutions',
    description: 'Mild steel structural elements for a large warehouse facility.',
    category: 'Mild Steel Fabrication',
    image: 'https://images.unsplash.com/photo-1487252665478-49b61b47f302?auto=format&fit=crop&q=80'
  }
];

const Projects = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Our Projects"
        subtitle="Showcasing our completed work and successful installations."
        backgroundImage="https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&q=80"
      />

      {/* Projects Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries and applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-brand-blue text-white text-xs font-medium px-2 py-1 rounded">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a 
                    href="#" 
                    className="text-brand-blue hover:text-brand-blue-dark font-medium inline-flex items-center"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What our clients say about our services and completed projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="text-5xl text-brand-blue opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">
                  The HVAC system installed by Blyevic Technology Solutions has significantly improved our office environment. Their team was professional, efficient, and completed the project on schedule.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">John Mwangi</h4>
                    <p className="text-sm text-gray-500">Office Manager, Nairobi</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="text-5xl text-brand-blue opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">
                  We contracted Blyevic for our commercial kitchen installation, and the results exceeded our expectations. The stainless steel fabrication was of the highest quality, and the team provided excellent service.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">Sarah Kimani</h4>
                    <p className="text-sm text-gray-500">Restaurant Owner, Mombasa</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="text-5xl text-brand-blue opacity-20 absolute top-4 left-4">"</div>
              <div className="relative z-10">
                <p className="text-gray-700 mb-6">
                  The cold storage solution provided by Blyevic has been crucial for our business. Their attention to detail and ongoing support have made them our preferred partner for all cooling needs.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold">David Ochieng</h4>
                    <p className="text-sm text-gray-500">Food Processing Manager, Kisumu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss how we can help you with your next cooling or fabrication project.
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

export default Projects;
