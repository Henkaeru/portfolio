export const GITHUB_USERNAME = ''; // Github Username to retrieve project from
export const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; // Optional: Add a GitHub token or leave empty

export const CSS_COLORS = {
  main: '#2E2E2E',           // lighter VSCode side panel background
  secondary: '#232323',      // lighter VSCode dark editor background
  tertiary: '#3A3A3A',       // lighter VSCode separator lines
  text: '#E0E0E0',           // lighter VSCode main text
  highlight: '#3399FF',      // brighter blue highlight (instead of purple)
  highlightText: '#FFFFFF',  // keep white for max contrast on highlights
  invertIcon: true,          // keep as is
};

export const LOGO = 'logo.webp';

export const EMPTY_FILE = 'Empty.md';

export const EASTER_EGG_LINK = 'https://openhtml5games.github.io/games-mirror/dist/mariohtml5/main.html'

export const LOCAL_FOLDER = 'local';

export const LOCAL_FILES = [
  'aboutMe.md',
  'contact.md',
  'resume.link',
  {'projects': [
    {"Réaliser un développement d'application": [
      "Implémentation d'un besoin client.md"
      ]
    },
    {"Optimiser des applications informatiques": [
      "Comparaison d'approches algorithmiques.md"
      ]
    },
    {"Administrer des systèmes informatiques communicants complexes": [
      "Installation d'un poste pour le développement.md"
      ]
    },
    {"Gérer des données de l'information": [
      "Création d'une base de données.md"
      ]
    },
    {"Conduite de projet": [
      "Recueil de besoins.md"
      ]
    },
    {"Travailler dans une équipe informatique": [
      "Découverte de l'environnement économique et écologique.md"
      ]
    },
  ]}
]