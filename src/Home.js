import React from "react";
import { useState } from "react";

function Home() {
  const [value, setValue] = useState(0);
  if (value > 3) {
    throw new Error("Danger Zone");
  }
  return (
    <>
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}> Increment</button>
    </>
  );
}

export default Home;
