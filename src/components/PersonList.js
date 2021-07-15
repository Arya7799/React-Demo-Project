import React from "react";
import Person from "./Person";

function PersonList() {
  const persons = [
    { id: 1, name: "Anthony", age: 47, skill: "React" },
    { id: 2, name: "StringerBell", age: 45, skill: "Angular" },
    { id: 3, name: "WalterWhite", age: 46, skill: "Vue" },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default PersonList;
