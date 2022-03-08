import React, { useState } from 'react'
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const changeCounter = () =>{
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <p>{counter}</p>
      <button onClick={changeCounter}>Change Counter</button>
    </div>
  );
}

export default App;
