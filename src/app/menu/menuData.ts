type MenuItem = {
  name: string;
  price: number;
};

type MenuSection = {
  number: string;
  title: string;
  note: string;
  items: readonly MenuItem[];
};

type Wine = {
  name: string;
  price: string;
};

export const MENU_SECTIONS = [
  {
    number: "01",
    title: "Pour commencer",
    note: "Quelques assiettes qui ouvrent l’appétit.",
    items: [
      { name: "Poireau grillé, vinaigrette de coquillages, livèche", price: 16 },
      { name: "Œuf de plein air, morilles, pain fumé", price: 19 },
      { name: "Truite des Pyrénées, betterave, raifort frais", price: 21 },
      { name: "Foie gras de canard, rhubarbe, brioche au levain", price: 24 },
    ],
  },
  {
    number: "02",
    title: "La suite",
    note: "Pêche du jour, viandes françaises et légumes de saison.",
    items: [
      { name: "Lieu jaune, petits pois, laitue braisée, sauce vin jaune", price: 34 },
      { name: "Volaille jaune, asperge blanche, ail des ours", price: 36 },
      { name: "Canard de Challans, navet nouveau, jus au poivre", price: 39 },
      { name: "Artichaut poivrade, épeautre, vieux comté", price: 29 },
    ],
  },
  {
    number: "03",
    title: "Pour finir",
    note: "Desserts peu sucrés, fromages bien affinés.",
    items: [
      { name: "Fraise, oseille, crème crue", price: 14 },
      { name: "Chocolat noir, sarrasin, glace au foin", price: 15 },
      { name: "Soufflé au citron, praliné amande", price: 16 },
      { name: "Fromages de la maison Quatrehomme", price: 17 },
    ],
  },
] as const satisfies readonly MenuSection[];

export const WINES = [
  { name: "Champagne · A. Bergère, Origine", price: "17 / 92" },
  { name: "Loire · Vacheron, Sancerre 2023", price: "14 / 68" },
  { name: "Bourgogne · P. Pillot, Bourgogne blanc 2022", price: "16 / 79" },
  { name: "Rhône · Gramenon, Sierra du Sud 2022", price: "13 / 64" },
  { name: "Bordeaux · Château Marsau 2019", price: "15 / 74" },
] as const satisfies readonly Wine[];
