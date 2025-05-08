import React from 'react';
import { Target, TrendingUp, Heart, Globe, Utensils, Smile, Gamepad, Box } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Mes projets et centres d'intérêt</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Short term goals */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm mx-auto">
                <Target className="text-blue-500" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Projets à court terme</h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                À court terme, je souhaite entrer pleinement dans la vie active et continuer à développer mes compétences, 
                notamment dans les domaines de l'administration et de la gestion. Je ne prévois pas de reprendre mes études 
                immédiatement, car je ressens le besoin de faire une pause et de me concentrer sur l'expérience professionnelle.
              </p>
              
              <ul className="space-y-2">
                {[
                  'Intégrer un poste en administration ou gestion',
                  'Développer mes compétences en gestion financière',
                  'Acquérir de l\'expérience terrain',
                  'Élargir mon réseau professionnel'
                ].map((goal, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Long term goals */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-md">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-sm mx-auto">
                <TrendingUp className="text-blue-500" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-center text-gray-800 mb-4">Projets à long terme</h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                À plus long terme, j'aimerais me lancer dans l'entrepreneuriat et créer un lieu dédié à la détente et au bien-être. 
                Ce projet me permettrait de combiner plusieurs aspects que j'aime : l'organisation, le soin apporté aux autres, 
                l'esthétique et l'ambiance apaisante.
              </p>
              
              <ul className="space-y-2">
                {[
                  'Créer un espace de bien-être et détente',
                  'Combiner gestion, esthétique et soins',
                  'Mettre en pratique mes compétences en organisation',
                  'Proposer une expérience client unique',
                  'Former une équipe selon mes valeurs'
                ].map((goal, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Centres d'intérêt</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Heart className="text-pink-500 mb-2" size={24} />
                <span className="text-sm text-gray-600 text-center">Les animaux</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Globe className="text-blue-500 mb-2" size={24} />
                <span className="text-sm text-gray-600 text-center">Les voyages</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Utensils className="text-orange-500 mb-2" size={24} />
                <span className="text-sm text-gray-600 text-center">La cuisine</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Smile className="text-yellow-500 mb-2" size={24} />
                <span className="text-sm text-gray-600 text-center">Le maquillage</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Gamepad className="text-purple-500 mb-2" size={24} />
                <span className="text-sm text-gray-600 text-center">Les jeux</span>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Box className="text-green-500 mb-2" size={24} />
                <span className="text-sm text-gray-600 text-center">L'organisation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;