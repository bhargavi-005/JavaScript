// var arr=[apple,banana,grapes,melon]
var num =[1,2,3,4,5,6]

for (var i = 0, length = 10; i < length; i++) {
    console.log(i);
}


for (var i = 0, length = num.length; i < length; i++) {
    console.log(i);
   }


   for (var i = num.length - 1; i > -1; i--) {
    console.log(num[i]);
   }
//..................A while loop......................

var i =0;
var t=""
while(i<5){
     t += "number ="+i;
    i++;
}
console.log(t)

//for..in
for(i in num){
    console.log(num[i]);
}
//for...of
for (let s of num){
    // let d=s*2;
    console.log(s)
}

//...........................Array.prototype.keys()...............

for (var i of num.keys()){
    let d = num[i]*2;
    console.log(d);
}
