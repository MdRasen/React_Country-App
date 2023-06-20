import React, { useEffect, useState } from "react";

import Countries from "./components/Countries";
import "./app.css";

// API URL
const url = "https://restcountries.com/v3.1/all";

const App = () => {
  // Declaring the states
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredCountries, setfilteredCountries] = useState(countries);

  // Async method to fetch the data
  const fetchData = async (url) => {
    // Error check using try-catch method
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setfilteredCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  // Remove Country
  const removeCountry = (name) => {
    // Filtering the countries
    const filter = filteredCountries.filter(
      (country) => country.name.common != name
    );
    setfilteredCountries(filter);
  };

  return (
    <>
      <h1>Country App</h1>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {filteredCountries && (
        <Countries
          countries={filteredCountries}
          onRemoveCountry={removeCountry}
        />
      )}
    </>
  );
};

export default App;
