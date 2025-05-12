import { GITHUB_TOKEN } from '../config';

const githubApiUrl = 'https://api.github.com';

/**
 * Properly decodes base64 content into UTF-8.
 * @param {string} base64 - The base64-encoded string.
 * @returns {string} - The decoded UTF-8 string.
 */
const decodeBase64Utf8 = (base64) => {
  const binary = atob(base64.replace(/\s/g, ''));
  const utf8 = new TextDecoder('utf-8').decode(
    new Uint8Array([...binary].map((char) => char.charCodeAt(0)))
  );
  return utf8;
};

/**
 * Fetches a list of repositories for the given GitHub username.
 * @param {string} username - The GitHub username.
 * @returns {Promise<Array>} - A promise that resolves to an array of repositories.
 */
export const fetchRepositories = async (username) => {
  const response = await fetch(`${githubApiUrl}/users/${username}/repos`);
  const repos = await response.json();
  return repos;
};

/**
 * Fetches the README.md for a given repository.
 * @param {string} username - The GitHub username.
 * @param {string} repoName - The repository name.
 * @returns {Promise<string>} - A promise that resolves to the decoded README.md content.
 */
export const fetchReadme = async (username, repoName) => {
  const response = await fetch(`${githubApiUrl}/repos/${username}/${repoName}/readme`);
  const readme = await response.json();
  return decodeBase64Utf8(readme.content);
};

/**
 * Returns the GitHub repository URL.
 * @param {string} username - The GitHub username.
 * @param {string} repoName - The repository name.
 * @returns {string} - The GitHub repository URL.
 */
export const getGitHubLink = (username, repoName) => {
  return `https://github.com/${username}/${repoName}`;
};

/**
 * Fetches all project details including README.md and the GitHub link.
 * @param {string} username - The GitHub username.
 * @returns {Promise<Array>} - A promise that resolves to an array of project details.
 */

export const fetchProjectDetails = async (username) => {
  const headers = {
    ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
    Accept: 'application/vnd.github.v3+json',
  };

  const reposResponse = await fetch(`${githubApiUrl}/users/${username}/repos`, {
    headers,
  });

  if (!reposResponse.ok) {
    console.error(`Failed to fetch repos: ${reposResponse.status}`);
    return [];
  }

  const repos = await reposResponse.json();

  const projects = await Promise.all(
    repos.map(async (repo) => {
      let readmeText = '';
      try {
        const readmeResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/readme`,
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

      return {
        name: repo.name,
        files: {
          [`${repo.name}/README.md`]: readmeText,
          'github.link': getGitHubLink(username, repo.name),
        },
      };
    })
  );

  return projects;
};
