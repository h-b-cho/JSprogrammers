// 1.
const person = {
  name: "Lee Sun-Hyoup",
  familyName: "Lee",
  givenName: "Sun-Hyoup",
  company: "Cobalt. Inc.",
  address: "Seoul",
};

const { familyName, givenName } = person;
console.log({ familyName, givenName });
// {
//   familyName: "Lee",
//   givenName: "Sun-Hyoup",
// }

// 2.
// const name = "Lee Sun-Hyoup";
// const company = "Cobalt";
// const person = {
//   name,
//   company,
// };

// console.log(person);
// {
//   name: 'Lee Sun-Hyoup'
//   company: 'Cobalt',
// }
