// Array.from

var o ={0: "d",1:"j",2:"w",3:"e", length:4}

console.log(Array.from(o));

// object.Value

var a= Object.values(o);
console.log(a)

// object.keys

var ra=Object.keys(o).map((key)=>o[key]);
console.log(ra)

//arrat.proytotype.slice()

var obj={0: 'ab', 1: 'cd', 2: 'ef', length: 3};
var arr=Array.prototype.slice.call(obj)
console.log(obj)
