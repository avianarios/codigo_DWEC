//New allows us to create objects of the same type, but class is more advanced
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      alert(this.name);
    }
  
  }
  
let user = new User("Apolinar");
user.sayHi();