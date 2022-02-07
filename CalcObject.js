// let a = prompt("First operand:", "5");
// let operation = prompt("Math operation:", "sum");
// let b = prompt("Second operand:", "5");



function Calc(operation, a, b) {
	a = +a;
	b = +b;
	const isNotValid = !a && a !== 0 || !b && b !== 0 || !operation;
	if (isNotValid) return "Error";

	let operations = {
		sum: a + b,
		sub: a - b,
		multi: a * b,
		div: a / b,
		pow: a ** b,
		mod: a % b
	}
	return operations[operation];
}

console.log(Calc("sum", 5, 5));
console.log(Calc("sub", 5, 15));
console.log(Calc("div", 10, 3));
console.log(Calc("pow", 2, 5));
console.log(Calc("mod", 10, 3));
console.log(Calc("sum", 5, "abc"));



// alert(Calc(operation, a, b));

