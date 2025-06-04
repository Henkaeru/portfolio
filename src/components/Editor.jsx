import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';

const Editor = ({ activeFile, handleFileLinkClick }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollTop = 0;
    }
  }, [activeFile?.path]); // assuming `path` changes when file changes; you can adjust as needed

  if (!activeFile?.content) return null;

  const LinkRenderer = ({ href, children }) => {
    const onClick = (e) => {
      e.preventDefault();
      if (handleFileLinkClick) {
        handleFileLinkClick(href);
      } else {
        window.open(href, '_blank');
      }
    };

    return (
      <a href={href} onClick={onClick}>
        {children}
      </a>
    );
  };

  return (
    <div
      className="Editor markdown-preview"
      ref={previewRef}
      style={{ overflowY: 'auto', height: '100%' }} // ensure it's scrollable
    >
      <ReactMarkdown components={{ a: LinkRenderer }}>
        {activeFile.content}
      </ReactMarkdown>
    </div>
  );
};

export default Editor;
