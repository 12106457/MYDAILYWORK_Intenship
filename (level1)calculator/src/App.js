import Keypad from "./keypad";
import "./App.css";
import { useState } from "react";

function App() {
  let [input, setinput] = useState("");

  function handleClick(value) {
    setinput(input + value);
  }

  function calculate() {
    let outputval = eval(input);
    setinput(outputval);
  }

  function handleClear() {
    setinput("");
  }
  function Backspace() {
    var len = input.length;
    var bp = input.substring(0, len - 1);
    setinput(bp);
  }

  return (
    <div className="container">
      <h1> Welcome to Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          value={input}
          className="output"
          placeholder="Enter"
        />
        <Keypad
          handleClick={handleClick}
          handleClear={handleClear}
          calculate={calculate}
          Backspace={Backspace}
        ></Keypad>
        {/* property name : {function name } here we can give any name*/}
      </div>
    </div>
  );
}
export default App;
