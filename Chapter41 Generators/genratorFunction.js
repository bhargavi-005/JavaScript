function* num() {
    console.log('starting'); 
    yield 1; 
    console.log(' 1'); 
    yield 2; 
    console.log(' 2'); 
    yield 3; 
    console.log(' 3'); 
   }
   var generator = num(); 
   generator.next(); 
   
   generator.next(); 
   
   generator.next(); 
   generator.next(); 
   