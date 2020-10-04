import React from "react";

const Person = ({ person = { name: "", gender: "", birth_year: "" } }) => {
  return (
    <div className="card">
      <h3>{person.name}</h3>
      <p>Gender - {person.gender}</p>
      <p>Birth Year - {person.birth_year}</p>
    </div>
  );
};

export default Person;
