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

// function savePassword(originalPassword) {
//   return function checkPassword(onCheck) {
//     return originalPassword === onCheck;
//   };
// }
// const passwordUser1 = savePassword("qwwerer");
// console.log(passwordUser1("qwwerer"));
// console.log(passwordUser1("iuyuyttr"));

// Напишите функцию для хранения скидки.Функция возвращает
//другую функцию, которая принимает сумму покупки
// //и возвращает финальную сумму с сохраненной скидкой.
// function getDiscount(discount) {
//   return function getResultOrder(order) {
//     const result = order - order * discount;
//     return result;
//   };
// }
// const getOrderDiscount10 = getDiscount(0.1);
// console.log(getOrderDiscount10(1000));

// Напишіть дві функції
//makeProduct(name, price, callback) - приймає
//ім'я та ціну товару, а також callback.
//Функція створює об'єкт товару, додаючи йому унікальний
//ідентіфікатор у властивість id та викликає callback
//передаючи йому створений об'єкт.
//showProduct(product) - коллбек, що приймає об'єкт
//продукта і логірує його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     name,
//     price,
//     id: Math.random()
//   }
//  callback(product)
// }

// const showProduct = product => console.log(product)

// makeProduct('Banana', 100, showProduct)

// Создать класс Worker у которого есть свойства name, age, salary.
//У класса Worker есть метод getSalary.
//Создать класс TopLevelWorker у которого есть свойство hierarchyLevel
//и который наследует класс Worker, добавляя метод getHierarchyLevel
//Реализовать задачу с помощью ES5 прототипов и ES6 классов

class Worker {
  constructor({ name, age, salary }) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getSalary() {
    return this.salary;
  }
}

class TopLevelWorker extends Worker {
  constructor({ name, age, salary, hierarchyLevel }) {
    super({ name, age, salary });

    this.hierarchyLevel = hierarchyLevel;
  }

  getHierarchyLevel() {
    return this.hierarchyLevel;
  }
}

const developer = new TopLevelWorker({
  name: "Mango",
  age: 78,
  salary: 4000,
  hierarchyLevel: "senior",
});

console.log(developer.getSalary());
console.log(developer.getHierarchyLevel());

// const Worker = function ({ name, age, salary }) {
//   this.name = name;
//   this.age = age;
//   this.salary = salary;
// };

// Worker.prototype.getSalary = function () {
//   return this.salary;
// };

// const TopLevelWorker = function ({ name, age, salary, hierarchyLevel }) {
//   Worker.call(this, { name, age, salary });
//   this.hierarchyLevel = hierarchyLevel;
// };

// TopLevelWorker.prototype.getSalary = Worker.prototype.getSalary;

// TopLevelWorker.prototype.getHierarchyLevel = function () {
//   return this.hierarchyLevel;
// };

// const developer = new TopLevelWorker({
//   name: "Mango",
//   age: 78,
//   salary: 4000,
//   hierarchyLevel: "senior",
// });

// console.log(developer.getSalary());
// console.log(developer.getHierarchyLevel());
