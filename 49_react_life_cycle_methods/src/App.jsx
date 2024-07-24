import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClassComponent name="Class component" />
    </>
  );
}

export default App;
