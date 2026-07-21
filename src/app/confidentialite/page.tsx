export default function Confidentialite() {
  return (
    <main
      id="contenu"
      className="min-h-screen bg-[#191815] px-6 pb-24 pt-32 text-[#eee9df] md:px-12 md:pt-40"
    >
      <div className="mx-auto max-w-4xl space-y-12">
        <header>
          <p className="eyebrow mb-5 text-[#d0ad74]">Données personnelles</p>
          <h1 className="text-5xl leading-tight md:text-7xl">Politique de confidentialité</h1>
        </header>

        <section className="border-l-2 border-[#d0ad74] bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-2xl text-[#d0ad74]">Site de démonstration</h2>
          <p className="mt-4 leading-7 text-[#eee9df]/75">
            « Noir & Or » est un concept fictif créé par{" "}
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#d0ad74]"
            >
              AS Digital
            </a>
            , sans lien avec un restaurant réel. Les formulaires simulent une prise de contact ou
            une réservation et ne permettent pas de joindre un établissement.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">1. Informations saisies</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Dans la version actuelle, les informations saisies dans les formulaires ne sont envoyées
            à aucun restaurant et aucune réservation réelle n’est enregistrée. Elles sont utilisées
            dans le navigateur uniquement pour simuler le fonctionnement de l’interface pendant la
            session.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">2. Absence de réservation réelle</h2>
          <p className="leading-7 text-[#eee9df]/75">
            La saisie d’un nom, d’une adresse électronique ou d’un numéro de téléphone n’entraîne ni
            envoi d’un message, ni confirmation par courrier électronique, ni création d’un dossier
            client. Il est déconseillé de saisir des informations sensibles dans ces champs de
            démonstration.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">3. Données techniques</h2>
          <p className="leading-7 text-[#eee9df]/75">
            L’hébergeur peut traiter des données techniques strictement nécessaires à la fourniture
            et à la sécurité du site, telles que l’adresse IP, la date de connexion et les journaux
            techniques, conformément à ses propres conditions et obligations légales.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">4. Évolution du site</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Si une fonctionnalité réelle de collecte, d’envoi ou de conservation était activée
            ultérieurement, cette politique devrait être mise à jour avant sa mise en service afin
            de préciser le responsable du traitement, les finalités, la base légale, les
            destinataires, la durée de conservation et les droits des personnes.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">5. Contact</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Pour toute question concernant cette démonstration, utilisez les coordonnées
            professionnelles publiées sur{" "}
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#d0ad74]"
            >
              asdigitalagency.fr
            </a>
            .
          </p>
        </section>

        <p className="pt-8 text-xs text-[#eee9df]/40">Dernière mise à jour : 22 juillet 2026</p>
      </div>
    </main>
  );
}
