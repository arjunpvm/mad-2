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

let fullname = "Dhesika Arjun"
