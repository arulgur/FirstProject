import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  try {
    if (value > 3) {
      throw new Error("Danger Zone");
    }
  } catch (e) {
    //console.log
    console.log(e);
  }

  return (
    <div className="App">
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}> Increment</button>
    </div>
  );
}

export default App;
