import React from 'react';

export default function HelpSection() {
  return (
    <div className="wholehelp">
      <div className="helpleft">
        <h1>Need Help?</h1>
        <div className="contact">
          <button className="button1">Browse Help Centre Topics</button>
          <p className="phnumber">Or Call +64 9 526 9200</p>
        </div>
      </div>
      <div className="helpright">
        <img className="helpimg" src="./images/helpimg.svg" alt="helpimg" />
      </div>
    </div>
  );
}
