const TabsBar = ({ navFiles, setNavFiles, activeFile, setActiveFile }) => {
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
          className={`tab${activeFile && activeFile.name === file.name && activeFile.content === file.content ? ' active' : ''}`}
        >
          <span className="tab name"
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
      ))}
    </span>
  );
};

export default TabsBar;
