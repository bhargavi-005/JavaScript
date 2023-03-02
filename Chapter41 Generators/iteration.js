function* r(n) {
    for (let i = 1; i < n; ++i) {
    yield i;
    }
   }
   
   for (let n of r(10)) {
   }
   let num = [...r(8)]; 
//    let m = Math.max(...r(100)); 
//    console.log(m);
   console.log(num) 