const person = {
    name: "puneeth",
    walk() {
        console.log("Puneeth Can Walk Real Fast!!!");
    },
    talk() {},
    songs() {}
};



class CoolPerson {
    constructor(name) {
        name = this.name;
    }
    walk() {
        console.log("Puneeth Can Walk Real Fast!!!");
    }
}


const puneeth = new CoolPerson("Puneeth");

console.log(puneeth);