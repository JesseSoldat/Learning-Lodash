//ARRAY METHODS-------------------------------------

let chunk = _.chunk(['a', 'b', 'c', 'd'], 2);
// console.log(chunk); //[['a', 'b'], ['c', 'd']]

let compact = _.compact([0, 1, false, 2, '', 3]);
//console.log(compact); //[1, 2, 3]

var concatArray = [1];
var concatOther = _.concat(concatArray, 2, [3], [[4]]);
//take off 1 level of [] 
//console.log(concatOther); //[1, 2, 3, [4]]

let difference = _.difference([2, 1, 3, 4], [2, 3]);
//console.log(difference); // [1, 4] takes 2 and 3 out

let differenceBy = _.differenceBy([2.1, 1.2, 3.9, 5.3], [2.3, 3.4], Math.floor);
//console.log(differenceBy); //[1.2, 5.3]

let differenceBy2 = _.differenceBy([{ 'x': 2 }, { 'x': 1 }, {'y': 1}], [{ 'x': 1 }], 'x');
//console.log(differenceBy2); //[{ 'x': 2 }, {'y': 1}]

let differenceWithObj = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, {'z': 1}];
let differenceWith = _.differenceWith(differenceWithObj, [{ 'x': 1, 'y': 2 }], _.isEqual);
//console.log(differenceWith); //[{ 'x': 2, 'y': 1 }, {'z': 1}]
//_.isEqual does a deep comparison of two objects

let drop = _.drop([1, 2, 3], 2);
//console.log(drop); //[3]