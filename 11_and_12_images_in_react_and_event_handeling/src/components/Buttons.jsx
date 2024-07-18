import React from "react";
import "../css/button.css";

function Buttons({ imageName, btnID, onClick }) {
  return (
    <div className="button">
      <button
        title={btnID}
        id={btnID}
        onClick={() => {
          onClick(btnID);
        }}
      >
        <img src={imageName} alt="img not loaded" />
      </button>
    </div>
  );
}

export default Buttons;
