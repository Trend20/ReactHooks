import React from "react";
import Counter from "./components/Counter";
import Hooks from "./components/Hooks";
import "./App.css";
import HooksCounterTwo from "./components/HooksCounterTwo";

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      {/* <Counter /> */}
      <Hooks />
      <HooksCounterTwo />
    </div>
  );
}

export default App;
