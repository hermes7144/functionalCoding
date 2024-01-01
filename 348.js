/// It's your turn

var evaluations = [{ name: "Jane", position: "catcher", score: 25 },
{ name: "John", position: "pitcher", score: 10 },
{ name: "Harry", position: "pitcher", score: 3 }];


var roster = evaluations.reduce((roster, evaluation) => {
  var { position, name } = evaluation;
  return !roster[position] ? { ...roster, [position]: name } : roster;
}, {});

console.log(roster);

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}