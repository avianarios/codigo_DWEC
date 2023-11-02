//prototype
//multiple prototypicall inheritance
//method overriding
let animal={
    come: true,
    desplazate(){
        return "voy andando";
    }
};

let conejo={
    salta: true,
    desplazate(){
       return "voy saltando";
    }
};

let perro={
    ladra: true
};

let conejito={};

conejito.desplazate=()=>{return "voy dando saltitos"};  //overrides prototype's method
/*conejito.desplazate= function (){
    return "voy dando saltitos";
}*/


Object.setPrototypeOf(conejo, animal);  //animal is the prototype of conejo. The latter inherits from the former
//conejo.__proto__=animal;    shorter, but outdated. 
Object.setPrototypeOf(perro, animal);
Object.setPrototypeOf(conejito, conejo);

console.log(conejo.come, perro.come, conejito.come);
console.log (perro.desplazate(), conejo.desplazate());

//example 2
//getter and setter
let coche={
    marca:"",
    modelo:"",
    set marcayModelo(aux){
        [this.marca, this.modelo]=aux.split(' ');
    }

    get marcayModelo(){
        return `$this.marca, $this.modelo`;
    }
}

coche.marcayModelo="alfa romeo";    //launches setter
console.log(coche.marcayModelo());  //launches getter


let creaUsuario=(name,age)=>(
    {name, age}
);

usuario=creaUsuario("don quijote", "perez");
console.log (usuario);