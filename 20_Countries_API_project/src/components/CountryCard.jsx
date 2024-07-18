import React from "react";
import { Link } from "react-router-dom";

function CountryCard({ countriesDetails, countriesData }) {
  //console.log(JSON.stringify(countriesData, null, 2));
  return (
    <Link
      className="country-card"
      to={`/${countriesDetails[0]}`}
      state={countriesData}
    >
      <img src={countriesDetails[4]} alt="Wallis and Futuna flag" />
      <div className="card-text">
        <h3 className="card-title">{countriesDetails[0]}</h3>
        <p>
          <b>Population: </b>
          {countriesDetails[1].toLocaleString("en-IN")}
        </p>
        <p>
          <b>Region: </b>
          {countriesDetails[2]}
        </p>
        <p>
          <b>Capital: </b>
          {countriesDetails[3]}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
