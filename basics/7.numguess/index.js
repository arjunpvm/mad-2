let submit = document.getElementById("submit");
let random_number;
submit.onclick = function() {
	let min = Number(document.getElementById("min").value);
	let max = Number(document.getElementById("max").value);
	random_number = Math.round((Math.random() * (max - min)) + min);
}

let button = document.getElementById("button");
let result = document.getElementById("result");
let guessed = false;
button.onclick = function() {
	let number = Number(document.getElementById("number").value);
	if (random_number == number) {
		result.textContent = "You guessed the number!"
		guessed = true;
	}
	else {
		result.textContent = "Your guess is wrong. Please try again"
	}

}
