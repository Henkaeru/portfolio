import { errorMessages } from '../data/errors';

const Terminal = ({ terminalHistory, setTerminalHistory, pendingPrompt, setPendingPrompt, terminalInput, setTerminalInput }) => {
  
  const handleInputChange = (e) => {
    setTerminalInput(e.target.value);
  };

  const handleTerminalSubmit = () => {

    if (pendingPrompt) {
      switch (terminalInput) {
        case 'y':
          setTerminalHistory(prev => [
            ...prev,
            { input: pendingPrompt.prompt, output: ''},
            { input: terminalInput, output: ''}
          ]);
          pendingPrompt.onConfirm();
          break;
        case 'n':
          setTerminalHistory(prev => [
            ...prev,
            { input: pendingPrompt.prompt, output: ''},
            { input: terminalInput, output: ''}
          ]);
          pendingPrompt.onCancel();
          break;
        default:
          break;
      }
      setPendingPrompt(null);
    } else {
      const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];

      setTerminalHistory((prevHistory) => [
        ...prevHistory,
        { input: terminalInput, output: randomError }
      ]);
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
      <div>
        {terminalHistory.map((entry, index) => (
          <div key={index}>
            {entry.input && (
              <span>{`> ${entry.input}`}</span>
            )}
            {entry.output && (
              <div
                style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
              >
                {entry.output}
              </div>
            )}
          </div>
        ))}
        {pendingPrompt && (
          <div>
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
      />
    </div>
  );
};

export default Terminal;
