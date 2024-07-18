import React from "react";
import Basket from "./Basket";
import Buttons from "./Buttons";
import leftImg from "../assets/left-arrow.png";
import rightImg from "../assets/right-arrow.png";
import "../css/maincontainer.css";

function MainContainer() {
  let basket1Counter = 0;
  let basket2Counter = 0;
  const basket1 = "1";
  const basket2 = "2";

  const handleClick = (btnId) => {
    //console.log(btnId + " Clicked");
    if (btnId === "left") {
      basket1Counter = basket1Counter + 1;
      document.getElementById(basket1).innerText = basket1Counter + " apples";
      if (basket2Counter > 0) {
        basket2Counter = basket2Counter - 1;
        document.getElementById(basket2).innerText = basket2Counter + " apples";
      }
    }

    if (btnId === "right") {
      basket2Counter = basket2Counter + 1;
      document.getElementById(basket2).innerText = basket2Counter + " apples";
      if (basket1Counter > 0) {
        basket1Counter = basket1Counter - 1;
        document.getElementById(basket1).innerText = basket1Counter + " apples";
      }
    }
  };

  return (
    <div className="mainContainer">
      <Basket basketID={basket1} appleCounter={basket1Counter} />
      <Buttons imageName={leftImg} btnID="left" onClick={handleClick} />
      <Buttons imageName={rightImg} btnID="right" onClick={handleClick} />
      <Basket basketID={basket2} appleCounter={basket2Counter} />
    </div>
  );
}

export default MainContainer;
