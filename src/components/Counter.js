import React, { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);

  const changeCounter = () =>{
    setCounter(counter + 1)
  }

  return (
    <div className="app">
      <p>{counter}</p>
      <button onClick={changeCounter}>Change Counter</button>
    </div>
  )
}

export default Counter