/**
 * Recursively load file contents from a nested file/folder structure.
 * 
 * @param {string | object | array} input - The file/folder structure.
 * @param {string} basePath - Base path to prepend to file paths.
 * @returns {Promise<object>} - Loaded file structure.
 */
export const loadFolderAndFiles = async (input, basePath = '') => {
  const result = {};

  if (typeof input === 'string') {
    const fullPath = basePath ? `${basePath}/${input}` : input;

    try {
      const res = await fetch(fullPath);
      if (!res.ok) {
        console.warn(`Skipping missing file: ${fullPath} (status ${res.status})`);
        return {}; // Skip file if not found or error
      }

      const text = await res.text();
      if (!text.trim()) {
        return {}; // Skip empty content
      }

      result[input] = text;
    } catch (error) {
      console.warn(`Error fetching file: ${fullPath}`, error);
      return {}; // Skip on fetch error
    }

  } else if (Array.isArray(input)) {
    for (const item of input) {
      Object.assign(result, await loadFolderAndFiles(item, basePath));
    }

  } else if (typeof input === 'object' && input !== null) {
    for (const [key, value] of Object.entries(input)) {
      const folderPath = basePath ? `${basePath}/${key}` : key;
      const nested = await loadFolderAndFiles(value, folderPath);
      if (Object.keys(nested).length > 0) {
        result[key] = nested;
      }
    }
  }

  return result;
};


/**
 * Check if a file is a link file (e.g., ends with .link).
 *
 * @param {string} fileName
 * @returns {boolean}
 */
export const isLinkFile = (fileName) => {
  return fileName.toLowerCase().endsWith('.link');
};