//1. Використовуючи функцію if...else,
//напишіть код, який буде запитувати:
//"What is the official name of JavaScript?"
//Якщо користувач ввів "ECMAScript",
//то показувати через alert: "True!"
//у противному випадку показати:"Don't you know? ECMAScript!"

// const message = prompt('What is the official name of JavaScript?');

// if (message === 'ECMAScript') {
//   alert('True!');
// } else {
//   alert("Don't you know? ECMAScript!");
// }

// const result = message === 'ECMAScript' ? 'True!' : "Don't you know? ECMAScript!";

// alert(result);

//---------------------------------------

//2. Напишіть програму, яка запитає у користувача "Enter the number of minutes to format"
//число (кількість хвилин) і виведе в консоль
//рядок у форматі годин і хвилин, тобто 70 має повернути у консоль "01:10"

const value = Number(prompt("Enter the number of minutes to format"));

const hours = String(Math.floor(value / 60)).padStart(2, "0");

const minutes = String(value % 60).padStart(2, "0");

console.log(`${hours}:${minutes}`);
