import React from "react";

function Basket({ basketID, appleCount }) {
  return (
    <div>
      <h2>{appleCount} apples</h2>
      <p>
        <b>
          Basket {basketID} {appleCount == 10 && "(Full)"}{" "}
          {appleCount == 0 && "(Empty)"}
        </b>
      </p>
    </div>
  );
}

export default Basket;
