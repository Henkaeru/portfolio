import ReactMarkdown from 'react-markdown';

const Editor = ({ activeFile }) => {
  return (
    <div
      className="Editor markdown-preview"
    >
      <ReactMarkdown>{activeFile ? activeFile.content || '' : 'You should try opening a file...'}</ReactMarkdown>
    </div>
  );
};

export default Editor;
