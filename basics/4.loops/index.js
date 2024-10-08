// ----- IF LOOP -----


let x = 15;

if (x > 10) {
	console.log("x is bigger!")
}

const age = document.getElementById("age");
const submit = document.getElementById("submit");
const text = document.getElementById("result");
let age1;

submit.onclick = function() {
	age1 = age.value;
	console.log("age is " + age1);
	age1 = Number(age1);
	if (age1 > 18) {
		text.textContent = `You can play this game!`
	}
}

// checkboxes!!

const check = document.getElementById("ok");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const button = document.getElementById("button");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");

button.onclick = function() {
	if (check.checked) {
		result2.textContent = "OK";
	}
	else {
		result2.textContent = "NOT OK";
	}
	if (one.checked) {
		result3.textContent = "ONE";
	}

	if (two.checked) {
		result3.textContent = "TWO";
	}

	if (three.checked) {
		result3.textContent = "THREE";
	}
}

// Ternary operator
// shortcut to if else
// condition ? ifTrue:ifFalse;

let a = 5;

(a >= 5) ? console.log("greater than or equal to 5!") : console.log("less than 5");

let message = (a < 5) ? "greater than or equal to 5!" : "less than 5";

console.log(message);


// logical operators
// and && 
// or ||
// not !

let temp = 20;

if (temp >= 15 && temp < 35) {
	console.log("The weather is good!")
}
else if (temp >= 35) {
	console.log("The weather is hot!")
}



// ----- WHILE LOOP -----

/*
let username = "";
while (username === "" || username === null) {
	username = window.prompt("Enter your name!");
}

console.log(username);
*/

// ----- DO WHILE -----

/*
let username; // we dont have to give an initial value to username

do {
	username = window.prompt("Enter your name!")
}
while (username == "" || username == null);
*/

// ----- FOR LOOP-----

for (let i = 0; i < 3; i++) {
	console.log(i)
}

for (let i = 0; i <= 20; i++) {
	if (i % 3 == 0) {
		continue;
	}
	else {
		console.log(i);
	}
}
