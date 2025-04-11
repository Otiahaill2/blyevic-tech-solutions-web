
import { Shield, Clock, ThumbsUp, Award } from 'lucide-react';

const TrustSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Blyevic Technology Solutions is your trusted partner for all your cooling and fabrication needs, providing exceptional service across East Africa.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Trust Element 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="text-brand-green h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              We use only the highest quality materials and equipment for all our installations and fabrications.
            </p>
          </div>
          
          {/* Trust Element 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-brand-green h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
            <p className="text-gray-600">
              We understand the importance of deadlines and always ensure timely completion of all projects.
            </p>
          </div>
          
          {/* Trust Element 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="text-brand-green h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">
              Our team of professionals brings years of technical expertise and industry knowledge to every project.
            </p>
          </div>
          
          {/* Trust Element 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="bg-brand-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-brand-green h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
            <p className="text-gray-600">
              We prioritize our customers' needs and ensure their complete satisfaction with our services.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://wa.me/254788215822?text=I'd+like+to+inquire+about+your+services."
            className="btn-primary inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inquire Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
