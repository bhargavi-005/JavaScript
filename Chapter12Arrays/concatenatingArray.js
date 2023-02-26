var a1=[1,2,3,4]
var a2=[1,3,4,5,6]
// var a =a1.concat(a2)
var a =[...a1,...a2]
console.log(a)


var arr=[1,2,3,4,5,6,7,8]
var arr2=[1,2,3,4]

//  var arr3=arr.push(...arr2)
//  console.log(arr3)

arr2.forEach(function (n){
arr.push(n);
})
console.log(arr)
