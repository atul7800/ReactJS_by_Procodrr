import React from "react";

function CustomSelect({
  label,
  id,
  name,
  value,
  handleOnChange,
  defaultOption,
  options,
  errorMsg,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={handleOnChange}>
        <option value="" hidden>
          {defaultOption}
        </option>
        {options.map((optiona) => {
          return (
            <option key={crypto.randomUUID()} value={optiona}>
              {optiona}
            </option>
          );
          //console.log(`options ${optiona}`);
        })}
      </select>
      <p className="warningMsg">{errorMsg}</p>
    </div>
  );
}

export default CustomSelect;
