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

//5. Напишіть код, який буде запитувати логін за допомогою prompt "Hello, please enter your login!"
// і виводити результат у консоль браузера

//Якщо під час вводу login нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "admin", то prompt запитує пароль (Please enter your password)
//Якщо користувач вводить щось відмінне від "admin", то вивести рядок "Goodbye!"

//Пароль перевіряти так:
//Якщо нажали клавішу Esc, то вивести у консоль рядок "Authorization has been cancelled"
//Якщо користувач вводить "adminPassword", то вивести у консоль рядок "Hello!"
//Якщо користувач вводить щось відмінне від "adminPassword", то вивести рядок "Goodbye!"

// const login = prompt("Hello, please enter your login!");

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

// 8. При завантаженні сторінки користувачу у prompt пропонується ввести число від 0 до 59 'Hello, enter please the number between  0 and 59'.
//Зроби перевірку на відповідність введеного числа вказаному діапазону (0-59). Якщо число не відповідає виведіть
//alert з повідомленням "The [number] is outside 0 and 59"
// Визначте в яку чверть години попаде
// це число(в першу, другу, третю чи четверту) та виведіть це повідомлення у консоль, наприклад, "Number [number] refers to 2 quarters".
// 0 - 15 1ша чверть
// 16 - 30 2га чверть
// 31 - 45 3тя чверть
// 46 - 59 4та чверть

// const value = prompt('Hello, enter please the number between  0 and 59')
// let message;
// if (value > 59 || value <0) {
//     message = `The ${value} is outside 0 and 59`;
// }
// else if (value <= 15 ) {
//     message = `Number ${value} refers to 1 quarters`;
// }
// else if (value > 15 && value <= 30) {
//     message = `Number ${value} refers to 2 quarters`;
// }
// else if (value > 30 && value <=45 ) {
//     message = `Number ${value} refers to 3 quarters`;
// }
// else {
//     message = `Number ${value} refers to 4 quarters`;
// }
// alert(message);

//---------------------------------------------------------------------

//9. Дано рядок, що складається із символів, наприклад, 'a1abcde'.
// Перевір, що першим символом цього рядка є літера 'a'.
// Якщо так - виведи 'yes' у консоль, в противному випадку виведи 'no'.

// const str = "a1abcde";

// if (str.startsWith("a1")) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

//---------------------------------------------------------------------

// 10. Напишіть функцію, яка приймає два параметри довжину і елемент-заповнювач та повертає масив з вказаною довжиною і заповнює його переданим елементом
// наприклад, виклик функції fillArray(3, 'a') має повернути масив ['a', 'a', 'a']

function foo(length, padSymbol) {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(padSymbol);
  }

  return array;
}

console.log(foo(3, "aaa"));
