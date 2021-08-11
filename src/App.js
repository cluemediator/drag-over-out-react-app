import React, { useState } from 'react';

function App() {
  const [dnd, setDnd] = useState(false);

  const handleDragEnter = event => {
    console.log('On Drag Enter >>> ', event.target.className);
    setDnd(!dnd);
  };

  const handleDragLeave = event => {
    console.log('On Drag Leave >>> ', event.target.className);
    setDnd(!dnd);
  };

  return (
    <div>
      <h3>Handle drag over and out in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <div className="box-container">
        <div className="box" onDragEnter={handleDragEnter}>
          Container
        </div>
        {dnd && <div className="drop-box" onDragLeave={handleDragLeave}>Drag & Drop Area</div>}
      </div>
    </div>
  );
}

export default App;