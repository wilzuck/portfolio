// =============================================================
//  TES DONNÉES — modifie ce fichier pour mettre le site à jour
// =============================================================

export const identite = {
  nom: "Wilfried ETEKA",
  initiales: "WE",
  titre: "Tech Lead · IA appliquée & architecture Cloud",
  badge: "Tech Lead chez EasyVista · Paris",
  intro:
    "Ingénieur spécialisé en IA appliquée et en architecture Cloud. Je conçois des systèmes qui intègrent des LLM, de l'architecture backend jusqu'à l'interface, et je fais tourner des agents IA sur des bases de code réelles.",
  // Mets ta photo dans le dossier public/ avec ce nom
  photo: "/photo-wilfried.jpg",
  // E-mail affiché dans les mentions légales (laisse "" pour ne pas l'afficher)
  email: "",
  rendezVous: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0cus99CqWOZ6Y4zdAxjoMpiACR1uI9PLa9JKojswfzd01O3x-rQJ55oKD0engj-XKHiPLglCic",
};

// À propos : 3 ou 4 phrases maximum, à personnaliser avec ton histoire
export const bio = [
  "Ingénieur en informatique, je travaille à la croisée de l'IA, du produit et de l'architecture logicielle.",
  "Après avoir conçu des solutions numériques pour des entreprises, des universités et des startups, notamment au Bénin, je suis aujourd'hui Tech Lead chez EasyVista, où je mets l'IA générative en production.",
  "En parallèle, je lance mes propres produits SaaS : c'est là que je teste, vite et en conditions réelles, ce que l'IA sait vraiment faire.",
];

export const reseaux = {
  github: { label: "GitHub", pseudo: "@wilzuck", url: "https://github.com/wilzuck" },
  linkedin: { label: "LinkedIn", pseudo: "eteka-wilfried", url: "https://www.linkedin.com/in/eteka-wilfried/" },
};

export const expertises = [
  { titre: "IA appliquée", texte: "Intégration de LLM en production et agents IA qui travaillent sur du code réel.", couleur: "accent", icone: "flask" },
  { titre: "Backend & Cloud", texte: "Python, conception d'architectures fiables et prêtes à monter en charge.", couleur: "mint", icone: "cloud" },
  { titre: "Frontend", texte: "Next.js et TypeScript pour des interfaces rapides et soignées.", couleur: "fuchsia", icone: "code" },
  { titre: "Leadership technique", texte: "Choix d'architecture, encadrement et exigence sur la qualité du code.", couleur: "amber", icone: "team" },
] as const;

export const produits = [
  { nom: "Melimelody", url: "https://melimelody.com", tag: "IA générative", description: "Des chansons personnalisées générées par IA, à offrir pour chaque occasion.", couleur: "fuchsia" },
  { nom: "WaMarcket", url: "https://marcket.com", tag: "E-commerce", description: "La vente via WhatsApp pour les commerçants d'Afrique de l'Ouest.", couleur: "mint" },
  { nom: "GuestConnect", url: "https://getguestconnect.com", tag: "SaaS hôtellerie", description: "La gestion des maisons d'hôtes et des réservations, simplifiée.", couleur: "accent" },
  { nom: "Crushduo", url: "https://crushduo.com", tag: "Plateforme sociale", description: "Une plateforme de rencontre en ligne, conçue et développée de A à Z.", couleur: "rose" },
] as const;

// Ajoute une expérience = copie un bloc { ... } et modifie-le
export const experiences = [
  {
    periode: "Poste actuel",
    poste: "Tech Lead · EasyVista",
    description: "Éditeur d'une plateforme ITSM. J'intègre des LLM en production et je déploie des agents IA sur des bases de code réelles.",
  },
  {
    periode: "En parallèle",
    poste: "Fondateur de produits SaaS",
    description: "Conception, développement et lancement de quatre produits, de l'idée à la mise en ligne.",
  },
];

// Formation : laisse le tableau vide [] pour masquer la section
export const formations: { periode: string; diplome: string; ecole: string }[] = [
  // { periode: "2015 – 2018", diplome: "Ton diplôme", ecole: "Ton école" },
];

// Lien vers ton CV PDF (mets le fichier dans public/) ou laisse ""
export const cvPdf = "";

export const stack = ["Python", "TypeScript", "Next.js", "LLM APIs", "Agents IA", "Cloud"];
