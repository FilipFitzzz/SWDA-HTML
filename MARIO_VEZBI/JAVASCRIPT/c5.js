// Intro to JS

// console.log('test');

// var name = "Filip";
// console.log(name);

// alert(name);

// function helloWorld() {
//     return "Hello World";
// }

// console.log(helloWorld());

// function otherHelloWorld() {
//     console.log("Hello World!");
// }

// otherHelloWorld();

// function helloName(name) {
//     console.log("Hello " + name);
// }

// helloName("Filip");



// function dogYears(years) {
//     console.log("My dog is " + (years) + "and that makes him " + (years * 7) + "years old in his human form");
// }

// dogYears(5);

// function dogYears(years) {
//     return ("My dog is " + (years) + "and that makes him " + (years * 7) + "years old in his human form");
// }

// console.log(dogYears(5));



// function fortuneTeller(name, ocupation, city, age) {
//     return ("My names is " + (name) + "I work like a " + (ocupation) + "and i live in " + (city) + "and aslo have" + (age) + "years"); 
// }

// console.log(fortuneTeller("Filip", "Web-Designer", "Skopje", 23));


// function rollerCoasterRider(height, limit) {
//     if (height >= limit) {
//         return "You can ride the roller-coaster"
//     } else {
//         return "you CAN'T ride the roller-caster"
//     }
// }

// console.log( rollerCoasterRider(1.68, 1.68) );

function numberComparison(a, b) {
    if (a > b) {
        return "Number " + a + "is greater than " + b;
    } else if (a < b) {
        return "Numer " + b + " is greater than " + a;
    } else {
        return "Numbers are aqual"
    }

}

console.log( numberComparison(5, 10) );

