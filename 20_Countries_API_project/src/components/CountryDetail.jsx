import React, { useEffect, useState } from "react";
import "../css/country.css";
import { Link, useParams, useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function CountryDetail() {
  const params = useParams();
  const countryName = params.country;

  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [borderCountries, setBorderCountries] = useState();
  const { state } = useLocation();
  const isDark = useOutletContext();

  //console.log(JSON.stringify(state, null, 2));

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        //console.log(data);
        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0].common,
          population: data.population.toLocaleString("en-IN"),
          region: data.region,
          subRegion: data.subregion,
          capital: data.capital.join(", "),
          domain: Object.values(data.tld).join(" | "),
          currencies: Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", "),
          languages: Object.values(data.languages).join(", "),
          flag: data.flags.svg,
          borders: data.borders ? data.borders : "Water locked country",
        });
      })
      .catch((err) => setNotFound(true));
  }, [countryName]);

  if (notFound) {
    return <div>Country not found.</div>;
  }

  return countryData === null ? (
    "Loading..."
  ) : (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="country-details-container">
        <span className="back-button" onClick={() => window.history.back()}>
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt="" />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: </b>
                <span className="native-name">{countryData.nativeName}</span>
              </p>
              <p>
                <b>Population: </b>
                <span className="population">{countryData.population}</span>
              </p>
              <p>
                <b>Region: </b>
                <span className="region">{countryData.region}</span>
              </p>
              <p>
                <b>Sub Region: </b>
                <span className="sub-region">{countryData.subRegion}</span>
              </p>
              <p>
                <b>Capital: </b>
                <span className="capital">{countryData.capital}</span>
              </p>
              <p>
                <b>Top Level Domain: </b>
                <span className="top-level-domain">{countryData.domain}</span>
              </p>
              <p>
                <b>Currencies: </b>
                <span className="currencies">{countryData.currencies}</span>
              </p>
              <p>
                <b>Languages: </b>
                <span className="languages">{countryData.languages}</span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries:</b>&nbsp;
              {typeof countryData.borders != "string"
                ? countryData.borders.join(", ")
                : countryData.borders}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CountryDetail;
