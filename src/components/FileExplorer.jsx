import { useEffect, useState } from 'react';
import { fetchProjectDetails } from '../services/GitHubServices';
import { GITHUB_USERNAME, LOCAL_PROJECTS } from '../config';

const FileExplorer = ({
  projects, setProjects,
  navFiles, setNavFiles,
  activeFile, setActiveFile,
  setPendingPrompt, terminalHistory, setTerminalHistory,
  showTerminal, setShowTerminal
}) => {
  const [expandedFolders, setExpandedFolders] = useState({});

  useEffect(() => {
    (async () => {
      let data;
      if (GITHUB_USERNAME && GITHUB_USERNAME !== '') {
        data = await fetchProjectDetails(GITHUB_USERNAME);
      } else {
        data = LOCAL_PROJECTS.map((project) => ({
          name: project.name,
          files: {
            [`${project.name}/README.md`]: project.READMEmd,
            'github.link': project.link,
          },
        }));
      }
      setProjects(data);
    })();
  }, []);

  const openFile = (file) => {
    if (!navFiles.some(f => f.name === file.name)) {
      setNavFiles((prevFiles) => [...prevFiles, file]);
    }
    if (activeFile?.name !== file.name) {
      setActiveFile(file);
    }
  };

  const handleFileLinkClick = (link) => {
    if (!showTerminal) setShowTerminal(true);

    setPendingPrompt({
      prompt: `Do you want to go to ${link}? (y/n)`,
      url: link,
      onConfirm: () => {
        window.open(link, '_blank');
        setTerminalHistory(prev => [...prev, { input: '', output: `Opening ${link}...` }]);
      },
      onCancel: () => {
        setTerminalHistory(prev => [...prev, { input: '', output: 'Aborted.' }]);
      },
    });
  };

  const toggleFolder = (projectName) => {
    setExpandedFolders(prev => ({
      ...prev,
      [projectName]: !prev[projectName],
    }));
  };

  const renderFileList = () => {
    if (!projects || projects.length === 0) return <div>No projects available</div>;

    return projects.map((project) => {
      const { name: projectName, files } = project;
      const isOpen = expandedFolders[projectName];

      return (
        <div className="folder-view" key={projectName}>
          <div className="folder"
              onClick={() => toggleFolder(projectName)}>
            <img
                src={`${process.env.PUBLIC_URL}/images/${isOpen ? 'folder-open.png' : 'folder-closed.png'}`}
                alt="folder-icon"
                className="folder-icon"
              />
            <span
              className="folder-name"
            >
              {projectName}
            </span>
          </div>
          {isOpen && (
            <div className="file-list">
              {Object.entries(files).map(([fileName, content]) => {
                if (!content || content.trim() === '') return null;

                const isLink = fileName === 'github.link';

                return (
                  <div
                    key={fileName}
                    className={`file ${isLink ? 'link' : 'readme'}`}
                    onClick={() => {
                      if (isLink) {
                        handleFileLinkClick(content);
                      } else {
                        openFile({ name: fileName, content });
                      }
                    }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${isLink ? 'link.png' : 'file.png'}`}
                      alt={`${isLink ? 'link' : 'file'}-icon`}
                    />
                    <span
                      className="filename"
                    >
                      {fileName}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="FileExplorer">
      {renderFileList()}
    </div>
  );
};

export default FileExplorer;
