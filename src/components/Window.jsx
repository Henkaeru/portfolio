import { useState } from 'react';
import TabsBar from './TabsBar';
import FileExplorer from './FileExplorer';
import Editor from './Editor';
import Terminal from './Terminal';
import TerminalToggleButton from './TerminalToggleButton';

const Window = () => {
  const [projects, setProjects] = useState([]);

  const [navFiles, setNavFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [pendingPrompt, setPendingPrompt] = useState(null);
  const [terminalInput, setTerminalInput] = useState('');
  

  return (
    <>
      <div className="window-header">
        <TerminalToggleButton
          showTerminal={showTerminal}
          setShowTerminal={setShowTerminal}
        />
        {navFiles.length > 0 && (
          <TabsBar
            navFiles={navFiles}
            setNavFiles={setNavFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
          />
        )}
      </div>
      <div className="window-body">
        <FileExplorer
          projects={projects}
          setProjects={setProjects}
          navFiles={navFiles}
          setNavFiles={setNavFiles}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
          setPendingPrompt={setPendingPrompt}
          terminalHistory={terminalHistory}
          setTerminalHistory={setTerminalHistory}
          showTerminal={showTerminal}
          setShowTerminal={setShowTerminal}
        />
        <Editor
          activeFile={activeFile}
        />
        {showTerminal && (
            <Terminal
              terminalHistory={terminalHistory}
              setTerminalHistory={setTerminalHistory}
              pendingPrompt={pendingPrompt}
              setPendingPrompt={setPendingPrompt}
              terminalInput={terminalInput}
              setTerminalInput={setTerminalInput}
            />
        )}
      </div>
    </>
  );
};

export default Window;
