export default function MentionsLegales() {
  return (
    <main className="bg-neutral-900 text-gray-50 px-8 py-28 md:px-48 w-full mx-auto space-y-14">
      <h1 className="text-4xl font-serif text-amber-200">Mentions légales</h1>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">Éditeur du site</p>
        <p>
          Le site <strong>noiretor.fr</strong> est édité par :
        </p>
        <p>
          <strong>Noir & Or</strong>
          <br />
          17 Rue du Palais-Royal
          <br />
          75001 Paris, France
          <br />
          Téléphone : 01 42 00 00 00
          <br />
          Email : contact@noiretor.fr
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">Hébergement</p>
        <p>Le site est hébergé par :</p>
        <p>
          <strong>Vercel Inc.</strong>
          <br />
          440 N Barranca Ave #4133
          <br />
          Covina, CA 91723
          <br />
          États-Unis
          <br />
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-200 underline"
          >
            https://vercel.com
          </a>
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">
          Propriété intellectuelle
        </p>
        <p>
          L’ensemble du contenu présent sur le site noiretor.fr (textes, images,
          graphismes, logo, vidéos) est la propriété exclusive de Noir & Or ou
          fait l’objet d’une autorisation d’utilisation. Toute reproduction ou
          représentation totale ou partielle sans autorisation préalable est
          interdite.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">Responsabilité</p>
        <p>
          Noir & Or décline toute responsabilité en cas d’interruption du site,
          de bugs ou d’erreurs pouvant survenir, ou pour tout dommage résultant
          de l’utilisation du site.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">
          Données personnelles
        </p>
        <p>
          Pour plus d’informations sur le traitement des données personnelles,
          veuillez consulter notre&nbsp;
          <a href="/confidentialite" className="text-amber-200 underline">
            politique de confidentialité
          </a>
          .
        </p>
      </section>

      <p className="text-sm text-amber-100/60 pt-12">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>
    </main>
  );
}
