import React from 'react';
import { Briefcase, Package, FileText, Stethoscope } from 'lucide-react';

type ExperienceCategory = {
  title: string;
  icon: React.ReactNode;
  color: string;
  experiences: string[];
  company: string;
};

const experienceData: ExperienceCategory[] = [
  {
    title: 'Expériences en milieu industriel',
    icon: <Package size={24} />,
    color: 'bg-indigo-100 text-indigo-600',
    company: 'Dr. Oetker, Auchan, Europe Labo',
    experiences: [
      'Conditionnement des produits sur ligne (mise en barquette, étiquetage, emballage)',
      'Contrôle visuel de la qualité des produits',
      'Respect strict des normes d\'hygiène et de sécurité (HACCP)',
      'Travail en cadence avec respect des délais',
      'Participation à la mise en rayon (Auchan – boulangerie)',
      'Nettoyage et désinfection des postes de travail'
    ]
  },
  {
    title: 'Expériences administratives',
    icon: <FileText size={24} />,
    color: 'bg-blue-100 text-blue-600',
    company: 'FK TP, GEMPRO, BÂTI GP EST',
    experiences: [
      'Rédaction et envoi de mails professionnels',
      'Accueil téléphonique des clients et fournisseurs',
      'Classement et archivage de documents administratifs',
      'Saisie et suivi de factures (clients et fournisseurs)',
      'Préparation de devis et transmission aux clients',
      'Utilisation de logiciels bureautiques (Word, Excel, Outlook)',
      'Suivi de tableaux de gestion ou de plannings'
    ]
  },
  {
    title: 'Expérience en soins infirmiers',
    icon: <Stethoscope size={24} />,
    color: 'bg-pink-100 text-pink-600',
    company: 'Hôpital de Hautepierre & EHPAD',
    experiences: [
      'Aide aux soins d\'hygiène et de confort (toilette, habillage, aide au repas)',
      'Distribution de médicaments sous supervision',
      'Surveillance des constantes vitales (tension, température, etc.)',
      'Accompagnement des patients dans les gestes du quotidien',
      'Aide à la mobilité et aux transferts (lit/fauteuil)',
      'Transmission des observations à l\'équipe soignante',
      'Application des protocoles d\'hygiène et de sécurité'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Mes expériences professionnelles</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 before:ml-[6.5px] sm:before:ml-[26px] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-blue-600 after:border-2 after:box-content after:border-gray-50 after:rounded-full after:ml-[1.5px] sm:after:ml-[19px] after:-translate-x-1/2 after:translate-y-1.5">
              <Briefcase className="shrink-0 sm:mr-8 text-blue-500 sm:ml-2" size={32} />
              <div>
                <div className="font-bold text-gray-800 text-xl mb-2">Parcours professionnel diversifié</div>
                <time className="text-gray-500 text-sm">Des expériences variées qui m'ont permis de développer des compétences complémentaires</time>
              </div>
            </div>
          </div>
          
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {experienceData.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-5px] border border-gray-100"
              >
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center p-3 rounded-full ${category.color} mb-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{category.company}</p>
                  <ul className="space-y-2">
                    {category.experiences.map((exp, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          className="w-4 h-4 text-blue-500 mt-1 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span className="text-gray-600">{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;