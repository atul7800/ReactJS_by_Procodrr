import React from "react";

function Basket({ basketID, appleCounter }) {
  return (
    <div>
      <h2 id={basketID}>{appleCounter} apples</h2>
      <p>
        <b>Basket {basketID}</b>
      </p>
    </div>
  );
}

export default Basket;
