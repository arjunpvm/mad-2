// ----- FUNCTIONS -----


function welcome() {
	console.log("Hello Arjun");
}

welcome();

function details(username, age) {
	console.log(`Name: ${username}`);
	console.log(`age: ${age}`);
}

details("Arjun", 23);
details("Dhesika", 24);

function add(a, b) {
	return a + b;
}

let answer = add(7, 9);

console.log(answer);

// if we dont want to store it then

console.log(add(1, 2));

function isEven(number) {
	if (number % 2 === 0) {
		return true;
	}
	else {
		return false;
	}
}
console.log(isEven(5));

// another way of doing the same\

function isEven2(number) {
	return number % 2 === 0 ? true : false;
}

console.log(isEven2(11));

// local and global variables

let user = "Arjun";
function greet() {
	console.log(user);
}

function greet2() {
	let myname = "Arjun";
	console.log(myname);
}

// in greet function the user variable is global and can be used by any functions but in the greet2 function the myname variable is defined locally inside the function and can be used by that function
