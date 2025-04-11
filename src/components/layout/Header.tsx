
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-blue">Blyevic</span>
            <span className="ml-1 text-sm font-medium text-gray-600">Technology Solutions</span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium" : "text-gray-700 hover:text-brand-blue"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium" : "text-gray-700 hover:text-brand-blue"
              }
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium" : "text-gray-700 hover:text-brand-blue"
              }
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium" : "text-gray-700 hover:text-brand-blue"
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium" : "text-gray-700 hover:text-brand-blue"
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-brand-blue hover:bg-brand-blue-dark">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-inner animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium px-2 py-1" : "text-gray-700 hover:text-brand-blue px-2 py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium px-2 py-1" : "text-gray-700 hover:text-brand-blue px-2 py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium px-2 py-1" : "text-gray-700 hover:text-brand-blue px-2 py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium px-2 py-1" : "text-gray-700 hover:text-brand-blue px-2 py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive ? "text-brand-blue font-medium px-2 py-1" : "text-gray-700 hover:text-brand-blue px-2 py-1"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button className="bg-brand-blue hover:bg-brand-blue-dark w-full mt-2">
              Get a Quote
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
