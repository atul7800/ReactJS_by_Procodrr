import React from "react";
import "../css/countriesListShimmer.css";

function CountriesListShimmer() {
  return (
    <div className="countries-container">
      {Array({ length: 10 }).map((el, i) => {
        <div key={i} className="country-card shimmer-card"></div>;
      })}
    </div>
  );
}

export default CountriesListShimmer;
