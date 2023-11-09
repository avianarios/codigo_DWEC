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
marranillo.edad=2; //makes this.anyos=2. Setters are called with equal instead of parenthesis
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

///////////extending from a class created with a function/////////////
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
    super(nombre);    //super has to be called in order for the parent constructor to create an object for "this". If not
    this.tamanyoOrejas=tamanyoOrejas;
  }
}

let conejo = new Conejo("Conejito pequeño", 5);
console.log(conejo.nombre);
console.log(conejo.tamanyoOrejas);

//////////static methods////////////
//static methods are assigned to a class rather than to an object
//a good candidate to be static method is the one which is appliable to the class, but not to any particular object
//they must be called by using the class name, not the instantiate object
//"regular" methods are called "instance methods"

//example 1
//comparaVelocidad does not belong to any object. It belongs to the parent class
//comparaVelocidad can only be called from the class, not the instantiated objects
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


//example 2. static property
class Animal {
  static fechaNacimiento;
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
console.log (Animal.fechaCompra, animales[0].fechaCompra);  //first works, second not
Animal.nombre="fufas";  //not working, not static property

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
  #tamanyoDelPan;
  constructor (potencia, tamanyoPan){
    this._potencia=potencia;
    this.#tamanyoDelPan=10;
    this.marca=marca;
    this.modelo=modelo;
  }
  
  //an alternative way of expressing a getter
  getPotencia(){
    return this._potencia;
  }
  
  //an alternative way of expressing a setter
  #setPotencia(potencia){
    this._potencia=potencia;
  }

  set tamanyoPan(tamanyo){
    this.#tamanyoDelPan=tamanyo;
  }
  
  get tamanyoPan(){
    return this.#tamanyoDelPan;
  }
}

let tostadora1=new tostadora(100, 8);
//underscore is a convention for expressing a property to be protected, meaning not accessible outside the class
//but nothing prevents user from changing their value
tostadora1._potencia=225;
console.log (tostadora1._potencia);

//Sharp makes a property private, meaning no access outside the class
//tostadora1.#tamanyoDelPan=10;  //Error (it's private)
//traditional way of using setters and getters (with equal and no parenthesis)
tostadora1.tamanyoPan=10;
console.log (tostadora1.tamanyoPan);

//alternative way of using getters and setters (with parenthesis)
//tostadora1.setPotencia(10);  //Error, no such a function (it's private)
tostadora1.getPotencia();

//private properties and methods are not inherited
class electrodomestico{
  #potencia
  constructor (potencia){
    this.#potencia=potencia;
  }
  
  getPotencia(){
    return this.#potencia;
  }
}

class batidora extends electrodomestico{
  constructor(nombre, modelo, potencia){
    super(potencia);
    this.nombre=nombre;
    this.modelo=modelo;
  }
  
  getPotencia(){
    //return this.#potencia;  //error: private name #potencia not defined
    //return super.#potencia;  //error: private fields can't be accessed on super
    return super.getPotencia();   //the only way of accessing private properties on parent's class
  }
}

let b=new batidora("ufesa", "ax23", 500);
console.log (b.getPotencia());