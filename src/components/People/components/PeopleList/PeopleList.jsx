import React from "react";
import Person from "../Person/Person";

const PeopleList = ({ people = [] }) => {
  return people.map((person) => <Person key={person.name} person={person} />);
};

export default PeopleList;
