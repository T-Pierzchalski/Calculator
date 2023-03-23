const screen = document.querySelector(".screen");

// Buttons
const buttonsNum = document.querySelectorAll("button");
buttonsNum.forEach(button => {
	button.addEventListener("click", () => {
		screen.value += button.textContent;
	});
});
const buttonsFunctional = document.querySelectorAll(".functional");
buttonsFunctional.forEach(button => {
	button.addEventListener("click", a => {
		screen.value;
		a = screen.value.slice(0, screen.value.length - 1);
		screen.removeAttribute("placeholder");
		screen.value = "";
		console.log(a);
	});
	button.addEventListener("click", b => {
		screen.value;
		b = screen.value.slice(0, screen.value.length - 1);
		console.log(b);
	});
});
const equalButton = document.querySelector(".equal-button");

// Calculator functions \\
function addition() {
	screen.value = a + b;
}

function subtraction(a, b) {
	return (screen.value = a - b);
}

function multiplication(a, b) {
	return (screen.value = a * b);
}

function division(a, b) {
	return (screen.value = a / b);
}

function percentage(a, b) {
	return (screen.value = (a / b) * 100 + "%");
}

function squareRoot(a) {
	return (screen.value = Math.sqrt(a));
}

function exponentiation(a, b) {
	return (screen.value = a ** b);
}

// Calculator
function operate() {}

equalButton.addEventListener("click", () => {
	operate();
});

// function isEqual() {}

// Reset calc
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
	screen.value = "";
});
