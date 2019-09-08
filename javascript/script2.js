var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var body = document.getElementById("Gradient");
var css = document.querySelector("h3");

function SetGradient() {
	body.style.background = "linear-gradient(to right,"
	 + color1.value + 
	 "," + 
	 color2.value + 
	 ")";

	 css.textContent = body.style.background + ";";
}

color1.addEventListener("input", SetGradient);

color2.addEventListener("input", SetGradient);

