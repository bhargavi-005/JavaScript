const { object } = require("prop-types");

var obj = { 0: 'a', 1: 'b', 2: 'c' };

Object.keys(obj).map(function(key){
    console.log(key);
    console.log(obj);
})