import { useState } from 'react';
import TabsBar from './TabsBar';
import FileExplorer from './FileExplorer';
import Editor from './Editor';
import Terminal from './Terminal';
import TerminalToggleButton from './TerminalToggleButton';
import { LOGO } from '../config';

const Window = () => {

  const [navFiles, setNavFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);

  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState([]);
  const [pendingPrompt, setPendingPrompt] = useState(null);
  const [terminalInput, setTerminalInput] = useState('');
  
  const handleFileLinkClick = (link, message = 'Do you want to follow this link ?') => {
    if (!showTerminal) setShowTerminal(true);

    setPendingPrompt({
      prompt: `${message} (y/n)`,
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

  return (
    <>
      <div className="window header">
        <img className='logo' src={LOGO}></img>
        <TerminalToggleButton
          showTerminal={showTerminal}
          setShowTerminal={setShowTerminal}
        />
      </div>
      <div className="window body">
        <div className="window body left">
          <FileExplorer
            navFiles={navFiles}
            setNavFiles={setNavFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            handleFileLinkClick={handleFileLinkClick}
          />
        </div>
        <div className="window body right">
          <TabsBar
            navFiles={navFiles}
            setNavFiles={setNavFiles}
            activeFile={activeFile}
            setActiveFile={setActiveFile}
            handleFileLinkClick={handleFileLinkClick}
          />
          <Editor 
            activeFile={activeFile} 
            handleFileLinkClick={handleFileLinkClick}
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
      </div>
    </>
  );
};

export default Window;
