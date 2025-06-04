const TerminalToggleButton = ({ showTerminal, setShowTerminal }) => {
  return (
    <span className={`TerminalToggleButton${showTerminal ? ' active' : ''}`}
      onClick={() => {setShowTerminal(!showTerminal)}}>
      {showTerminal ? 'Hide Terminal' : 'Show Terminal'}
    </span>
  );
};

export default TerminalToggleButton;
