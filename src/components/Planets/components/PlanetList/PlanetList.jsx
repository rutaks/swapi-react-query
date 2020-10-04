import React from "react";
import PlanetItem from "../PlanetItem";

const PlanetList = ({ planets = [] }) => {
  return planets.map((planet) => (
    <PlanetItem key={[planet.name]} planet={planet} />
  ));
};

export default PlanetList;
