let a = +prompt("First operand:", "5");
let operation = prompt("Math operation:", "sum");
let b = +prompt("Second operand:", "5");



function Calc(operation, a, b) {
	if (!a && a !== 0 || !b && b !== 0 || !operation) {
		return "Error";
	}
	if (operation == "sum") {
		return a + b;
	}
	else if (operation == "sub") {
		return a - b;
	}
	else if (operation == "multi") {
		return a * b;
	}
	else if (operation == "div") {
		return a / b;
	}
	else if (operation == "pow") {
		return a ** b;
	}
	else if (operation == "mod") {
		return a % b;
	}
	else {
		return "Unknown operation";
	}
}

alert(Calc(operation, a, b));