export default function ContactCTA() {
    return (
      <section className="bg-neutral-900 text-amber-100 py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-amber-200">
            Une demande particulière ?
          </h2>
          <p className="text-base sm:text-lg text-amber-100/90 font-light leading-relaxed">
            Pour toute question, privatisation ou événement sur mesure, n’hésitez pas à nous contacter directement.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-300 text-neutral-900 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg font-medium hover:bg-amber-400 transition"
          >
            Nous écrire
          </a>
        </div>
      </section>
    );
  }
  