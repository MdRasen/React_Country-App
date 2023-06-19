import React from "react";
import { v4 as uuid4 } from "uuid";

import Country from "./Country";

const Countries = (props) => {
  return (
    <section>
      {props.countries.map((country) => {
        // Creating a new variable to store country details and assign unique id
        const countryNew = { country, id: uuid4() };
        return <Country key={countryNew.id} {...countryNew} />;
      })}
    </section>
  );
};

export default Countries;
