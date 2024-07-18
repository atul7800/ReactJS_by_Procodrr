import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  //console.log("Counter in function " + count);

  return (
    <>
      <h1>{count}</h1>
      <button
        style={{ border: "2px solid black" }}
        onClick={() => {
          setCount((prev) => prev + 1);
          setCount(count + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
        }}
      >
        Increase count
      </button>
    </>
  );
}

export default App;
