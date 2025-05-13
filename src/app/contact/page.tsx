"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, tu pourrais utiliser fetch() ou une API pour traiter le message
    setSubmitted(true);
  };

  return (
    <div className="bg-neutral-900">
      <main className="text-gray-50 px-6 py-28 md:px-12 w-full mx-auto max-w-6xl space-y-16">
        <h1 className="text-4xl font-serif text-amber-200 text-center">
          Contactez-nous
        </h1>

        <div className="grid md:grid-cols-2 gap-32">
          {/* Infos pratiques */}
          <div className="space-y-6">
            <p className="text-lg font-light text-gray-50 leading-relaxed">
              Une question, une demande particulière ou envie de réserver pour
              un évènement privé ? Laissez-nous un message, nous vous répondrons
              dans les plus brefs délais.
            </p>

            <div>
              <p className="text-amber-200 text-lg font-medium mb-1">Adresse</p>
              <p>
                Noir & Or
                <br />
                17 Rue du Palais-Royal
                <br />
                75001 Paris, France
              </p>
            </div>

            <div>
              <p className="text-amber-200 text-lg font-medium mb-1">
                Téléphone
              </p>
              <p>01 42 00 00 00</p>
            </div>

            <div>
              <p className="text-amber-200 text-lg font-medium mb-1">Email</p>
              <p>contact@noiretor.fr</p>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-sm text-amber-200">
                Nom
              </label>
              <input
                required
                id="name"
                type="text"
                className="bg-neutral-800 text-amber-100 p-3 rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm text-amber-200">
                Email
              </label>
              <input
                required
                id="email"
                type="email"
                className="bg-neutral-800 text-amber-100 p-3 rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1 text-sm text-amber-200">
                Message
              </label>
              <textarea
                required
                id="message"
                rows={5}
                className="bg-neutral-800 text-amber-100 p-3 rounded border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <button
              type="submit"
              className="bg-amber-300 text-neutral-900 px-6 py-3 rounded-full font-medium hover:bg-amber-400 transition"
            >
              Envoyer
            </button>

            {submitted && (
              <p className="text-green-400 mt-4">
                Votre message a bien été envoyé.
              </p>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
