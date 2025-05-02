import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Mes coordonnées</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Email</h4>
                  <a 
                    href="mailto:neslihangedik@outllook.fr" 
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    neslihangedik@outllook.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Téléphone</h4>
                  <a 
                    href="tel:+33698303226" 
                    className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                  >
                    06 98 30 32 26
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-500" size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Localisation</h4>
                  <p className="text-gray-600">Strasbourg, France</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;