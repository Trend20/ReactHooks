import React, { useState, useEffect } from 'react';


const Hooks = () =>{
  const [count, setCount] = useState(0);

  

  return(
    <div>
      <p>You have clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Add count</button>
    </div>
  )
}

export default Hooks;