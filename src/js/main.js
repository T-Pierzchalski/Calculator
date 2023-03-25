const screen = document.querySelector(".screen");
const calcNumVariables = { a: "", b: "" };
// Buttons
const buttonsNum = document.querySelectorAll("button");
buttonsNum.forEach(button => {
	button.addEventListener("click", () => {
		screen.value += button.textContent;
	});
});
const buttonsFunctional = document.querySelectorAll(".functional");
buttonsFunctional.forEach(function (button) {
	button.addEventListener("click", function (a) {
		this.classList.add("active");
		screen.value;
		a = screen.value.slice(0, screen.value.length - 1);
		calcNumVariables.a = a;
		screen.value = "";
		button.removeEventListener("click", this);
	});
});
const equalButton = document.querySelector(".equal-button");

// Single functions button
const plus = document.querySelector(".plus");
const subtract = document.querySelector(".subtract");
const multipler = document.querySelector(".multipler");
const diviser = document.querySelector(".diviser");
const percentager = document.querySelector(".percentager");
const squareRooter = document.querySelector(".squareRooter");
const exponentiator = document.querySelector(".exponentiator");

// Calculator functions \\
function addition() {
	screen.value = +calcNumVariables.a + +calcNumVariables.b;
}

function subtraction() {
	screen.value = +calcNumVariables.a - +calcNumVariables.b;
}

function multiplication() {
	screen.value = +calcNumVariables.a * +calcNumVariables.b;
}

function division() {
	screen.value = +calcNumVariables.a / +calcNumVariables.b;
}

function percentage(a, b) {
	screen.value = (calcNumVariables.a / calcNumVariables.b) * 100 + "%";
}

function squareRoot(a) {
	screen.value = Math.sqrt(calcNumVariables.a);
}

function exponentiation(a, b) {
	screen.value = calcNumVariables.a ** calcNumVariables.b;
}

// Calculator
function operate() {
	if (plus.classList.contains("active")) {
		addition();
	} else if (subtract.classList.contains("active")) {
		subtraction();
	} else if (multipler.classList.contains("active")) {
		multiplication();
	} else if (diviser.classList.contains("active")) {
		division();
	} else if (percentager.classList.contains("active")) {
		percentage();
	} else if (squareRooter.classList.contains("active")) {
		squareRoot();
	} else if (exponentiator.classList.contains("active")) {
		exponentiation();
	} else {
		screen.value = "Error";
	}
	const active = document.querySelector(".active");
	active.classList.remove("active");
}

equalButton.addEventListener("click", function (b) {
	screen.value;
	b = screen.value.slice(0, screen.value.length - 1);
	calcNumVariables.b = b;
	screen.value = "";
	operate();
});

// function isEqual() {}

// Reset calc
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
	screen.value = "";
	calcNumVariables.a = "";
	calcNumVariables.b = "";
	const active = document.querySelector(".active");
	if (active) {
		active.classList.remove("active");
	}
});
