"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "La maison" },
  { href: "/menu", label: "La carte" },
  { href: "/reservation", label: "Réserver" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/15 bg-[#191815]/90 text-[#f7f3ea] backdrop-blur-md">
      <div className="site-container flex h-[4.75rem] items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-[-0.04em]" aria-label="Noir et Or, accueil">
          Noir <span className="text-[#d0ad74]">&</span> Or
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Navigation principale">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} aria-current={active ? "page" : undefined}
                className={`relative py-2 text-xs font-semibold uppercase tracking-[0.16em] ${active ? "text-[#d0ad74]" : "text-[#f7f3ea]/75 hover:text-[#f7f3ea]"}`}>
                {link.label}
                {active && <span className="absolute inset-x-0 -bottom-[1.05rem] h-px bg-[#d0ad74]" />}
              </Link>
            );
          })}
        </nav>

        <Link href="/reservation" className="hidden border border-[#d0ad74]/70 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.15em] hover:bg-[#d0ad74] hover:text-[#191815] md:inline-flex">
          Une table
        </Link>

        <button type="button" onClick={() => setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
          <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div id="mobile-menu" className={`overflow-hidden bg-[#191815] transition-[max-height] duration-300 md:hidden ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="site-container flex flex-col border-t border-white/10 py-5" aria-label="Navigation mobile">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={pathname === link.href ? "page" : undefined}
              className={`flex items-baseline justify-between border-b border-white/10 py-4 font-serif text-2xl ${pathname === link.href ? "text-[#d0ad74]" : ""}`}>
              {link.label}<span className="font-sans text-[0.65rem] text-white/35">0{index + 1}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
