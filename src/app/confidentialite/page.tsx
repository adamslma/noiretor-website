export default function Confidentialite() {
    return (
      <main className="bg-neutral-900 text-gray-50 px-8 py-28 md:px-48 w-full mx-auto space-y-14">
        <h1 className="text-4xl font-serif text-amber-200">Politique de confidentialité</h1>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">1. Données collectées</h2>
          <p>
            Lors de votre navigation sur le site <strong>noiretor.fr</strong>, nous pouvons être amenés à collecter des données personnelles
            telles que votre nom, votre adresse e-mail, votre numéro de téléphone ou des informations liées à une réservation.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">2. Finalités du traitement</h2>
          <p>
            Ces données sont collectées dans le but de :
          </p>
          <ul className="list-disc list-inside text-gray-50">
            <li>répondre à vos demandes via le formulaire de contact,</li>
            <li>gérer vos réservations de table,</li>
            <li>vous envoyer une confirmation ou un rappel de réservation,</li>
            <li>améliorer notre service et votre expérience utilisateur.</li>
          </ul>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">3. Conservation des données</h2>
          <p>
            Vos données sont conservées uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées,
            et ne sont en aucun cas revendues à des tiers.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">4. Partage des données</h2>
          <p>
            Vos données peuvent être partagées uniquement avec les prestataires techniques impliqués dans le fonctionnement
            du site (hébergement, e-mails) et uniquement dans ce cadre. Ces prestataires sont soumis à des obligations de confidentialité strictes.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">5. Vos droits</h2>
          <p>
            Conformément à la législation en vigueur, vous disposez d’un droit d’accès, de rectification, de suppression,
            de limitation ou d’opposition au traitement de vos données personnelles. Pour exercer ces droits, contactez-nous à :
          </p>
          <p className="text-amber-200">
            contact@noiretor.fr
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">6. Cookies</h2>
          <p>
            Le site peut utiliser des cookies à des fins de statistiques ou d’amélioration de l’expérience utilisateur.
            Vous pouvez configurer votre navigateur pour bloquer ces cookies ou être averti de leur utilisation.
          </p>
        </section>
  
        <section className="space-y-4">
          <h2 className="text-2xl text-amber-300 font-medium">7. Hébergement</h2>
          <p>
            Le site est hébergé par&nbsp;
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-200 underline"
            >
              Vercel Inc.
            </a>
            , aux États-Unis. Les données peuvent donc être amenées à transiter hors de l’Union européenne,
            mais sont encadrées contractuellement pour garantir leur protection conformément au RGPD.
          </p>
        </section>
  
        <p className="text-sm text-amber-100/60 pt-12">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>
      </main>
    );
  }
  