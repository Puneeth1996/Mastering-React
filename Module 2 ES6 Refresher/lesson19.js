class CoolPerson {
    constructor(name) {
        name = this.name;
    }
    walk() {
        console.log("Puneeth Can Walk Real Fast!!!");
        console.log(name);
    }
}

class Teacher extends CoolPerson {
    constructor(name, degree) {
        super(name);
        this.degree = degree;
    }
    teach() {
        console.log("Tech");
    }
}

// Inheritance or Composition

const techer1 = new Teacher("Puneeth", "BE");
console.log(techer1);