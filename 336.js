const array = [1, 2, 3, 4, 5];

var window = 5;

var average = array => array.reduce((sum, e) => sum + e, 0) / array.length;
var answer = array.map((e, i) => array.slice(i, i + window)).map(average);

console.log(answer);