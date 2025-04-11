
import HeroSection from '@/components/sections/HeroSection';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries and project discussions."
        backgroundImage="https://images.unsplash.com/photo-1487952674223-7d5866d1a127?auto=format&fit=crop&q=80"
      />

      {/* Contact Info & Form */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-700 mb-8">
                Have questions about our services or want to discuss your project requirements? Contact us using the information below or fill out the contact form, and a member of our team will get back to you as soon as possible.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-brand-blue h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">+254 788 215 822</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-brand-blue h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">vctdhiambo@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-brand-blue/10 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-brand-blue h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-700">East Africa</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <a 
                  href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
                  className="btn-primary inline-flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            {/* Contact Form (Tally Embed) */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>
              <iframe
                src="https://tally.so/embed/mRWvpp?alignLeft=1&hideTitle=1&dynamicHeight=1"
                className="w-full border-0 min-h-[500px]"
                title="Contact Form"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps (Placeholder) */}
      <section className="mt-12">
        <div className="h-96 bg-gray-200 w-full">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.213098050436!2d36.81252767067551!3d-1.286416149341992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11bce85be1cd%3A0x592f64c8c786ab8!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1649335418771!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-blue text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Contact us today to discuss your project requirements and discover how Blyevic Technology Solutions can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+254788215822"
                className="bg-white text-brand-blue font-medium py-2 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Call Us Now
              </a>
              <a 
                href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
                className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-md hover:bg-white/10 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
