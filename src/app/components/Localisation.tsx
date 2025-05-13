'use client';

export default function Localisation() {
  return (
    <section className="bg-neutral-900 text-amber-100 py-60 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* Bloc texte */}
        <div className="space-y-6">
          <h2 className="text-4xl font-serif tracking-wide text-amber-200">
            Notre emplacement
          </h2>
          <p className="text-lg text-gray-50 leading-relaxed font-light">
            Le restaurant Noir & Or est situé au cœur du 1er arrondissement de Paris,
            à deux pas du Palais-Royal. Un cadre raffiné, calme et chargé d’histoire,
            idéal pour savourer une cuisine française d’exception dans une atmosphère
            élégante et intime.
          </p>
          <p className="text-sm text-amber-100/60">
            17 Rue du Palais-Royal, 75001 Paris
          </p>
        </div>

        {/* Carte Google Maps */}
        <div className="rounded-lg overflow-hidden shadow-lg border border-amber-100/10">
          <iframe
            title="Localisation Noir & Or"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.891197354598!2d2.3345481156740785!3d48.86471647928861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2961d0e139%3A0x541cb2e801d3e8fc!2sPalais-Royal%2C%2075001%20Paris!5e0!3m2!1sfr!2sfr!4v1683567340798!5m2!1sfr!2sfr"
            width="100%"
            height="350"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
