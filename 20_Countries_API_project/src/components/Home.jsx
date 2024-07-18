import React from "react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SelectMenu from "../components/SelectMenu";
import CountriesList from "../components/CountriesList";
import { useOutletContext } from "react-router-dom";

function Home() {
  const [query, setQuery] = useState("");
  const isDark = useOutletContext();
  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <SearchBar setQuery={setQuery} />
        <SelectMenu />
      </div>
      {/* {query == "unmount" ? "" : <CountriesList query={query} />} */}
      <CountriesList query={query} />
    </main>
  );
}

export default Home;
