import React from "react";

function Basket({ basketID, appleCount }) {
  return (
    <div>
      <h2>{appleCount} apples</h2>
      <p>
        <b>Basket {basketID}</b>
      </p>
    </div>
  );
}

export default Basket;
