// var values = [1, 2, 3, 4, 5, 3];
// var i = values.indexOf(3);
// if (i >= 0) {
//  values.splice(i, 1);
// }
// console.log(values)

var values = [1, 2, 4, 5, 3];
var i = values.length + 1;
values.splice(i, 0, 6, 7, 8);
console.log(values)