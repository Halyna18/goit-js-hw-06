const controlFontEl = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

controlFontEl.oninput = function () {
	text.style.fontSize = controlFontEl.value + "px";
};
