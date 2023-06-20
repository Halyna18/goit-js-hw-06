const inputEl = document.getElementById("validation-input");
inputEl.addEventListener("blur", onBlurBorderColor);

function onBlurBorderColor(event) {
	const inputDataLength = Number(inputEl.dataset.lenght);
	const inputValueLenght = Number(inputEl.value.trim().lenght);
	if (inputValueLenght === inputDataLength) {
		inputEl.classList.add("valid");
		inputEl / classList.remove("invalid");
	} else {
		inputEl.classList.remove("valid");
		inputEl.classList.add("invalid");
	}
}
