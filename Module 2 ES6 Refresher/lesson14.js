// const person = {
//     talk() {
//         console.log("this", this);
//     }
// };

// const person = {

//     talk() {
//         var self = this;
//         setTimeout(function () {
//             console.log("self", self);
//             console.log("this", this);
//         }, 1000);
//     }
// };



const person = {

    talk() {
        var self = this;
        setTimeout(() => {
            console.log("self", self);
            console.log("this", this);
        }, 1000);
    }
};
person.talk();