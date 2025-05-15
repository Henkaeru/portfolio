export const GITHUB_USERNAME = 'henkaeru'; // Github Username to retrieve project from
export const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN; // Optional: Add a GitHub token or leave empty

export const LOCAL_PROJECTS = [
    {
        name : 'project1', 
        link :'http://90.16.253.118',
        READMEmd: '# Titre de dingue'
    },
    {
        name : 'project2', 
        link :'',
        READMEmd: '## Titre moins dingue'
    }
]

export const CSS_COLORS = {
  main: '#1e1e2f',          // for main background
  secondary: '#2a2a40',     // for panels
  tertiary: '#3a3a50',       // tiny touch
  text: '#c8c8d8',          // text color
  highlight: '#7c3aed',     // for highlight
  highlightText: '#f0e9ff', // for highlight
}