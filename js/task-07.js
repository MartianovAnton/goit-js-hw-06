// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>


const inputFontsizeControlEl = document.querySelector("#font-size-control");
const textSpanEl = document.querySelector("#text");

textSpanEl.style.fontSize = inputFontsizeControlEl.value + "px";

const textSpanResizing = () => {
  textSpanEl.style.fontSize = `${inputFontsizeControlEl.value}px`;
};
inputFontsizeControlEl.addEventListener("input", textSpanResizing);