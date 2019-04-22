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

// accesing the object 
console.log(person.name);
console.log(person["talk"]);
// [] is used during reassignning only ahead of time.


// this keyword is unpredictable in the standalone and outside objects...