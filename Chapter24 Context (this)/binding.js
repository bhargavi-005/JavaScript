let dog = {
    name: "dog",
}
let parrot = {
    name: "parrot",
}
speak = function(sound){
    console.log(this.name,"is",sound);
}

bark = speak.bind(dog, "barking");
chirp = speak.bind(parrot, "chirping");

bark();
chirp();