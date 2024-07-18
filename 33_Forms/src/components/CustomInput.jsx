import React from "react";

function CustomInput({ label, id, name, value, handleOnChange, errorMsg }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={handleOnChange} />
      <p className="warningMsg">{errorMsg}</p>
    </div>
  );
}

export default CustomInput;
