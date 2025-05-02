import React from 'react';

type EducationItem = {
  period: string;
  degree: string;
  school: string;
  details?: string;
  current?: boolean;
};

const educationData: EducationItem[] = [
  {
    period: '2024',
    degree: 'Bachelor Chargé(e) de Gestion et de Management',
    school: 'École ESMG',
    current: true,
    details: 'Formation axée sur le management, le pilotage de l\'activité, les RH et la gestion financière'
  },
  {
    period: '2022 – 2024',
    degree: 'BTS Gestion de la PME (GPME) – en alternance',
    school: 'École ESMG',
    details: 'Formation professionnalisante mêlant cours théoriques et immersion en entreprise'
  },
  {
    period: '2021 – 2022',
    degree: 'DU ACCESS',
    school: 'Université de Strasbourg',
    details: 'Diplôme Universitaire d\'Accompagnement à la Construction de son parcours dans l\'Enseignement Supérieur - pôle gestion'
  },
  {
    period: '2019 – 2020',
    degree: 'Première année d\'école d\'infirmière (IFSI)',
    school: 'IFSI de la robertsau',
    details: 'Cette année m\'a confortée dans l\'idée que je souhaitais me réorienter, mais m\'a aussi appris à travailler en équipe dans un environnement exigeant'
  },
  {
    period: '2018 – 2019',
    degree: 'BTS Métiers de la Coiffure (non terminé)',
    school: 'Lycée jean Geiler',
    details: 'Mal orientée vers cette voie, j\'y ai tout de même découvert l\'univers de la gestion d\'un salon et la relation client'
  },
  {
    period: '2018',
    degree: 'Bac Professionnel Bio-industries de transformation',
    school: 'Lycée Aristide Briand',
    details: 'Formation axée sur les procédés de transformation, les normes d\'hygiène et de sécurité, et les bases scientifiques appliquées à l\'industrie agroalimentaire et chimique'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Mes diplômes et formation</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Timeline items */}
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 md:translate-y-6 z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    item.current ? 'bg-blue-500 border-blue-300 ring-4 ring-blue-100' : 'bg-white border-blue-500'
                  }`}></div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pl-8 md:text-left' : 'md:pr-8 md:text-right'
                }`}>
                  <div 
                    className={`bg-white p-5 rounded-lg shadow-md border-l-4 ${
                      item.current ? 'border-blue-500' : 'border-gray-300'
                    } transform transition-transform duration-300 hover:scale-105 mx-auto md:mx-0 max-w-md md:max-w-none`}
                  >
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full mb-2">
                      {item.period}
                    </span>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">{item.degree}</h3>
                    <p className="text-gray-600">{item.school}</p>
                    {item.details && <p className="text-sm text-gray-500 mt-2">{item.details}</p>}
                    {item.current && <div className="mt-2 text-blue-500 text-sm font-semibold">En cours</div>}
                  </div>
                </div>
                
                {/* Empty space for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;