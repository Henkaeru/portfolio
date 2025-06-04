import { useEffect, useState } from 'react';
import { fetchProjectDetails } from '../services/GitHubServices';
import { loadFolderAndFiles, isLinkFile } from '../utils/filesUtils'
import {
  GITHUB_USERNAME,
  LOCAL_FILES,
  LOCAL_FOLDER,
} from '../config';

/* ====================
   MAIN COMPONENT
==================== */

const FileExplorer = ({
  navFiles,
  setNavFiles,
  activeFile,
  setActiveFile,
  handleFileLinkClick,
}) => {
  // --- State ---
  const [expandedFolders, setExpandedFolders] = useState({ Projects: true });
  const [folderStructure, setFolderStructure] = useState(null);

  // --- Effects ---
  useEffect(() => {
    async function fetchFolderData() {
      let githubData = [];
      if (GITHUB_USERNAME) {
        githubData = await fetchProjectDetails(GITHUB_USERNAME);
      }
      const localFilesData = await loadFolderAndFiles(LOCAL_FILES, `${process.env.PUBLIC_URL}/${LOCAL_FOLDER}`);

      const data = githubData.length === 0 ? localFilesData : {...localFilesData, ...githubData};

      setFolderStructure(data);
    }
    fetchFolderData();
  }, []);

  // --- Handlers / Actions ---
  const toggleFolder = (folderPath) => {
    setExpandedFolders(prev => ({ ...prev, [folderPath]: !prev[folderPath] }));
  };

  const openFile = (file) => {
    if (!navFiles.some(f => f.path === file.path)) {
      setNavFiles(prev => [...prev, file]);
    }
    if (activeFile?.path !== file.path) {
      setActiveFile(file);
    }
  };

  // --- Render ---
  return (
    <>
      <span className='tab explorer'>EXPLORER</span>
      <div className="FileExplorer">
        {folderStructure
          ? renderFilesRecursive({
              node: folderStructure,
              basePath: '',
              expandedFolders,
              toggleFolder,
              activeFile,
              openFile,
              handleFileLinkClick,
            })
          : <div>Loading...</div>
        }
      </div>
    </>
  );
};

export default FileExplorer;


/* ====================
   RENDER FUNCTIONS
==================== */

const renderFilesRecursive = ({
  node,
  basePath,
  expandedFolders,
  toggleFolder,
  activeFile,
  openFile,
  handleFileLinkClick,
}) => {
  return Object.entries(node).map(([name, items]) => {
    const path = basePath ? `${basePath}/${name}` : name;

    if (typeof items === 'string') {
      return renderFileItem({
        key: path,
        path,
        name,
        content: items,
        activeFile,
        openFile,
        handleFileLinkClick,
      });
    }

    const isOpen = expandedFolders[path] || false;

    return (
      <div key={path} className="folder">
        {renderFolderHeader({ name, path, isOpen, toggleFolder })}
        {isOpen && (
          <div className="folder-content">
            {renderFilesRecursive({
              node: items,
              basePath: path,
              expandedFolders,
              toggleFolder,
              activeFile,
              openFile,
              handleFileLinkClick,
            })}
          </div>
        )}
      </div>
    );
  });
};

const renderFolderHeader = ({ name, path, isOpen, toggleFolder }) => (
  <div className="folder-header" onClick={() => toggleFolder(path)}>
    <img
      src={`${process.env.PUBLIC_URL}/images/${isOpen ? 'folder-open.png' : 'folder-closed.png'}`}
      alt="folder icon"
      className="icon folder-icon"
    />
    <span className="folder-name">{name}</span>
  </div>
);

const renderFileItem = ({ key, path, name, content, activeFile, openFile, handleFileLinkClick }) => {
  const isLink = isLinkFile(name);
  const isActive = activeFile?.path === path;

  const onClick = () => {
    if (isLink) {
      handleFileLinkClick(content);
    } else {
      openFile({ path, name, content });
    }
  };

  return (
    <div
      key={key}
      className={`file ${isLink ? 'link' : 'readme'} ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/${isLink ? 'link.png' : 'file.png'}`}
        alt={`${isLink ? 'link' : 'file'} icon`}
        className="icon file-icon"
      />
      <span className="file-name">{name}</span>
    </div>
  );
};