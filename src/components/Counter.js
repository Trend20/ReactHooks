import React, { useState } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);

  const increaseCounter = () =>{
    setCounter(counter + 1)
  }

  const reduceCounter = () =>{
    setCounter(counter - 1)
  }

  return (
    <div className="app">
      <p>{counter}</p>
      <button onClick={increaseCounter}>Add Counter</button>
      <button onClick={reduceCounter}>Reduce Counter</button>
    </div>
  )
}

export default Counter;