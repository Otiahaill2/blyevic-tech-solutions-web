
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const ServiceCard = ({ title, description, Icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="bg-brand-blue/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon className="text-brand-blue h-8 w-8" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a 
        href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
        className="text-brand-blue hover:text-brand-blue-dark font-medium inline-flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn More
      </a>
    </div>
  );
};

export default ServiceCard;
