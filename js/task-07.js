let textZoom = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

textZoom.value = 16;
textZoom.addEventListener('input', (magic) => {text.style.fontSize = textZoom.value + 'px'})
