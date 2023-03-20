//  Напишіть функцію makeShef(shefName), яка повертає функцію
//makeDish(dish), яка памятає ім'я шефа під час її виклику
//Функція makeDish має логіровать "<shef> is cooking <dish>"

// function makeShef(shefName) {
//   function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   }

//   return makeDish;
// }

// const cucumberCooking = makeShef("Cucumber");
// cucumberCooking("pizza");
// cucumberCooking("pasta");
// cucumberCooking("potato");

// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка лічить і виводе в консоль кількість своїх викликів

// function makeCounter() {
//   let accumulator = 0;

//   return function counter() {
//     accumulator += 1;
//     console.log(accumulator);
//   };
// }

// const counterVariable = makeCounter();
// counterVariable();
// counterVariable();
// counterVariable();

// --------------------------------
// Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает

function savePassword(originalPassword) {
  return function checkPassword(onCheck) {
    return originalPassword === onCheck;
  };
}
const passwordUser1 = savePassword("qwwerer");
console.log(passwordUser1("qwwerer"));
console.log(passwordUser1("iuyuyttr"));
