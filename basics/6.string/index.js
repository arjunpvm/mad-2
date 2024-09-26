console.log("Hello")
let name1 = "Dhesika";
let name2 = "Baba"

console.log(name1.charAt(0));
console.log(name1.indexOf("e"));
console.log(name2.lastIndexOf("a"));
console.log(name1.length);
console.log(name1.trim()); // removes whitespace from both edges
console.log(name1.toUpperCase());
console.log(name1.repeat(3));
console.log(name1.startsWith("D"));
// useful in if methods

let result = name1.startsWith("D") // endsWith("") also works

if (result) {
	console.log("The name starts with 'D'")
}
else {
	console.log("The name doesn't start with 'D'")
}
console.log(name1.includes(" ")); // returns if the string has space in it

console.log(name2.replaceAll("a", "o"));
console.log(name1.padStart(10, "a")); // padStart(n, "a") makes a string into a n character string by putting m number of "a" at the start

// padEnd puts "a" at the end 
//
//
// StringSlicing

let fullname = "Dhesika Arjun";

console.log(fullname.slice(0, 7));
console.log(fullname.slice(8)); // slices from the index given to the end of the file
console.log(fullname.slice(-1));
console.log(fullname.slice(-5));
console.log(fullname.slice(0, fullname.indexOf(" "))); // better way of finding first name
console.log(fullname.slice(fullname.indexOf(" ") + 1));

let email = "arjun@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username);


// method chaining - calling one method after another continuously in one line
// combining methods to reduce the lines of code and unnecessary variables

// ---------- without method chaining ----------

let userid = window.prompt("Enter your userid");

userid = userid.trim();
let extraChars = userid.slice(1);
let firstChar = userid.charAt(0);

extraChars = extraChars.toLowerCase();
firstChar = firstChar.toUpperCase()

userid = firstChar + extraChars;

console.log(userid);

// ---------- with method chaining ----------

userid = userid.trim().charAt(0).toUpperCase() + userid.trim().slice(1).toLowerCase();

console.log(userid);
