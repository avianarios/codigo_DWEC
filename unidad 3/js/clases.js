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

  //do not use the same name used for a property as a getter or setter name (nombre, for instance)
  get nombreMarrano(){
    return this.nombre;
  }

  set nombreMarrano(nombre){
    this.nombre=nombre;
  }
  get edad(){
    return this.anyos;
  }

  set edad(anyos){
    this.anyos=anyos;
  }
}

let marranillo=new lechoncillo("pipas");
marranillo.edad=2; //maks this.anyos=2
console.log (marranillo, Object.keys(marranillo).length);
console.lo g(marranillo.nombreMarrano);

//////////losing this (pérdida de this)/////////////
/*this references the context where it was called. If it is different from the object (context) where it was created, 
it no longer references its object*/
class Button {
  constructor(value) {
    this.value = value;
  }
  click() {
    console.log(this.value);
  }
  clack = () => { //fixes this losing problem
    console.log(this.value);
  }
}

let button = new Button("hello");
setTimeout(button.click, 1000); // undefined. This no longer references its object
setTimeout(button.clack, 1000); // this from clack references its class


////////class extension/Herencia de clase////////
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  para() {
    this.velocidad = 0;
    console.log(`${this.nombre} se queda quieto.`);
  }
}

class Conejo extends Animal{
  salta(distancia){
    this.distancia = distancia;
    console.log(`${this.nombre} salta a una distancia de ${this.distancia}.`);
  }
}

let conejo= new Conejo("Fufo");
conejo.corre();
conejo.salta(5);



/////method overriding/////
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  para() {
    this.velocidad = 0;
    console.log(`${this.nombre} se queda quieto.`);
  }
}

class Conejo extends Animal{
  para(msg=2000){ //will override parent's method "para"
    super.para(); //references parent's method "para"
    this.escondete(msg);
  }
  escondete(msg=2000){
    //super only works with arrow functions when using it inside functions
    //setTimeout(function() { super.stop() }, msg);   //error
    setTimeout(() => {
       super.para();
       console.log(`${this.nombre} se esconde en su madriguera durante ${msg/1000} segundos`)
     },msg); // call parent "para" after 1sec
  }
  salta(distancia){
    this.distancia = distancia;
    console.log(`${this.nombre} salta a una distancia de ${this.distancia}.`);
  }
}

let conejo= new Conejo("Fufo");
conejo.para();  //method from conejo, not animal
conejo.corre(6);
conejo.salta(5);

///////////extending form a class created with a function/////////////
function creaClase() {
  return class {
      constructor(nombre) {
        this.velocidad = 0;
        this.nombre = nombre;
      }
      corre(velocidad) {
        this.velocidad = velocidad;
        console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
      }

  };
}

class animal extends creaClase() {}
new animal().corre(4); // Hola


////overriding a constructor////
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
}

class Conejo extends Animal{
  constructor(nombre, tamanyoOrejas){
    super.nombre=nombre;    //super has to be called in order for the parent constructor to create an object for "this". If not
    this.tamanyoOrejas=tamanyoOrejas;
  }
}

let conejo = new Conejo("Conejito pequeño", 5);
console.log(conejo.nombre);
console.log(conejo.tamanyoOrejas);