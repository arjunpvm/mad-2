// Let's learn JavaScript!!!


/* 
    I am trying to build a website.
    And I am using JavaScript in it!!
*/

console.log(`Arjun`);

// window.alert('This is Arjun\'s website');

document.getElementById("h1").textContent = 'Heading';

// variables store different values

/* different data types:

    string,numbers,boolean
*/

let x;
x = 10;

let y = 15

console.log(typeof x);

console.log(x + y);

console.log(`My fav number is ${x}`)


let name = 'Arjun'
let age = '22'
let gender = 'male'

document.getElementById("p1").textContent = `My name is ${name}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = gender

// + - * / can be done

let a = 10;

// a = a*2
// a = a/2
// a = a+2
// a = a-2
// a = a**2 // exponential
// a1 = a%2 // a modulo 2

// +=, >=, <=, !=, ++, -- all these works 
// ++ means incren=ment by 1

/*
    operaetor precedence:
        1. Paranthesis
        2. exponents
        3. multip / div /modulo
        4. add / sub
*/

console.log(a)

/* Take inputs:
    easy way: windows prompt
    professional way: html textbox
*/

// easy way:
//let username; 
//username = window.prompt(`what is your username?`);
//console.log(username);
// professional way:
let username;
document.getElementById("submit").onclick = function(){
    username = document.getElementById("username").value;
    console.log(username);
    document.getElementById("h2").textContent = `Welcome ${username}`
}

// Type conversion: change datatype of a variable (numbers,strings,boolean)
// Inputs are always string

/*
let n = window.prompt("Fav number: ");
n = Number(n);
n += 1;
console.log(n, typeof n);
*/

let b = "arjun";
let c = "arjun";
let d = "arjun";

let e = "";
let f = "";
let g = "";

b = String(b);
c = Boolean(c);
d = Number(d);

e = String(e);
f = Boolean(f);
g = Number(g);

console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

console.log(e, typeof e);
console.log(f, typeof f);
console.log(g, typeof g);

// if no values assigned (let a;) then NaN for numbers, faslse for booleans, undefined for string

// const = a variable that cannot be changed. Use CAPITAl var name for const variables

const PI = 22/7;
let radius;
let circumference;

radius = window.prompt("Enter radius of circle:");
circumference = 2 * PI * radius;

console.log(`circumference is ${circumference}`);

document.getElementById("submit2").onclick = function(){
    radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("h3").textContent = "The circumfernece is " + circumference;
}