// Math

console.log(Math.PI);
console.log(Math.E);

let x = 3.64;
let y = 5;
let z = 2;
let z1 = -1.53

let a = Math.round(x);
let b = Math.floor(x); // will bound to 3 even if x = 3.99
let c = Math.ceil(x); // will bound to 4 even if x = 3.01
let d = Math.pow(y, z); // returns y to the power of x
let e = Math.trunc(x); // removes decimal values
let f = Math.sqrt(z);
let g = Math.log(z);
let h = Math.sin(z);
let i = Math.cos(z);
let j = Math.tan(z);
let k = Math.abs(z1); // returns positive value of a number
let l = Math.sign(z); // returns 1 for positive numbers, 0 for 0, -1 for negative numbers
let m = Math.max(x, y, z); // min also works


console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);
console.log(i);
console.log(j);
console.log(k);
console.log(l);
console.log(m);

let randomNum = Math.random(); // creates random num between 0 and 1 

console.log(randomNum)

let result = document.getElementById("ranNum");

document.getElementById("generate").onclick = function(){
	let min = Number(document.getElementById("min").value);
	let max = Number(document.getElementById("max").value);
	let random = Math.round((Math.random() * (max - min)) + min);
	result.textContent = random;
}


