import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black');

  const changeColor = () => {
    setColor('red');
  }

  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>Click the button to change the text color.</p>
      <button onClick={changeColor}>Change Color</button>
      <p style={{ color }}>Text color is {color}</p>
    </div>
  );
}

export default App;
