const screen = document.querySelector(".screen");
const calcNumVariables = { a: "", b: "" };
// Buttons
const buttonsNum = document.querySelectorAll("button");
buttonsNum.forEach(button => {
	button.addEventListener("click", () => {
		screen.value += button.textContent;
		screen.classList.add("screen-focus");
	});
});
// key listener
window.addEventListener("keydown", e => {
	if (
		(e.keyCode >= 48 && e.keyCode <= 57) ||
		(e.keyCode >= 96 && e.keyCode <= 105) ||
		e.keyCode === 190
	) {
		screen.value += e.key;
	} else if (e.keyCode === 110) {
		screen.value += ".";
	}
	screen.classList.add("screen-focus");
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

// key events
window.addEventListener("keydown", function (e, a) {
	if (e.keyCode === 107) {
		plus.classList.add("active");
		screen.value;
		a = screen.value;
		calcNumVariables.a = a;
		screen.value = "";
	} else if (e.keyCode === 109) {
		subtract.classList.add("active");
		screen.value;
		a = screen.value;
		calcNumVariables.a = a;
		screen.value = "";
	} else if (e.keyCode === 106) {
		multipler.classList.add("active");
		screen.value;
		a = screen.value;
		calcNumVariables.a = a;
		screen.value = "";
	} else if (e.keyCode === 111) {
		diviser.classList.add("active");
		screen.value;
		a = screen.value;
		calcNumVariables.a = a;
		screen.value = "";
	}
});
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
	screen.classList.remove("screen-focus");
	screen.value;
	b = screen.value.slice(0, screen.value.length - 1);
	calcNumVariables.b = b;
	screen.value = "";
	operate();
});
window.addEventListener("keydown", (e, b) => {
	if (e.keyCode === 13) {
		screen.classList.remove("screen-focus");
		screen.value;
		b = screen.value;
		calcNumVariables.b = b;
		operate();
	}
});

// Reset calc
const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", () => {
	screen.classList.remove("screen-focus");
	screen.value = "";
	calcNumVariables.a = "";
	calcNumVariables.b = "";
	const active = document.querySelector(".active");
	if (active) {
		active.classList.remove("active");
	}
});
window.addEventListener("keydown", e => {
	if (e.keyCode === 8) {
		screen.classList.remove("screen-focus");
		screen.value = "";
		calcNumVariables.a = "";
		calcNumVariables.b = "";
		const active = document.querySelector(".active");
		if (active) {
			active.classList.remove("active");
		}
	}
});
