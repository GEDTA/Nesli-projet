import React from 'react';
import { Monitor, Languages, Users, Database } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level?: number;
  }[];
};

const skillsData: SkillCategory[] = [
  {
    name: 'Compétences techniques',
    icon: <Monitor size={24} />,
    skills: [
      { name: 'Gestion administrative et bureautique', level: 90 },
      { name: 'Maîtrise des outils bureautiques (Excel, Word, Outlook)', level: 85 },
      { name: 'Saisie et gestion de documents administratifs', level: 90 },
      { name: 'Gestion de la communication professionnelle', level: 85 },
      { name: 'Organisation et classement de dossiers', level: 90 },
      { name: 'Suivi de plannings et tableaux de bord', level: 85 },
      { name: 'Gestion de la production et contrôle qualité', level: 80 },
      { name: 'Respect des normes d\'hygiène et de sécurité', level: 85 },
      { name: 'Compétences en soins de santé', level: 75 }
    ]
  },
  {
    name: 'Compétences linguistiques',
    icon: <Languages size={24} />,
    skills: [
      { name: 'Français', level: 100 },
      { name: 'Turc', level: 100 },
      { name: 'Anglais', level: 60 },
      { name: 'Espagnol', level: 30 }
    ]
  },
  {
    name: 'Compétences interpersonnelles',
    icon: <Users size={24} />,
    skills: [
      { name: 'Organisation', level: 95 },
      { name: 'Relationnel', level: 90 },
      { name: 'Empathie et bienveillance', level: 95 },
      { name: 'Travail en équipe', level: 90 },
      { name: 'Rigueur', level: 95 },
      { name: 'Adaptabilité', level: 85 }
    ]
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Mes compétences</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
            {skillsData.map((category, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-sm p-6 border border-gray-100"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700">{skill.name}</span>
                        {skill.level && (
                          <span className="text-gray-500 text-sm">
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      
                      {skill.level && (
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `progressAnimation 1.5s ease-out forwards ${i * 0.1}s`,
                              maxWidth: `${skill.level}%`
                            }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Logiciels maîtrisés</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Microsoft Excel', 'Microsoft Word', 'Microsoft Outlook', 'Outils de gestion', 'PowerPoint', 'Google Drive', 'Outils collaboratifs', 'Systèmes CRM de base'].map((software, i) => (
                <div 
                  key={i} 
                  className="bg-gray-50 rounded-md p-3 text-center border border-gray-100 transition-all duration-300 hover:bg-blue-50 hover:border-blue-200"
                >
                  <span className="text-gray-700">{software}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;