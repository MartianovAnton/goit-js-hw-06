// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const decrement = () => {
    counterValue.textContent = Number(counterValue + Number) - 1;
};
decrementBtn.addEventListener("click", decrement);
const incrementBtn = document.querySelector('button[data-action="increment"]');
const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;

};
incrementBtn.addEventListener("click", increment);