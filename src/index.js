import React from 'react';
import ReactDOM from 'react-dom/client';
import Window from './components/Window';
import { CSS_COLORS } from './config';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div
      className="Window"
        style={{
        '--color-main': CSS_COLORS.main,
        '--color-secondary': CSS_COLORS.secondary,
        '--color-tertiary': CSS_COLORS.tertiary,
        '--color-text': CSS_COLORS.text,
        '--color-highlight': CSS_COLORS.highlight,
        '--color-highlight-text': CSS_COLORS.highlightText,
        height: '100vh'
      }}
    >
      <Window />
    </div>
  </React.StrictMode>
);
