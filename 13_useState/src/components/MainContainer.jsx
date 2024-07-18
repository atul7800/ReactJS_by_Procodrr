import React, { useState } from "react";
import Basket from "./Basket";
import Buttons from "./Buttons";
import leftImg from "../assets/left-arrow.png";
import rightImg from "../assets/right-arrow.png";
import "../css/maincontainer.css";

function MainContainer() {
  let [basket1Counter, setbasket1Counter] = useState(10);
  let [basket2Counter, setbasket2Counter] = useState(0);

  const handleClick = (btnId) => {
    //console.log(btnId + " Clicked");

    if (btnId === "right" && basket1Counter > 0) {
      basket1Counter--;
      basket2Counter++;
      setbasket1Counter(basket1Counter);
      setbasket2Counter(basket2Counter);
    }

    if (btnId === "left" && basket2Counter > 0) {
      basket1Counter++;
      basket2Counter--;
      setbasket1Counter(basket1Counter);
      setbasket2Counter(basket2Counter);
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
