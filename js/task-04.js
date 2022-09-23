let counterValue = 0;
let valueEl = Number(document.querySelector("#value").textContent);

counterValue = document.querySelector("#value");

const dekrBtn = document.querySelector("#counter").firstElementChild;
const inkrBtn = document.querySelector("#counter").lastElementChild;

inkrBtn.addEventListener("click", (event) => {
  valueEl += 1;

  counterValue.innerText = valueEl;
});

dekrBtn.addEventListener("click", (event) => {
  valueEl -= 1;

  counterValue.innerText = valueEl;
});
