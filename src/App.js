import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { ErrorBoundary } from "react-error-boundary";
import { Message } from "./Message";

function App() {
  // const [value, setValue] = useState(0);
  // try {
  //   if (value > 3) {
  //     throw new Error("Danger Zone");
  //   }
  // } catch (e) {
  //   //console.log
  //   console.log(e);
  // }
  const [message, setMessage] = useState("");

  const handleSubmit = (payload) => {
    setMessage(payload);
  };

  return (
    <div className="App">
      <h1>Do not type "Crash"</h1>
      <h2>{message}</h2>
      <ErrorBoundary
        fallbackRender={({ error, resetErrorBoundary }) => {
          return (
            <>
              {/* <h1> Something Went Wrong</h1> */}
              <h2 style={{ color: "red" }}>{error.message}</h2>
              <button onClick={resetErrorBoundary}> Try Again</button>
            </>
          );
        }}
        onReset={() => setMessage("")}
        resetKeys={[message]}
      >
        {/* <Home /> */}
        <Message message={message} onSubmit={handleSubmit} />
      </ErrorBoundary>
    </div>
  );
}

// const ErrorFallBackComponent = ({ error, resetErrorBoundary }) => {
//   return (
//     <>
//       <h1> Something Went Wrong</h1>
//       <h2>{error.message}</h2>
//       <button onClick={resetErrorBoundary}> Try Again</button>
//     </>
//   );
// };

export default App;
