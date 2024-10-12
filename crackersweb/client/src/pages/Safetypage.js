import React from 'react';
//import './SafetyPage.css';

const Safetypage = () => {
  return (
    <div>
      <div className="safe-banner">
        <h1>Safe Tips</h1>
      </div>
      <div className="safety-container">
        {/* Do's Section */}
        <div className="safety-section safety-dos">
          <h2>Do's</h2>
          <div className="safety-item success">
            <span className="icon">✔</span>
            <div>
              <h5>Instructions</h5>
              <p>Display fireworks as per the instructions mentioned on the pack.</p>
            </div>
          </div>
          <div className="safety-item success">
            <span className="icon">✔</span>
            <div>
              <h5>Outdoor</h5>
              <p>Use fireworks only outdoor</p>
            </div>
          </div>
          <div className="safety-item success">
            <span className="icon">✔</span>
            <div>
              <h5>Branded Fireworks</h5>
              <p>Buy fireworks from authorized / reputed manufacturers only</p>
            </div>
          </div>
          <div className="safety-item success">
            <span className="icon">✔</span>
            <div>
              <h5>Distance</h5>
              <p>Light only one firework at a time, by one person. Others should watch from a safe distance</p>
            </div>
          </div>
        </div>

        {/* Don'ts Section */}
        <div className="safety-section safety-donts">
          <h2>Don'ts</h2>
          <div className="safety-item error">
            <span className="icon">✘</span>
            <div>
              <h5>Don't make tricks</h5>
              <p>Never make your own fireworks.</p>
            </div>
          </div>
          <div className="safety-item error">
            <span className="icon">✘</span>
            <div>
              <h5>Don't relight</h5>
              <p>Never try to re-light or pick up fireworks that have not ignited fully.</p>
            </div>
          </div>
          <div className="safety-item error">
            <span className="icon">✘</span>
            <div>
              <h5>Don't carry it</h5>
              <p>Never carry fireworks in your pockets</p>
            </div>
          </div>
          <div className="safety-item error">
            <span className="icon">✘</span>
            <div>
              <h5>Don't Touch it</h5>
              <p>After fireworks display never pick up fireworks that may be left over, they still may be active.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safetypage;
