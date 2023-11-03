//"new" allows to create objects of the same type, but class is more advanced
class User {

    //automatically called by new
    constructor(name) {
      this.name = name;
    }
    
    //no comma to separate methods
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
let user = new User("Apolinar");
user.sayHi();

/*
class methods are non-enumerable. you can not iterate through them with for..in
classes always are in strict mode
*/

//////////class as an expression//////////
let perro=class{
  ladra(){
    console.log("guau, guau");
  }
};

let a=new perro();
a.ladra();
new perro().ladra();


//you can provide a name, just like functions
//the name is only visible inside the class
let gatito=class gato{
  maulla(){
    console.log("miau, miau");
    console.log(gato);  //a class is a function!!
  }
}
//let c=new gato();   //error
new gatito().maulla();
let b=new gatito();
b.maulla();