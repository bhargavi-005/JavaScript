const { stringify } = require("json5")

var a= [1,2,3,4]
var b=[1,3,2,4]

if(JSON.stringify(a)==JSON.stringify(b))
console.log("true");

else
console.log("false");