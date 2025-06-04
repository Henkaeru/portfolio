import { errorMessages } from '../data/errors';

const Terminal = ({
  terminalHistory,
  setTerminalHistory,
  pendingPrompt,
  setPendingPrompt,
  terminalInput,
  setTerminalInput
}) => {
  
  const handleInputChange = (e) => {
    setTerminalInput(e.target.value);
  };

  const addToHistory = (input, output = '') => {
    setTerminalHistory(prev => [...prev, { input, output }]);
  };

  const handleTerminalSubmit = () => {
    if (pendingPrompt) {
      addToHistory(pendingPrompt.prompt);
      addToHistory(terminalInput);

      if (terminalInput === 'y' && typeof pendingPrompt.onConfirm === 'function') {
        pendingPrompt.onConfirm();
      } else if (terminalInput === 'n' && typeof pendingPrompt.onCancel === 'function') {
        pendingPrompt.onCancel();
      }
      
      setPendingPrompt(null);
    } else {
      // Show random error for unknown commands
      const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
      addToHistory(terminalInput, randomError);
    }
    setTerminalInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleTerminalSubmit();
    }
  };

  return (
    <div className="Terminal">
      <div className="terminal-history">
        {terminalHistory.map((entry, index) => (
          <div key={index} className="terminal-entry">
            {entry.input && <span className="terminal-input">{`> ${entry.input}`}</span>}
            {entry.output && (
              <div
                className="terminal-output"
                style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
              >
                {entry.output}
              </div>
            )}
          </div>
        ))}
        {pendingPrompt && (
          <div className="terminal-prompt">
            <span>{`> ${pendingPrompt.prompt}`}</span>
          </div>
        )}
      </div>
      <input
        type="text"
        value={terminalInput}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Type your command..."
        aria-label="Terminal input"
        autoComplete="off"
      />
    </div>
  );
};

export default Terminal;
