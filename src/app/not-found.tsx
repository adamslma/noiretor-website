import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenu" className="flex min-h-[75dvh] items-center bg-[#eee9df] px-4 pb-20 pt-32 md:px-10">
      <div className="mx-auto w-full max-w-[86rem]">
        <p className="eyebrow text-[#a7793d]">Erreur 404</p>
        <h1 className="mt-5 max-w-4xl text-6xl leading-[.95] md:text-8xl">Cette table n’existe pas.</h1>
        <p className="mt-7 max-w-md leading-7 text-[#5e594f]">La page demandée a quitté la carte. Revenez à l’accueil ou découvrez le menu du moment.</p>
        <div className="mt-9 flex flex-wrap gap-3"><Link href="/" className="button-primary">Retour à l’accueil</Link><Link href="/menu" className="button-line">Voir la carte</Link></div>
      </div>
    </main>
  );
}
