
//array sum
var arr=[1,2,3,4,5,6,7]
var sum=arr.reduce (function(a,b){
   return a+b;
});
console.log(sum)

// Flatten Array of Objects

// Map Using Reduce
// Find Min or Max Value

var max =arr.reduce(function(a,b)
{
    return a>b?a:b
},1);
console.log(max)


// Find Unique Values