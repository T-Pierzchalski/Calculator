const screen = document.querySelector(".screen");
const para = document.createElement("p");
para.textContent = "pozdro";
function writeOnScreen() {
	screen.appendChild(para);
}

writeOnScreen();
