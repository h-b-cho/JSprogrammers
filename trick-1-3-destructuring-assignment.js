const makeCompany = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName,
  };
};
const cobalt = makeCompany({
  name: "Cobalt. Inc.",
  serviceName: "Present",
});
console.log(cobalt);
// { name: 'Cobalt. Inc.', address: undefined, serviceName: 'Present' }
