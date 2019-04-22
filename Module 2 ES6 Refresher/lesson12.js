const person = {
    name: "puneeth",
    walk: function () {
        console.log("Puneeth Can Walk Real Fast!!!");
    },
    talk() {
        console.log(this)
    },
    songs() {}
}

let walk = person.walk;
walk();

let walkit = console.log(person.walk);
walkit();

let walkon = console.log(person.walk.bind(person));
walkon();