import { GITHUB_TOKEN } from '../config';

const githubApiUrl = 'https://api.github.com';

const decodeBase64Utf8 = (base64) => {
  const binary = atob(base64.replace(/\s/g, ''));
  const utf8 = new TextDecoder('utf-8').decode(
    new Uint8Array([...binary].map((char) => char.charCodeAt(0)))
  );
  return utf8;
};

const getGitHubLink = (username, repoName) => {
  return `https://github.com/${username}/${repoName}`;
};

export const fetchProjectDetails = async (username) => {
  if (!username) return {};

  const headers = {
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
    Accept: 'application/vnd.github.v3+json',
  };

  const reposResponse = await fetch(`${githubApiUrl}/users/${username}/repos`, {
    headers,
  });

  if (!reposResponse.ok) {
    console.error(`Failed to fetch repos: ${reposResponse.status}`);
    return {};
  }

  const repos = await reposResponse.json();

  const projectsObj = {};

  await Promise.all(
    repos.map(async (repo) => {
      let readmeText = '';
      try {
        const readmeResponse = await fetch(
          `${githubApiUrl}/repos/${username}/${repo.name}/readme`,
          { headers }
        );

        if (readmeResponse.ok) {
          const readmeData = await readmeResponse.json();
          readmeText = decodeBase64Utf8(readmeData.content);
        } else {
          console.warn(`No README for ${repo.name}`);
        }
      } catch (error) {
        console.error(`Failed to fetch README for ${repo.name}`, error);
      }

      projectsObj[repo.name] = {
        'README.md': readmeText,
        'github.link': getGitHubLink(username, repo.name),
      };
    })
  );

  return projectsObj;
};
