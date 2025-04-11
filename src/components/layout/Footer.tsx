
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Blyevic Technology Solutions</h3>
            <p className="text-gray-300 mb-4">
              Innovative cooling solutions, professional engineering, and trusted delivery across East Africa.
            </p>
            <div className="flex items-center text-brand-green-light mb-2">
              <Phone size={18} className="mr-2" />
              <a href="tel:+254788215822">+254 788 215 822</a>
            </div>
            <div className="flex items-center text-brand-green-light mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:vctdhiambo@gmail.com">vctdhiambo@gmail.com</a>
            </div>
            <div className="flex items-center text-brand-green-light">
              <MapPin size={18} className="mr-2" />
              <span>East Africa</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-brand-green-light transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-brand-green-light transition-colors">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-brand-green-light transition-colors">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" className="text-gray-300 hover:text-brand-green-light transition-colors">
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-brand-green-light transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-brand-green-light transition-colors">
                HVAC Systems
              </li>
              <li className="text-gray-300 hover:text-brand-green-light transition-colors">
                Cold Storage Solutions
              </li>
              <li className="text-gray-300 hover:text-brand-green-light transition-colors">
                Mortuary Equipment
              </li>
              <li className="text-gray-300 hover:text-brand-green-light transition-colors">
                Commercial Kitchen Equipment
              </li>
              <li className="text-gray-300 hover:text-brand-green-light transition-colors">
                Stainless Steel Fabrication
              </li>
              <li className="text-gray-300 hover:text-brand-green-light transition-colors">
                Mild Steel Fabrication
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-300 mb-4">
              Need professional cooling or metal fabrication services? Reach out to our team today.
            </p>
            <a 
              href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
              className="bg-brand-green hover:bg-brand-green-dark text-white py-2 px-4 rounded inline-block transition-colors"
            >
              Inquire Now
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Blyevic Technology Solutions Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
