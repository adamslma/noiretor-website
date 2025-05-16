"use client";

import { useState } from "react";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import TiktokIcon from "./icons/TiktokIcon";

export default function SiteSidebar() {
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <>
      {/* TOPBAR */}
      <header className="fixed top-0 left-0 w-full px-6 py-4 z-40 flex justify-end">
        <button
          onClick={toggleSidebar}
          className="text-amber-200 hover:text-white transition p-2 z-50"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR GAUCHE */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-96 bg-neutral-900 text-amber-100 z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col justify-between h-full px-10 pt-6 pb-12">
          {/* Logo */}
          <div className="flex justify-center pb-6">
            <h1 className="text-amber-200 text-3xl">Noir & Or</h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center space-y-7">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Accueil
            </Link>
            <Link
              href="/#carte"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Carte
            </Link>
            <Link
              href="/#vins"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Carte des Vins
            </Link>
            <Link
              href="/reservation"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Réserver
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-white transition"
            >
              Contact
            </Link>
          </nav>

          {/* Réseaux sociaux */}
          <div className="flex justify-center gap-6 pt-10 text-amber-300">
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <TiktokIcon size={28} />
            </a>
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
