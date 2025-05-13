export default function CGU() {
  return (
    <main className="bg-neutral-900 text-gray-50 px-6 py-24 md:px-48 w-full mx-auto space-y-10">
      <div></div>
      <h1 className="text-4xl font-serif text-amber-200">
        Conditions Générales d’Utilisation
      </h1>

      <section className="space-y-4 ">
        <p className="text-2xl text-amber-300 font-medium">1. Présentation</p>
        <p>
          Le présent site web est édité par Noir & Or, restaurant gastronomique
          situé au 17 Rue du Palais-Royal, 75001 Paris.
        </p>
        <p>
          L’accès et l’utilisation du site <strong>noiretor.fr</strong> sont
          soumis aux présentes conditions générales d’utilisation (CGU). En
          naviguant sur le site, vous acceptez ces conditions sans réserve.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">2. Réservations</p>
        <p>
          Le site permet aux utilisateurs de consulter la carte du restaurant,
          les horaires d’ouverture et d’effectuer des réservations. Toute
          réservation effectuée en ligne est considérée comme une demande, qui
          sera confirmée par email ou téléphone.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">
          3. Propriété intellectuelle
        </p>
        <p>
          Tous les éléments du site (textes, images, vidéos, graphismes, logo,
          nom commercial) sont la propriété exclusive de Noir & Or ou de ses
          partenaires, et sont protégés par le droit d’auteur. Toute
          reproduction ou utilisation non autorisée est strictement interdite.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">
          4. Données personnelles
        </p>
        <p>
          Les données collectées via le formulaire de réservation ou de contact
          sont traitées conformément à notre
          <a href="/confidentialite" className="text-amber-200 underline ml-1">
            Politique de confidentialité
          </a>
          .
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">
          5. Responsabilités
        </p>
        <p>
          Noir & Or s’efforce de fournir sur le site des informations aussi
          précises que possible. Toutefois, il ne pourra être tenu responsable
          des omissions, inexactitudes ou carences dans la mise à jour.
        </p>
        <p>
          L'utilisateur s'engage à accéder au site avec un matériel récent, ne
          contenant pas de virus, et avec un navigateur mis à jour.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-2xl text-amber-300 font-medium">
          6. Droit applicable
        </p>
        <p>
          Les présentes CGU sont régies par le droit français. Tout litige
          relatif à l’utilisation du site sera soumis à la compétence exclusive
          des tribunaux français.
        </p>
      </section>

      <p className="text-sm text-amber-100/60 pt-12">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
      </p>
    </main>
  );
}
