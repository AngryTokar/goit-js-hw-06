let inputEl = document.querySelector("#validation-input");

let Number = inputEl.dataset.length;

const input = document.querySelector("input");
inputEl.addEventListener("change", (e) => {
  const text = e.target.value;

  if (text.length === +Number) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
