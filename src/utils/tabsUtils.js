/**
 * Closes a tab by removing the file with closedFilePath from navFiles,
 * and returns the updated navFiles and the new activeFile.
 *
 * @param {Array} navFiles - Array of open files (each with a unique `path`)
 * @param {string} closedFilePath - The path of the file to close
 * @param {object|null} currentActiveFile - The currently active file object or null
 *
 * @returns {{ navFiles: Array, activeFile: object|null }}
 */
export function closeTabUpdate(navFiles, closedFilePath, currentActiveFile) {
  // Filter out the closed tab
  const filteredNavFiles = navFiles.filter(f => f.path !== closedFilePath);

  // If closed file wasn't active, keep the current active file
  if (!currentActiveFile || currentActiveFile.path !== closedFilePath) {
    return {
      navFiles: filteredNavFiles,
      activeFile: currentActiveFile,
    };
  }

  // Closed file was active, find fallback file to activate
  if (filteredNavFiles.length === 0) {
    return {
      navFiles: [],
      activeFile: null,
    };
  }

  // Find index of the closed file in original list
  const closedIndex = navFiles.findIndex(f => f.path === closedFilePath);

  // Try previous file if exists
  if (closedIndex > 0) {
    return {
      navFiles: filteredNavFiles,
      activeFile: filteredNavFiles[closedIndex - 1],
    };
  }

  // Otherwise, try next file
  return {
    navFiles: filteredNavFiles,
    activeFile: filteredNavFiles[0],
  };
}