import React, { useState } from "react";
import Basket from "./Basket";
import Buttons from "./Buttons";
import leftImg from "../assets/left-arrow.png";
import rightImg from "../assets/right-arrow.png";
import "../css/maincontainer.css";

function MainContainer() {
  const [basket1Counter, setbasket1Counter] = useState(10);
  const [basket2Counter, setbasket2Counter] = useState(0);
  const [basketFull, setBasketFull] = useState("");

  const handleClick = (btnId) => {
    if (btnId === "right" && basket1Counter > 0) {
      setbasket1Counter(basket1Counter - 1);
      setbasket2Counter(basket2Counter + 1);
    }

    if (btnId === "left" && basket2Counter > 0) {
      setbasket1Counter(basket1Counter + 1);
      setbasket2Counter(basket2Counter - 1);
    }
  };

  return (
    <div className="mainContainer">
      <Basket basketID="1" appleCount={basket1Counter} />
      <Buttons imageName={leftImg} btnID="left" onClick={handleClick} />
      <Buttons imageName={rightImg} btnID="right" onClick={handleClick} />
      <Basket basketID="2" appleCount={basket2Counter} />
    </div>
  );
}

export default MainContainer;
