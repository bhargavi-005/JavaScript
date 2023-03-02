function* summer() {
    let i = 0,v ;
    while (true) {
         yield i++;
        i += v

    
   }}
   const gen =summer()
   
   console.log(gen.next().value);
   console.log(gen.next());
   console.log(gen.next());
   console.log(gen.next());
   console.log(gen.next(100));
   console.log(gen.next(null));

   