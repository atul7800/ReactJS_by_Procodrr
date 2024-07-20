import React from "react";

function sample() {
  const [number, setNumber] = useState(0);
  const counter = number + 1;
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setNumber(number + 1)}>Button</button>
    </div>
  );
}

export default sample;
