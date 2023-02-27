class animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }
    get name(){
        return this.name
    }
    set name(n){
        this.name=n;
    }
}
let Animal =new animal("dog","dd")
console.log(Animal.name,Animal.sound)