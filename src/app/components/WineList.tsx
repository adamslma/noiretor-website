"use client";

export default function WineList() {
  return (
    <section
      id="vins"
      className="h-full py-20 sm:py-0 md:h-screen w-full bg-neutral-900 text-amber-100 flex overflow-hidden"
    >
      {/* Vidéo à gauche */}
      <div className="w-1/3 h-full relative hidden lg:block">
        <video
          className="w-full h-full object-cover object-[70%_center]"
          src="/wine.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Zone droite */}
      <div className="w-full lg:w-2/3 h-full px-6 md:px-12 py-8 md:py-16 flex flex-col items-center justify-center">
        {/* Titre + description */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-amber-200">Carte des Vins</h2>
          <p className="text-gray-50 text-lg mt-4 font-light max-w-xl mx-auto">
            Une sélection rigoureuse de crus d’exception, pour accompagner
            chaque mets.
          </p>
        </div>

        {/* Liste des vins centrée */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-3xl ">
          <WineItem
            name="Château Margaux – 2015"
            type="Bordeaux rouge"
            price="240€"
          />
          <WineItem
            name="Meursault – Domaine Coche-Dury"
            type="Bourgogne blanc"
            price="195€"
          />
          <WineItem
            name="Châteauneuf-du-Pape – 2020"
            type="Vallée du Rhône"
            price="95€"
          />
          <WineItem
            name="Sancerre – Domaine Vacheron"
            type="Loire blanc"
            price="68€"
          />
          <WineItem
            name="Champagne Bollinger Spécial Cuvée"
            type="Brut"
            price="110€"
          />
          <WineItem
            name="Pomerol – Clos l’Eglise 2012"
            type="Bordeaux rouge"
            price="130€"
          />
          <WineItem
            name="Pouilly-Fumé – Domaine Didier Dagueneau"
            type="Loire blanc"
            price="88€"
          />
          <WineItem
            name="Saint-Émilion Grand Cru – 2014"
            type="Bordeaux rouge"
            price="120€"
          />
          <WineItem
            name="Chablis – Premier Cru Montée de Tonnerre"
            type="Bourgogne blanc"
            price="76€"
          />
          <WineItem
            name="Corton-Charlemagne – Grand Cru"
            type="Bourgogne blanc"
            price="160€"
          />
        </div>
        <div className="mt-16">
          <a
            href="/reservation"
            className="inline-block bg-amber-300 text-neutral-900 px-8 py-3 rounded-full text-lg hover:bg-amber-400 transition"
          >
            Réserver une table
          </a>
        </div>
      </div>
    </section>
  );
}

function WineItem({
  name,
  type,
  price,
}: {
  name: string;
  type: string;
  price: string;
}) {
  return (
    <div className="flex flex-col border-b border-amber-100/20 pb-4 text-base sm:text-lg">
      <div className="flex justify-between">
        <span className="font-medium text-amber-200">{name}</span>
        <span className="text-amber-300 font-light">{price}</span>
      </div>
      <span className="text-sm text-amber-100/70 italic">{type}</span>
    </div>
  );
}
