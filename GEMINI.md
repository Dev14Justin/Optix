Règles de convention – Projet Optix (Frontend React + Vite + TailwindCSS)
Contexte du projet
Cahier des charges – Optix

🎯 Présentation du projet
Optix est une entreprise spécialisée dans la conception de solutions technologiques optimisées avec la Data. Le site web servira de vitrine interactive pour présenter :

Les services de l’entreprise (applications web et mobiles, SaaS, IA, automatisation).

Les valeurs fondamentales : Respect, Éthique, Responsabilité.

Les insights et analyses issues de la Data pour orienter la prise de décision.

Le site sera 100 % frontend, dynamique, moderne, interactif et avec des animations fluides pour renforcer l’expérience utilisateur.

🛑 Objectifs principaux

Créer une plateforme moderne, professionnelle et captivante qui reflète l’identité d’Optix.

Mettre en valeur les services et les valeurs de l’entreprise.

Offrir une navigation fluide, responsive et interactive, avec des animations modernes.

Assurer une expérience utilisateur engageante sur desktop et mobile.

Fonctionnalités principales

Page d’accueil attractive et animée avec présentation des services et des valeurs.

Pages détaillées pour chaque service : développement web, mobile, SaaS, IA, automatisation.

Page “Qui sommes-nous ?” pour présenter Optix, ses valeurs et son approche.

Page “Contact” avec formulaire de contact frontend (envoi via email ou intégration service tiers type Formspree).

Sections interactives pour présenter les insights et analyses de Data.

Composants réutilisables et animés (cards, boutons, badges, sliders…).

Effets visuels modernes : hover, transitions, animations de scroll, reveal animations.

Responsive design (mobile-first) et adapté aux tablettes et ordinateurs.

Architecture technique
🏗️ Stack technique

Frontend : React 18 + Vite

UI/UX : TailwindCSS

Couleurs principales : Bleu #0c00ff (primaire), Jaune #fee100 (accent)

Composants interactifs : Framer Motion pour animations avancées

Graphiques et visualisations : Recharts ou Chart.js (mocked data)

Gestion état global : React Context API

Déploiement : Vercel

📂 Structure recommandée du projet
optix-website/
│── src/
│   ├── assets/          # images, logos, icônes
│   ├── components/      # composants UI réutilisables
│   │   ├── cards/
│   │   ├── buttons/
│   │   ├── navbar/
│   │   ├── footer/
│   │   └── animations/
│   ├── pages/           # pages principales
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── Projet.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── layouts/         # templates génériques (Header/Footer layout)
│   ├── context/         # ThemeContext, ModalContext, etc.
│   ├── hooks/           # custom hooks (useTheme, useModal, useScrollReveal)
│   ├── utils/           # helpers (formatage dates, animations, couleurs)
│   └── main.jsx         # point d’entrée React
│
│── tailwind.config.js
│── vite.config.js
│── package.json

✨ Style et conventions de code
Paradigme de développement

Fonctionnel et déclaratif : uniquement des composants fonctionnels React.

Pas de classes CSS, tout se fait avec TailwindCSS et Framer Motion pour animations.

Nommage

kebab-case → noms de dossiers et fichiers

camelCase → variables et fonctions

PascalCase → composants React (Ex : ServiceCard, AnimatedButton)

Composants React

Export principal pour chaque composant.

Sous-composants internes à un composant dans le même fichier si nécessaire.

Logique réutilisable et helpers dans utils/.

UI & UX

TailwindCSS mobile-first, responsive et moderne.

Framer Motion pour transitions, hover effects, scroll reveal.

Navigation fluide : Navbar sticky, Footer clair, layout cohérent.

Graphiques et sections dynamiques avec animations.

🎨 Design et style
Palette de couleurs

Primaire : Bleu #0c00ff → boutons, liens, éléments principaux

Accent : Jaune #fee100 → highlights, badges, CTA

Fond principal : #FFFFFF

Texte principal : #1C1C1C

Texte secondaire : #6B7280

Typographie

Police principale : Inter ou Urbanist

Titres : text-3xl, text-4xl, font-bold

Texte corps : text-base, font-medium

Boutons

Rounded-xl, padding px-6 py-3

Hover effect avec transition (duration-200)

Couleur primaire en fond, texte blanc ou noir selon contraste

Layout

max-w-7xl mx-auto pour le conteneur principal

Grilles pour sections : md:grid-cols-2, lg:grid-cols-3

Espacements : py-6, py-12, lg:py-16 / px-4, md:px-8

⚡ Bonnes pratiques

Composants réutilisables et purs.

Lazy loading pour composants lourds (ex : charts, carrousels).

Utiliser WebP pour les images et lazy loading.

Animations avec Framer Motion pour fluidité et modernité.

Respect des couleurs et typographies définies pour cohérence visuelle.

Commenter le code pour clarté et maintenance.

📌 Résultats attendus

À la fin du développement, le site Optix doit offrir :

Une page d’accueil interactive présentant l’entreprise, ses services et ses valeurs.

Des pages détaillées pour chaque service, avec illustrations et animations.

Une page “Qui sommes-nous ?” présentant la mission, la vision et les valeurs.

Une page “Contact” fonctionnelle et dynamique.

Navigation fluide et responsive sur toutes les tailles d’écran.

Composants interactifs et animations modernes (scroll reveal, hover, transitions).