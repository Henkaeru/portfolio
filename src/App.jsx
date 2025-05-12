import React, { useState, useEffect } from 'react';
import Window from './components/Window';
import { fetchProjectDetails } from './services/GitHubServices';

const App = () => {
  // Global state
  const [projects, setProjects] = useState([]);
  const [openedFiles, setOpenedFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [pendingPrompt, setPendingPrompt] = useState(null);
  const [showTerminal, setShowTerminal] = useState(false);

  const githubUsername = 'henkaeru';





  // Terminal submit handler
  const handleTerminalSubmit = () => {
    const randomError = `Random Error: ${Math.random()}`;
    setTerminalHistory((prevHistory) => [
      ...prevHistory,
      { input: terminalInput, output: randomError }
    ]);
    setTerminalInput('');
  };

  return (
    <Window
      projects={projects}
      openedFiles={openedFiles}
      activeFile={activeFile}
      openFile={openFile}
      terminalInput={terminalInput}
      setTerminalInput={setTerminalInput}
      terminalHistory={terminalHistory}
      handleTerminalSubmit={handleTerminalSubmit}
      pendingPrompt={pendingPrompt}
      setPendingPrompt={setPendingPrompt}
      showTerminal={showTerminal}
      setShowTerminal={setShowTerminal}
    />
  );
};

export default App;
