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

//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

const login = prompt("Hello, please enter your login!");

// if (!login) {
//   console.log("Authorization has been cancelled");
// } else if (login === "admin") {
//   const password = prompt("Please enter your password");
//   if (!password) {
//     console.log("Authorization has been cancelled");
//   } else if (password === "adminPassword") {
//     console.log("Hello!");
//   } else {
//     console.log("Goodbye!");
//   }
// } else {
//   console.log("Goodbye!");
// }

// switch (login) {
//   case null:
//     console.log("Authorization has been cancelled");
//     break;

//   case "admin":
//     const password = prompt("Please enter your password");

//     switch (password) {
//       case null:
//         console.log("Authorization has been cancelled");
//         break;

//       case "adminPassword":
//         console.log("Hello!");
//         break;

//       default:
//         console.log("Goodbye!");

//         break;
//     }
//     break;

//   default:
//     console.log("Goodbye!");

//     break;
// }
