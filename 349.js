var employeeNames = ["John", "Harry", "Jane"];

position = [
  { name: "Jane", position: 'catcher' },
  { name: "anonymous", position: 'pitcher' },
  { name: "John", position: 'pitcher' },
];

var recommendations = employeeNames.map(name => {
  return {
    name,
    position: recommendationPosition(name)
  }
})