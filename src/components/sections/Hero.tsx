import React from 'react';
import Button from '../Button';
import { Download, Send } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative pt-16 pb-16 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Neslihan GEDIK
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
              Étudiante en Bachelor Chargée de Gestion et de Management
            </h2>
            
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Passionnée par l'organisation, le suivi et le contrôle, je me spécialise dans la gestion et la finance. 
              Mon objectif est de contribuer à l'amélioration de la gestion d'entreprise et à l'optimisation des ressources.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="primary" 
                size="lg"
                icon={<Download size={18} />}
              >
                Télécharger mon CV
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                icon={<Send size={18} />}
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Me contacter
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fadeIn">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1743507664175-e1a0ebccfcb3?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Neslihan GEDIK"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#about"
          className="flex flex-col items-center text-gray-500 hover:text-blue-500 transition-colors duration-300"
          aria-label="Scroll to About section"
        >
          <span className="text-sm mb-1">En savoir plus</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;