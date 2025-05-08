import React from 'react';
import Button from '../Button';
import { ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Qui suis-je ?</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4 leading-relaxed">
              Je m'appelle Neslihan GEDIK, j'ai 25 ans, et aujourd'hui, je suis étudiante en Bachelor Chargée de Gestion et de Management. 
              Avant d'en arriver là, j'ai exploré plusieurs voies. Comme beaucoup, j'ai parfois été un peu perdue : je ne savais pas exactement 
              ce qui me correspondait, ni dans quel domaine je pourrais vraiment m'épanouir. Ces détours, même s'ils n'étaient pas toujours 
              faciles, m'ont permis de mieux me connaître, de gagner en maturité et de comprendre ce que je voulais vraiment.
            </p>
            
            <p className="text-gray-600 mb-4 leading-relaxed">
              C'est finalement dans la gestion et la finance que j'ai trouvé ma voie. J'aime organiser, suivre, contrôler, faire en sorte que 
              tout soit bien structuré. Ce que certains trouvent rébarbatif, moi, ça me rassure : les chiffres, les tableaux, les analyses, 
              ça me parle. Je me sens utile quand je peux contribuer à améliorer la gestion d'une entreprise, à suivre les budgets, à optimiser 
              les ressources.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Je suis quelqu'un de calme, parfois un peu réservée au début, mais toujours souriante et bienveillante. J'aime travailler 
              sérieusement, aller jusqu'au bout de mes tâches, et je prends à cœur de bien faire les choses. Je suis aussi motivée, 
              honnêtement, par la stabilité financière et par l'idée de faire un métier reconnu, qui a du sens et de l'impact. Aujourd'hui, 
              je me projette sereinement vers des postes comme celui de contrôleur de gestion, car c'est un rôle central, à la croisée de la 
              stratégie, de l'analyse et du pilotage.
            </p>
          </div>
          
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-100 rounded-md p-4 flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Organisée</h3>
                <p className="text-sm text-gray-600">J'aime structurer et optimiser les processus</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 rounded-md p-4 flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <line x1="12" x2="12" y1="2" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Rigoureuse</h3>
                <p className="text-sm text-gray-600">Je m'assure que tout soit bien fait</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 rounded-md p-4 flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Bienveillante</h3>
                <p className="text-sm text-gray-600">Je favorise un climat positif avec mes collègues</p>
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 rounded-md p-4 flex items-center">
              <div className="bg-blue-100 rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Motivée</h3>
                <p className="text-sm text-gray-600">Je recherche un métier reconnu et impactant</p>
              </div>
            </div>
          </div>

          {/* Section Test de Personnalité */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">Mon Test de Personnalité</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-10"></div>

            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">INFJ - L'Avocat</h3>
              <blockquote className="border-l-4 border-blue-500 pl-4 mb-6 italic text-gray-600">
                « Traitez les gens comme s'ils étaient ce qu'ils devraient être, vous les aiderez à devenir ce qu'ils peuvent être. »
                <footer className="mt-2 text-sm text-gray-500">- Johann Wolfgang Von Goethe</footer>
              </blockquote>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Les Avocats (INFJ) sont des visionnaires discrets, souvent des idéalistes infatigables qui suscitent l'inspiration. 
                Idéalistes et dotés de principes, ils ne se contentent pas d'avancer dans la vie – ils veulent se tenir debout et faire la différence. 
                Pour ces personnalités, le succès ne vient pas de l'argent ou du statut mais de la recherche de l'épanouissement, 
                de l'aide aux autres et de la volonté de faire le bien dans le monde.
              </p>

              <p className="text-gray-600 mb-8 leading-relaxed">
                Bien qu'ils affichent des objectifs et des ambitions élevés, les Avocats ne sont pas des rêveurs oisifs. 
                Ils se soucient de l'intégrité et sont rarement satisfaits avant d'avoir fait ce qu'ils savent être juste. 
                Consciencieux jusqu'au bout des ongles, ils avancent dans la vie avec un sens clair de leurs valeurs, 
                et cherchent à ne jamais perdre de vue ce qui compte vraiment.
              </p>

              <div className="flex justify-center">
                <Button
                  variant="primary"
                  size="lg"
                  icon={<ExternalLink size={18} />}
                  href="https://www.16personalities.com/fr/la-personnalite-infj"
                  className="mt-4"
                >
                  En savoir plus sur le type INFJ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;