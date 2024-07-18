import { useState } from "react";
import "./App.css";
import MainContainer from "./components/MainContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainContainer />
    </>
  );
}

export default App;
