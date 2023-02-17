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

// const value = Number(prompt("Enter the number of minutes to format"));

// const hours = String(Math.floor(value / 60)).padStart(2, "0");

// const minutes = String(value % 60).padStart(2, "0");

// console.log(`${hours}:${minutes}`);
//---------------------------------------
//3. Напишіть цикл, який виведе в консоль усі парні числа від max до min включно по зменшенню
// const min = 1;
// const max = 12;
// for (let index = max; index >= min; index -= 1) {
//     if (!(index % 2)) {
//         console.log(index)
//     }
    
// }

//4. За допомогою циклу for знайдіть добуток (результат множення) усіх парних чисел у проміжку від min до max включно

// const min = 1;
// const max = 7;
// let result = 1;
// for (let index = min; index <= max; index += 1) {
//  if (index % 2 === 0) {
//   result *= index;
//  }
// }
// console.log(result);

