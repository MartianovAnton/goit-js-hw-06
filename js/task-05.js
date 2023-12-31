// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const inputOnFocus = () => {
    if (inputEl.value.length > 0) {
        outputEl.textContent = inputEl.value;
    } else {
        inputEl.textContent = "Anonymus";

    }
   
};
inputEl.addEventListener("input", inputOnFocus);