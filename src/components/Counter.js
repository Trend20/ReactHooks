// COUNTER APP USING REACT HOOKS

import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux';

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';

function Counter() {

  // const [counter, setCounter] = useState(0);

  const [incrementAmount, setIncrementAmount] = useState('2');

  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  // useEffect hook
  useEffect(() => {
   document.title = `You have clicked the counter ${count} times`
  })

  // const increaseCounter = () =>{
  //   setCounter(counter + 1)
  // }

  // const reduceCounter = () =>{
  //   setCounter(counter - 1)
  // }

  return (
    <div className="app">
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>Add Counter</button>
      <button onClick={() => dispatch(decrement())}>Reduce Counter</button>

      <div >
        <input
          // className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          // className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          // className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
      </div>
    </div>
  )
}

export default Counter;