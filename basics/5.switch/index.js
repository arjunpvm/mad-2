console.log("Hello");


day = 0;

switch (day) {
	case 1:
		console.log("Today is Monday!");
		break;
	case 2:
		console.log("Today is Tuesday!");
		break;
	case 3:
		console.log("Today is Wednesday!");
		break;
	case 4:
		console.log("Today is Thursday!");
		break;
	case 5:
		console.log("Today is Friday!");
		break;
	case 6:
		console.log("Today is Saturday!");
		break;
	case 7:
		console.log("Today is Sunday!");
		break;
	default:
		console.log(`${day} is not a day!!`);
}

// we can also use conditions inside switch like this

let score = 63;
let grade;

switch (true) {
	case score >= 90:
		grade = "S";
		break;
	case score >= 80:
		grade = "A"
		break;
	case score >= 70:
		grade = "B";
		break;
	case score >= 60:
		grade = "C";
		break;
	case score >= 50:
		grade = "D";
		break;
	case score >= 40:
		grade = "E";
		break;
	case score < 40:
		grade = "RA";
		break;
}

console.log(grade);
