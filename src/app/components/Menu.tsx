export default function Menu() {
  return (
    <section
      id="carte"
      className="bg-neutral-950 text-amber-100 py-48 px-6 md:px-24"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Titre */}
        <div
          className="text-center space-y-8
          "
        >
          <h2 className="text-5xl font-serif tracking-wide text-amber-200">
            Notre Carte
          </h2>
          <p className="text-lg text-gray-50 font-light">
            Une symphonie de saveurs, de textures et de couleurs. Chaque plat
            raconte une saison, un terroir, une émotion.
          </p>
        </div>

        {/* Entrées */}
        <div>
          <h3 className="text-3xl font-serif text-amber-300 mb-6">Entrées</h3>
          <ul className="space-y-6">
            <MenuItem
              name="Velouté de châtaignes & noisettes torréfiées"
              price="14€"
            />
            <MenuItem
              name="Œuf parfait, écume de parmesan & truffe"
              price="16€"
            />
            <MenuItem name="Saumon gravelax, betterave & raifort" price="17€" />
            <MenuItem name="Foie gras maison, chutney de figues" price="19€" />
            <MenuItem
              name="Carpaccio de betterave, chèvre frais & noix"
              price="13€"
            />
          </ul>
        </div>

        {/* Plats */}
        <div>
          <h3 className="text-3xl font-serif text-amber-300 mb-6">Plats</h3>
          <ul className="space-y-6">
            <MenuItem
              name="Filet de bar, purée de panais & jus au safran"
              price="28€"
            />
            <MenuItem
              name="Suprême de volaille fermière aux morilles, écrasé de pommes de terre"
              price="26€"
            />
            <MenuItem
              name="Magret de canard, réduction balsamique & légumes racines"
              price="26€"
            />
            <MenuItem
              name="Risotto au vieux comté & champignons des sous-bois"
              price="23€"
            />
          </ul>
        </div>

        {/* Desserts */}
        <div>
          <h3 className="text-3xl font-serif text-amber-300 mb-6">Desserts</h3>
          <ul className="space-y-6">
            <MenuItem
              name="Sphère chocolatée, cœur praliné fondant"
              price="12€"
            />
            <MenuItem
              name="Tarte fine aux poires & caramel au beurre salé"
              price="11€"
            />
            <MenuItem name="Crème brûlée au thé noir fumé" price="10€" />
            <MenuItem
              name="Fromages affinés, pain aux noix & confiture artisanale"
              price="13€"
            />
          </ul>
        </div>

        {/* Boissons */}
        <div>
          <h3 className="text-3xl font-serif text-amber-300 mb-6">
            Cocktails & Boissons
          </h3>
          <ul className="space-y-6">
            <MenuItem
              name="Cocktail 'Noir & Or' – vodka, gingembre, agrumes & feuille d’or"
              price="14€"
            />
            <MenuItem
              name="French Negroni – gin, vermouth, liqueur de cassis"
              price="13€"
            />
            <MenuItem
              name="Spritz de saison – infusion maison & prosecco"
              price="12€"
            />
            <MenuItem
              name="Éclat de Lavande – gin, lavande & blanc d’œuf"
              price="13€"
            />
            <MenuItem
              name="Noisette Noire – rhum, noisette & espresso"
              price="14€"
            />
            <MenuItem
              name="Mocktail 'Verger' – pomme verte, concombre & menthe fraîche"
              price="8€"
            />
            <MenuItem name="Citronnade maison au thym & miel" price="6€" />
            <MenuItem
              name="Eau minérale plate ou gazeuse – bouteille 75cl"
              price="5€"
            />
            <MenuItem name="Café bio ou thé infusé minute" price="4€" />
          </ul>
        </div>
        <div className=" flex justify-center mt-16">
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

// Sous-composant MenuItem
function MenuItem({ name, price }: { name: string; price: string }) {
  return (
    <li className="flex justify-between border-b border-amber-100/20 pb-2">
      <span className="text-left text-gray-50">{name}</span>
      <span className="text-right text-amber-300 font-light">{price}</span>
    </li>
  );
}
