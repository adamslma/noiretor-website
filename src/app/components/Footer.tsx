"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import TiktokIcon from "./icons/TiktokIcon";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-amber-100 py-16 sm:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Infos pratiques */}
        <div className="text-center space-y-12">
          <h2 className="text-3xl sm:text-4xl font-serif tracking-wide text-amber-200">
            Informations pratiques
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-base sm:text-lg font-light text-amber-100/90 text-left max-w-4xl mx-auto">
            <div>
              <p className="text-amber-200 text-lg mb-2 font-medium">Adresse</p>
              <p className="text-gray-50">
                Noir & Or
                <br />
                17 Rue du Palais-Royal
                <br />
                75001 Paris, France
              </p>
            </div>

            <div>
              <p className="text-amber-200 text-lg mb-2 font-medium">
                Horaires
              </p>
              <p className="text-gray-50">
                Mardi – Samedi : 12h – 14h30 / 19h – 23h
                <br />
                Dimanche – Lundi : fermé
              </p>
            </div>

            <div>
              <p className="text-amber-200 text-lg mb-2 font-medium">Contact</p>
              <p className="text-gray-50">
                Tél : 01 42 00 00 00
                <br />
                Email : contact@noiretor.fr
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/reservation"
              className="inline-block bg-amber-300 text-neutral-900 px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg hover:bg-amber-400 transition"
            >
              Réserver une table
            </a>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-6 text-amber-300 text-xl">
          <a
            href="https://asdigitalagency.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Tiktok"
          >
            <TiktokIcon size={24} />
          </a>
          <a
            href="https://asdigitalagency.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://asdigitalagency.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>

        {/* Liens légaux */}
        <div className="border-t border-amber-100/20 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-amber-100/60 text-center">
          <div>
            <p className="mb-1">
              &copy; {new Date().getFullYear()} Noir & Or. Tous droits réservés.
            </p>
            <p>
              Propulsé par{" "}
              <a
                className="hover:text-amber-200 transition"
                href="https://asdigitalagency.fr/"
                aria-label="AS Digital Agency"
              >
                AS Digital Agency
              </a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cgu" className="hover:text-amber-200 transition">
              CGU
            </Link>
            <Link
              href="/mentions-legales"
              className="hover:text-amber-200 transition"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-amber-200 transition"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
