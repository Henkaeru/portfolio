// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Henkaeru', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projets',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed.
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display.
      },
    },
    external: {
      /*header: 'Mes Projets',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],*/
    },
  },
  seo: {
    title: 'Keren Courtois Portfolio',
    description: 'Bienvenue sur le portfolio de Keren Courtois, étudiant en informatique passionné, spécialisé en développement d\'applications, intelligence artificielle, full-stack et projets en science des données.',
    imageURL: '',
  },
  social: {
    linkedin: 'keren-courtois',
    /*x: '',*/
    /*mastodon: 'arifszn@mastodon.social',*/
    /*researchGate: '',*/
    /*facebook: '',*/
    /*instagram: '',*/
    /*reddit: '',*/
    /*threads: '',*/
    /*youtube: '',*/
    /*udemy: '',*/
    /*dribbble: '',*/
    /*behance: '',*/
    /*medium: '',*/
    /*dev: '',*/
    /*stackoverflow: '',*/
    /*skype: '',*/
    /*telegram: '',*/
    /*website: 'https://www.kerencourtois.com',*/
    phone: '06633430336',
    email: 'kerencourtois@gmail.com',
  },
  resume: {
    fileUrl:
      'https://storage.rxresu.me/cm81qols94jso1492sjqz8rt2/resumes/cv-alternance.pdf',
  },
  skills: [
    'POO',
    'C',
    'Python',
    'Java',
    'PostgreSQL',
    'HTML',
    'CSS',
    'Figma',
    'Bash',
    'Git',
    'Docker',
  ],
  experiences: [
    /*{
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },*/
  ],
  certifications: [
    /*{
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },*/
  ],
  educations: [
    {
      institution: 'IUT de Lannion - Informatique',
      degree: 'BUT',
      from: '2024',
      to: '2027',
    },
  ],
  publications: [
    /*{
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },*/
  ],
  blog: {
    /*source: 'dev', // medium | dev
    username: 'kercourt', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.*/
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'bumblebee',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'bumblebee',
      'dim',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#9B5DE5', // Vibrant violet
      secondary: '#FF6B6B', // Contrasting reddish-pink for pop
      accent: '#FDCB58', // Warm gold for highlights
      neutral: '#262335', // Dark but readable background
      'base-100': '#3A314D', // Softer dark violet for contrast
      '--rounded-box': '1rem', // Balanced rounded corners
      '--rounded-btn': '0.5rem', // Matching buttons
    }
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `© 2025 Keren Courtois. Tous droits réservés.`,

  enablePWA: true,
};

export default CONFIG;
