import {
    CoolPerson
}
as './CoolPerson.js'

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

// Here making the code lot more modular by splitting into another CoolPerson.js

const techer1 = new Teacher("Puneeth", "BE");
console.log(techer1);


// Lesson 21 

// there is export from CoolPerson
// the CoolPerson is always a private class 

// we can also have default and normal exports on multiple class, named exports

// import React, { Component } from 'react';
// Here the React default export and the Component is named exprot from the react file.