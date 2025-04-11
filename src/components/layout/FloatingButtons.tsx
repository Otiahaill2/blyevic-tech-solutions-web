
import { Phone, MessageCircle } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
        className="floating-btn bg-green-500 hover:bg-green-600"
        aria-label="Contact us on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={24} />
      </a>
      
      {/* Phone Call Button */}
      <a 
        href="tel:+254788215822"
        className="floating-btn bg-brand-blue hover:bg-brand-blue-dark"
        aria-label="Call us"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingButtons;
