const TabsBar = ({ navFiles, setNavFiles, activeFile, setActiveFile }) => {
  if (!navFiles || navFiles.length === 0) return null;

  const closeTab = (file) => {
    setNavFiles(prev => prev.filter(f => f.name !== file.name));

    if (activeFile && activeFile.name === file.name) {
      setActiveFile(null);
    }
  };

  return (
    <span className="TabsBar">
      {navFiles.map((file) => (
        <span
          key={file.name}
          className={`tab${file === activeFile ? '-active' : ''}`}
        >
          <span className="tab-name"
            onClick={() => setActiveFile(file)}
          >
            {file.name}
          </span>
          <img
            src="/images/close.png"
            alt="Close"
            className="close-icon"
            onClick={() => closeTab(file)}
          />
        </span>
      ))}
    </span>
  );
};

export default TabsBar;
