//"new" allows to create objects of the same type, but class is more advanced
class User {

    //automatically called by new
    constructor(name) {
      this.name = name;
    }
    
    //no comma to separate methods
  
    sayHi() {
      console.log(this.name);
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

/////////getters and setters//////////7
let lechoncillo=class lechon{

  constructor(nombre){
    this.nombre=nombre;
  }

  get nombreMarrano(){
    return this.name;
  }

  set nombreMarrano(nombre){
    this.nombre=nombre;
  }
  //do not use a property name as a getter or setter name
  get edad(){
    return this.anyos;
  }

  set edad(anyos){
    this.anyos=anyos;
  }
}

let l=new lechoncillo("pipas");
l.edad=2; //maks this.anyos=2
console.log (l, Object.keys(l).length);