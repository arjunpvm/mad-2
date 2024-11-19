let calculate = document.getElementById("calculate");

calculate.onclick = function() {
	let exp = document.getElementById("exp");
	exp = eval(exp.value);
	document.getElementById("exp").value = exp;
	console.log(exp);
}

