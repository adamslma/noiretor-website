export default function ContactCTA() {
    return (
      <section className="bg-neutral-900 text-amber-100 py-24 px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif text-amber-200">
            Une demande particulière ?
          </h2>
          <p className="text-lg text-amber-100/90 font-light">
            Pour toute question, privatisation ou événement sur mesure,<br className="hidden md:block" />
            n’hésitez pas à nous contacter directement.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-300 text-neutral-900 px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-400 transition"
          >
            Nous écrire
          </a>
        </div>
      </section>
    );
  }
  