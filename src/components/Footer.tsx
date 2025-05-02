import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Neslihan GEDIK</h3>
            <p className="text-gray-600 text-sm">
              Étudiante en Bachelor Chargée de Gestion et de Management
            </p>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <a 
              href="mailto:neslihangedik@outllook.fr" 
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="tel:+33698303226" 
              className="text-gray-600 hover:text-blue-500 transition-colors duration-300"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            &copy; {currentYear} Neslihan GEDIK. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;