import React from "react";

const Country = (props) => {
  // Destructuring the props
  const { name, flags, capital, population, area } = props.country;
  return (
    <div>
      <img src={flags.png} alt={name.common} />
      <h3>Name: {name.common}</h3>
      <h3>Population: {population}</h3>
      <h3>Capital: {capital}</h3>
      <h3>Area: {area}</h3>
    </div>
  );
};

export default Country;
