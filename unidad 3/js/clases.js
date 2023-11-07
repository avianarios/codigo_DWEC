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

//////////static methods////////////
//static methods are assigned to a class rather than to an object
//a good candidate to be static method is the one which is appliable to the class, but not to any particular object
//example 1
//foolish example, no need to static methods here
class Animal {
  constructor(nombre) {
    this.velocidad = 0;
    this.nombre = nombre;
  }
  static corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  para() {
    this.velocidad = 0;
    console.log(`${this.nombre} se queda quieto.`);
  }
}


class conejo extends Animal{ }

let conejito=new conejo("achuchao");
//conejito.corre(5);  //undefined, conejito.corre is not a function
conejito.para();

//example 2
//much better example. comparaVelocidad does not belong to any object. It belongs to the parent class
class Animal {
  constructor(nombre, velocidad=0) {
    this.velocidad = velocidad;
    this.nombre = nombre;
  }
  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }
  static comparaVelocidad(animal1, animal2){
    if (animal1.velocidad-animal2.velocidad<0)
      return "corre más "+animal2.nombre;
    else
      return "corre más "+animal1.nombre;
  }
}

class conejo extends Animal{};
class perro extends Animal{};


let conejito=new conejo("achuchao",7);
let perrito=new perro("cibeles",3);
console.log(Animal.comparaVelocidad(conejito, perrito));


//example 3
class Animal {
  constructor(nombre, maxVelocidad) {
    this.maxVelocidad = maxVelocidad;
    this.nombre = nombre;
  }

  corre(velocidad) {
    this.velocidad = velocidad;
    console.log(`${this.nombre} corre a una velocidad de ${this.velocidad}.`);
  }

  static comparaMaxVelocidad(animal1, animal2){
   return animal1.maxVelocidad-animal2.maxVelocidad;
  }
}

class conejo extends Animal{};
class perro extends Animal{};

let animales=[
  new conejo("achuchao", 7),
  new perro("roque", 2),
  new perro("cibeles", 8)
];

animales.sort(Animal.comparaMaxVelocidad);
for (let animal of animales){
  console.log(animal.nombre);
}


//Internal and external interface
//Internal: Methods and properties accesibles from other methods but not from outside
//External: methods and properties accesibles also from outside the class


//interal properties are preceded by underscore
class tostadora{
  constructor (potencia){
    this._potencia= potencia;
  }
  get potencia(){
    return this._potencia;
  }
}

let tostadora1=new tostadora(100);
//underscore is a convention for private properties
//they are meant to be accessible only within the classs, 
//but Nothing prevents user from changing their value
tostadora1._potencia=225;
console.log (tostadora1.potencia);

//protected properties are preceded by sharp
//it's a new feature, meaning old browsers may need polyfills
class tostadora{
  #tamanyoPan=10;
  constructor (potencia){
    this._potencia= potencia;
  }
  get potencia(){
    return this._potencia;
  }
}

let tostadora1=new tostadora(100);
//underscore is a convention for private properties
//they are meant to be accessible only within the classs, 
//but Nothing prevents user from changing their value
tostadora1._potencia=225;
console.log (tostadora1.potencia);