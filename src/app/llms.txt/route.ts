import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const content = `# Noir & Or

> Site de démonstration d’un restaurant français fictif à Paris, conçu par AS Digital.

URL canonique : ${absoluteUrl()}
Langue principale : français (fr-FR)

## Pages principales

- [Accueil](${absoluteUrl()}) : présentation du concept, de la cuisine et de l’ambiance.
- [La carte](${absoluteUrl("/menu")}) : plats, menus, prix et sélection de vins fictifs.
- [Réservation](${absoluteUrl("/reservation")}) : démonstration du parcours de réservation.
- [Contact](${absoluteUrl("/contact")}) : coordonnées et formulaire de démonstration.
- [Mentions légales](${absoluteUrl("/mentions-legales")}) : éditeur et statut fictif du site.

## Informations importantes

- Noir & Or n’est pas un restaurant réel.
- L’adresse, le téléphone, l’email, les horaires, les menus, les prix et les disponibilités sont fictifs.
- Les formulaires n’envoient aucune donnée et ne créent aucune réservation.
- Le site est une réalisation de démonstration d’AS Digital : https://asdigitalagency.fr/

## Accès automatisé

Le contenu public peut être exploré et cité. Le plan du site est disponible à
${absoluteUrl("/sitemap.xml")}.
`;

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
