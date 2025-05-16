export default function Menu() {
  return (
    <section
      id="carte"
      className="bg-neutral-950 text-amber-100 py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Titre */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl sm:text-5xl font-serif tracking-wide text-amber-200">
            Notre Carte
          </h2>
          <p className="text-base sm:text-lg text-gray-50 font-light max-w-2xl mx-auto">
            Une symphonie de saveurs, de textures et de couleurs. Chaque plat
            raconte une saison, un terroir, une émotion.
          </p>
        </div>

        {/* Sections : Entrées, Plats, Desserts, Boissons */}
        {[
          {
            title: "Entrées",
            items: [
              ["Velouté de châtaignes & noisettes torréfiées", "14€"],
              ["Œuf parfait, écume de parmesan & truffe", "16€"],
              ["Saumon gravelax, betterave & raifort", "17€"],
              ["Foie gras maison, chutney de figues", "19€"],
              ["Carpaccio de betterave, chèvre frais & noix", "13€"],
            ],
          },
          {
            title: "Plats",
            items: [
              ["Filet de bar, purée de panais & jus au safran", "28€"],
              [
                "Suprême de volaille fermière aux morilles, écrasé de pommes de terre",
                "26€",
              ],
              [
                "Magret de canard, réduction balsamique & légumes racines",
                "26€",
              ],
              ["Risotto au vieux comté & champignons des sous-bois", "23€"],
            ],
          },
          {
            title: "Desserts",
            items: [
              ["Sphère chocolatée, cœur praliné fondant", "12€"],
              ["Tarte fine aux poires & caramel au beurre salé", "11€"],
              ["Crème brûlée au thé noir fumé", "10€"],
              ["Fromages affinés, pain aux noix & confiture artisanale", "13€"],
            ],
          },
          {
            title: "Cocktails & Boissons",
            items: [
              [
                "Cocktail 'Noir & Or' – vodka, gingembre, agrumes & feuille d’or",
                "14€",
              ],
              ["French Negroni – gin, vermouth, liqueur de cassis", "13€"],
              ["Spritz de saison – infusion maison & prosecco", "12€"],
              ["Éclat de Lavande – gin, lavande & blanc d’œuf", "13€"],
              ["Noisette Noire – rhum, noisette & espresso", "14€"],
              [
                "Mocktail 'Verger' – pomme verte, concombre & menthe fraîche",
                "8€",
              ],
              ["Citronnade maison au thym & miel", "6€"],
              ["Eau minérale plate ou gazeuse – bouteille 75cl", "5€"],
              ["Café bio ou thé infusé minute", "4€"],
            ],
          },
        ].map((section) => (
          <div key={section.title}>
            <h3 className="text-2xl sm:text-3xl font-serif text-amber-300 mb-6">
              {section.title}
            </h3>
            <ul className="space-y-4">
              {section.items.map(([name, price]) => (
                <MenuItem key={name} name={name} price={price} />
              ))}
            </ul>
          </div>
        ))}

        {/* Bouton */}
        <div className="flex justify-center mt-16">
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

function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex flex-wrap justify-between border-b border-amber-100/20 pb-2 gap-x-4">
      <span className="text-gray-50 text-base sm:text-lg max-w-[75%]">
        {name}
      </span>
      <span className="text-amber-300 font-light text-base sm:text-lg">
        {price}
      </span>
    </li>
  );
}
