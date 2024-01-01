/// It's your turn

var recommendations = [{ name: "Jane", position: "catcher" },
{ name: "John", position: "pitcher" }];

function scorePlayer() {
  return 25;
}

var evaluations = recommendations.map(recommendation => { return { ...recommendation, score: scorePlayer(recommendation['name'], recommendation['position']) } })

console.log(evaluations);