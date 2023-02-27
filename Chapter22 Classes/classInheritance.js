class car {
    constructor(color){
        this.colorName= color;
    }

}
class brand extends car{
    constructor (color,brand){
        super(color)
        this.brandName=brand;

    }
    show(){
        return this.colorName+" "+this.brandName;
    }
}let carone=new brand("eee","eeee")
console.log(carone.show())