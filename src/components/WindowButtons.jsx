import React from 'react';

const WindowButtons = () => {
  return (
    <div className="window-buttons" style={{ display: 'flex', gap: '6px', padding: '8px' }}>
      <div style={{ width: '12px', height: '12px', backgroundColor: 'red', borderRadius: '50%' }} />
      <div style={{ width: '12px', height: '12px', backgroundColor: 'yellow', borderRadius: '50%' }} />
      <div style={{ width: '12px', height: '12px', backgroundColor: 'green', borderRadius: '50%' }} />
    </div>
  );
};

export default WindowButtons;
