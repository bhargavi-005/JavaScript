function repeating() {
    console.log("It's been 5 seconds. Execute the function again.");
    setTimeout(repeating, 5000);
   }
   setTimeout(repeating, 5000);