var employeeNames = ["John", "Harry", "Jane"];

function recommendationPosition() { return 'pitcher' }

var score = 25;
function scorePlayer() {
  score--;
  return score;
}

var evaluations = employeeNames.map(name => { return { name, position: recommendationPosition(name) } })
  .map(recommendation => { return { ...recommendation, score: scorePlayer(recommendation['name'], recommendation['position']) } })

console.log(evaluations);

var evaluationAscending = sortBy(evaluations, function (eval) { return eval.score });
var evaluationDescending = reverse(evaluationAscending);
