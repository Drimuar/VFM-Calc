let a = +prompt("First operand:", "5");
let operation = prompt("Math operation:", "sum");
let b = +prompt("Second operand:", "5");



function Calc(operation, a, b) {
	if (!a && a !== 0 || !b && b !== 0 || !operation) {
		return "Error";
	}
	switch (operation) {
		case "sum":
			return a + b;
		case "sub":
			return a - b;
		case "multi":
			return a * b;
		case "div":
			return a / b;
		case "pow":
			return a ** b;
		case "mod":
			return a % b;
		default:
			return "Unknown operation";
	}
}

alert(Calc(operation, a, b));

