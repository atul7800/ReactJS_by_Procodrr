import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <>
      <Header theme={[isDark, setIsDark]} />
      <Outlet context={isDark} />
    </>
  );
}

export default App;
