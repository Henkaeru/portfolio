const TerminalToggleButton = ({ showTerminal, setShowTerminal }) => {
  return (
    <span className="TerminalToggleButton"
      onClick={() => {setShowTerminal(!showTerminal)}}>
      {showTerminal ? 'Hide Terminal' : 'Show Terminal'}
    </span>
  );
};

export default TerminalToggleButton;
