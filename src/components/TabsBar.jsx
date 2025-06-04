import { useEffect } from 'react';
import { loadFolderAndFiles } from '../utils/filesUtils';
import { closeTabUpdate } from '../utils/tabsUtils';
import { EMPTY_FILE, EASTER_EGG_LINK } from '../config';

const TabsBar = ({ navFiles, setNavFiles, activeFile, setActiveFile, handleFileLinkClick }) => {
  useEffect(() => {
    const loadEmptyFile = async () => {
      if (!activeFile) {
        const result = await loadFolderAndFiles(EMPTY_FILE, `${process.env.PUBLIC_URL}`);
        setActiveFile({
          path: EMPTY_FILE,
          name: EMPTY_FILE,
          content: result[EMPTY_FILE],
        });
      }
    };

    loadEmptyFile();
  }, [activeFile, setActiveFile]);

  const closeTab = (file) => {
    if (file.path === EMPTY_FILE) {
      handleFileLinkClick(EASTER_EGG_LINK, "You can't close that, but do you want to play a game ?");
      return;
    }
    setNavFiles(prev => prev.filter(f => f.path !== file.path));
    if (activeFile?.path === file.path) {
      const { navFiles: newNavFiles, activeFile: newActiveFile } = closeTabUpdate(navFiles, file.path, activeFile);
      setNavFiles(newNavFiles);
      setActiveFile(newActiveFile);
    }
  };

  const filesToShow = navFiles.length > 0 ? navFiles : [activeFile].filter(Boolean);

  return (
    <span className="TabsBar">
      {filesToShow.map((file) => {
        const isActive = activeFile?.path === file.path;
        return (
          <span
            key={file.path}
            className={`tab${isActive ? ' active' : ''}`}
          >
            <span
              className="tab name"
              onClick={() => setActiveFile(file)}
            >
              {file.name}
            </span>
            <img
              src={`${process.env.PUBLIC_URL}/images/close.png`}
              alt="Close"
              className="close icon"
              onClick={() => closeTab(file)}
            />
          </span>
        );
      })}
    </span>
  );
};

export default TabsBar;