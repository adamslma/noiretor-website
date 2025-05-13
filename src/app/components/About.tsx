export default function About() {
  return (
    <section className="relative bg-neutral-900 text-amber-100 py-32 px-6 md:px-24">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-8">
          <h2 className="text-5xl font-serif tracking-wide text-amber-200">
            L’Art de Recevoir à la Française
          </h2>
          <p className="text-lg leading-relaxed text-gray-50 font-light">
            Fondé sur une vision claire et audacieuse, <span className="text-amber-200 font-medium">Noir & Or</span> est né du désir d’offrir une expérience gastronomique
            qui allie l’élégance du cadre, l’authenticité du goût et la précision du geste.
          </p>
          <p className="text-lg leading-relaxed text-gray-50 font-light">
            Chaque élément de notre maison a été pensé comme une lettre d’amour à la cuisine française :
            un hommage aux produits du terroir, aux saisons, et aux gestes des grands maîtres.
            Ici, les saveurs se révèlent avec justesse, le service s’efface avec élégance, et le temps semble suspendu.
          </p>
          <p className="text-lg leading-relaxed text-gray-50 font-light">
            Dans l’intimité de notre salle feutrée, éclairée par des touches d’or, nous vous invitons à vivre un moment rare,
            où l’émotion du goût se mêle à la chaleur de l’accueil.
          </p>
        </div>

        <blockquote className="italic text-amber-200 text-xl font-light border-l-4 border-amber-500 pl-4">
          "Notre ambition n’est pas de surprendre, mais de toucher. Par la sincérité d’un plat, par la justesse d’un détail, par la mémoire d’un goût oublié."
        </blockquote>

        <p className="text-sm text-amber-100/60">
          — L’équipe Noir & Or
        </p>
      </div>
    </section>
  );
}
