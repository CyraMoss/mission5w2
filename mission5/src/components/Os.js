import React from 'react';

export default function Os() {
  return (
    <div className="os">
      <div className="oscard">
        <div className="iconlogo">
          <i class="fa-brands fa-apple big"></i>
        </div>
        <div className="iconname">
          <p>Apple macOS</p>
        </div>
      </div>
      <div className="oscard">
        <div className="iconlogo">
          <i class="fa-brands fa-windows big"></i>
        </div>
        <div className="iconname">
          <p>Microsoft Windows</p>
        </div>
      </div>
      <div className="oscard">
        <div className="iconlogo">
          <i class="fa-brands fa-google big"></i>
        </div>
        <div>
          <p className="iconname">Google Chrome</p>
        </div>
      </div>
    </div>
  );
}
