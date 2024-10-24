"use strict";

let person = {
  first: "Shawn",
  middle: "Corey",
  last: "Carter",
  age: 54,
  stageName: "Jay-Z",
  netWorthInBillion: 2.5,
};
console.log(person.netWorthInBillion);

function printPerson(person) {
  console.log(person);
}
printPerson(person);

function createPerson() {
  let person = {
    first: "Beyonce",
    last: "knowles",
  };
  return person;
}

let spouse = createPerson();
console.log(spouse);
