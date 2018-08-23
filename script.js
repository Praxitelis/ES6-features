// Lecture: let and const


/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';

console.log(name5);

// ES6

const name6 = 'Jane Smith'; // will not change
let age6 = 23;  // can change

name6 = 'Jane Miller';
console.log(name6); // will throw error because constants cannot change


*/

// ES5

/*
function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'Telis';
        var yearOfBirth = 1986;

        //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');

    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');
}

driversLicence5(true);
*/
// ES6

/*
function driversLicence6(passedTest) {

    if (passedTest) {
        let firstName = 'Telis';
        const yearOfBirth = 1986;

        //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');

    }
    //***
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');
}

driversLicence6(true);

*/

//*** let and const are block scoped so they cannot work outside from where they are defined
// Vars on the other hand cannot work outside of a function, but can outside a block
// 'let' can be defined outside the block and then it can be used outside the block, but
// 'const' cannot. If you want to use it outside the block you need to define AND declare.
// as seen below!

/*
function driversLicence6(passedTest) {
    let firstName;
     const yearOfBirth = 1986;

    if (passedTest) {
            firstName = 'Telis';
       

        //console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');

    }
    //***
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car. ');
}

driversLicence6(true);

*/

/*
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i); // this will output 23 because it is outside of the for loop

// if it was a var then it would change also outside the loop

*/


////////////////////////////////////////////////////////
// BLOCKS AND IIFEs

/*

// ES6

{
    const a = 1;
    let b = 2;
    var c = 3;

}

//console.log(a + b);
console.log(c);


// ES5
(function() {

    var c = 3;

})();

// console.log(c);

*/