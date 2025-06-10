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

export const EASTER_EGG_LINK = 'https://www.nytimes.com/games/wordle/index.html'

export const LOCAL_FOLDER = 'local';

export const LOCAL_FILES = [
  'aboutMe.md',
  'contact.md',
  'resume.link',
  {'projects': [
    {"1 Réaliser un développement d'application": [
      "1.01 Implémentation d'un besoin client.md"
      ]
    },
    {"2 Optimiser des applications informatiques": [
      "2.01 Comparaison d'approches algorithmiques.md"
      ]
    },
    {"3 Administrer des systèmes informatiques communicants complexes": [
      "3.01 Installation d'un poste de développement.md"
      ]
    },
    {"4 Gérer des données de l'information": [
      "4.01 Création d'une base de données.md"
      ]
    },
    {"5 Conduite de projet": [
      "5.01 Recueil de besoins.md"
      ]
    },
    {"6 Travailler dans une équipe informatique": [
      "6.01 Découverte de l'environnement économique et écologique.md"
      ]
    },
  ]}
]