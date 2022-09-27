let inputEl = document.querySelector("#name-input");
inputEl.addEventListener("input", onInputChange);

let outputEl = document.querySelector("#name-output");

function onInputChange(event) {
	const { value } = event.currentTarget;
	outputEl.innerText = value === '' ? 'Anonymous' : value;
}
