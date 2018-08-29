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

////////////////////////////////////
//// STRINGS

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1986;
function calcAge(year) {
    return 2018 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`) // template literals


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.endsWith('th')); //true
console.log(n.includes(' ')); // True that it has a space
console.log(firstName.repeat(5));
console.log(`${firstName} `.repeat(5)); // repeats with a space

*/

///////////////////////////////////////////////
//// ARROW FUNCTIONS 1
/*
const years = [1990, 1986, 1982, 1937];

// ES5
var ages5 = years.map(function(el){
    return 2018 - el;

}); 
console.log(ages5);

// ES6
let ages6 = years.map(el => 2018 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index +1}: ${2018 - el}. `);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return  `Age element ${index +1}: ${age}. `

});
console.log(ages6);

*/


//////////////////////////////////////////////////////
/////// ARROW FUNCTIONS: Lexical 'this' Keyword

// Arrow functions dont have their own 'this' but they use the this keyword of the function
// they are written in.

// ES5

/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }

}
box5.clickMe();

// to avoid this situation we can use this work around
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }

}
box5.clickMe();

*/

// ES6
// by using the arrow function we have access to the this keyword, because the arrow function
// shares the this keyword with its surrounding code
var box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }

}
// box6.clickMe();


// turning the clickMe into an arrow function will throw undefined because now this arrow
// function will share the this keyword with its surroundings, which in this case it is the 
// global object window.
/*

var box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }

}
box66.clickMe();
*/

// The following wouldnt work without the bind because the this keyword points 
//to the global object, and not to the Person. With bind we manually bind this keyword

function Person(name) {
    this.name = name;
}

// ES5
/*

Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el){

        return this.name + ' is friends with ' + el;

    }.bind(this));
    console.log(arr);
}


var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);
*/


// ES6
/*
Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

      
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Mike').myFriends6(friends);
*/


//////////////////////////////////////////////////////////////////////
//// DESTRUCTURING
/*
// ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRretirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRretirement(1990);
console.log(age2);
console.log(retirement);
*/




/////////////////////////////////////////////////////////////////////////////////////////////
//////// ARRAYS

/*const boxes = document.querySelectorAll('.box');

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/


// ES6
// the .from converts boxes into an array 
/*const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');*/

// the problem with the map and the forEach loops is that we cannot break from them


// ES5
/*for(var i = 0; i < boxesArr5.length; i++) {

    if(boxesArr5[i].className === 'box blue') {
        continue;
        
    }

    boxesArr5[i].textContent = 'I changed to blue!'

}*/

// ES6
/*for (const cur of boxesArr6){
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}




// ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);


// ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/


//////////////////////////////////////////////////////////////////
/// SPREAD OPERATOR

/*

function addFourAges (a, b, c, d) {
    return a + b + c + d;[]
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);


// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);



const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);

// we can use the spread operator on node lists as well

const h = document.querySelector('h1');

const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');


*/


/////////////////////////////////////////////////////////////
// REST PARAMETERS - the oposite to spread operator
/*
// ES5
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18);
    })
}

//isFullAge5(1990, 1999, 1965, 2016);
//isFullAge5(1990, 1999, 1965, 2016, 1845);

// ES6
function isFullAge6(...years) {
    console.log(years);

    years.forEach(cur => console.log((2016 - cur) >= 18));
}

isFullAge6(1990, 1999, 1965, 2016);

*/



/*
// ES5
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1); //we exclude the first arg, which is the limit
    //console.log(argsArr);
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= limit);
    })
}

isFullAge5(16, 1990, 1999, 1965, 2016);
//isFullAge5(1990, 1999, 1965, 2016, 1845);

// ES6
function isFullAge6(limit, ...years) {
    console.log(years);

    years.forEach(cur => console.log((2018 - cur) >= limit));
}

isFullAge6(16, 1990, 1999, 1965, 2016, 1987);

*/


////////////////////////////////////////////////////////////
/// DEFAULT PARAMETERS


// ES5

/*

function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith' : lastName = lastName; // we can set default values for the empty values like this
    nationality === undefined ? nationality = 'american' : nationality = nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990); // we only specified 2 of the parameters, so they will be undefined

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');

*/

// ES6

function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth;
    this.lastName = lastName;
    this.nationality = nationality;
}



var john = new SmithPerson('John', 1990); // we only specified 2 of the parameters, so they will be undefined

var emily = new SmithPerson('Emily', 1983, 'Diaz', 'spanish');


