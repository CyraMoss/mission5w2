import React from 'react';

export default function ScreenSize() {
  return (
    <div className="screensize-container">
      <div className="screensize-laptop">
        <img src="./images/screensize.svg" alt="laptop" />
      </div>
      <div className="screensize-sections">
        <div className="screensize-section">
          <div className="screensize-circle">
            <h2>Compact</h2>
            <h3>Less than 13"</h3>
          </div>
        </div>
        <div className="screensize-section">
          <div className="screensize-circle">
            <h2>Small</h2>
            <h3>13" to 14.9"</h3>
          </div>
        </div>
        <div className="screensize-section">
          <div className="screensize-circle">
            <h2>Medium</h2>
            <h3>15" to 16.9"</h3>
          </div>
        </div>
        <div className="screensize-section">
          <div className="screensize-circle">
            <h2>Large</h2>
            <h3>17" and above</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
