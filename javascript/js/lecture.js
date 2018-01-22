/**
 * lecture.js
 * Script for the lecture.html fille
 */
//@ts-check
"use strict";

let x = "Hello, World!";
console.log(x);

/**
 * Returns a greeting given a name
* @param {string} name - name of person to greet
* @returns {string}
*/
function getGreeting(name) {
    return "Hello, " + name + "!";
}

console.log(getGreeting("Gorgeous"));

let seasons = ["spring", "summer", "fall", "winter"];
console.log(seasons.length);
console.log(seasons[0]);
seasons.push("seattle summer");
console.log(seasons);

for (let i = 0; i < seasons.length; i++) {
    console.log(seasons[i]);
}

let y = 10;
if (y > 0) {
    console.log(y);
}

let person = {
    firstName: "Dave",
    lastName: "Stearns"
};
console.log(person.firstName);
let propName = "firstName";
console.log(person[propName]);

person.title = "Dr";
delete person.firstName;
console.log(person);
