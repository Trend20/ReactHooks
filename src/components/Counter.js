// COUNTER APP USING REACT HOOKS

import React, { useState, useEffect } from 'react'

function Counter() {

  const [counter, setCounter] = useState(0);

  // useEffect hook
  useEffect(() => {
   document.title = `You have clicked the counter ${counter} times`
  })

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