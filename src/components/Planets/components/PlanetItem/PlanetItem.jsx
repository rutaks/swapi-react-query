import React from "react";
import "./index.css";
import { numberWithCommas } from "../../../../utils/numberUtils";

const PlanetItem = ({ planet = { name: "", population: "", terrain: "" } }) => {
  return (
    <div className="card">
      <h3>{planet.name}</h3>
      <p>Population - {numberWithCommas(planet.population)}</p>
      <p>Terrain - {planet.terrain}</p>
    </div>
  );
};

export default PlanetItem;
