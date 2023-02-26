var a, b;
[a,b]=[,45,54]

console.log(a)
console.log(b)


const triangle = [3, 4, 5];
const [len, height, hypotenuse] = triangle;
(len === 3); 
height === 4; 
hypotenuse === 5;



function area([l,h]){
    return (l*h)/2;
}
var t =area(triangle)
console.log(t)

