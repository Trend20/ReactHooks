import { useState } from "react";
const HooksCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  // increment count by 10
  const incrementByVal = () => {
    for (let i = 0; i < 10; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return <button onClick={incrementByVal}>Count: {count} </button>;
};

export default HooksCounterTwo;
