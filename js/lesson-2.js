//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

// const calculator = {
//   read(a, b) {
//     this.prop1 = a;
//     this.prop2 = b;
//   },
//   sum() {
//     if (this.prop1 && this.prop2) {
//       return Number(this.prop1) + Number(this.prop2);
//     }
//     return null;
//   },
//   mult() {
//     if (this.prop1 && this.prop2) {
//       return this.prop1 * this.prop2;
//     }
//     return null;
//   },
// };

// calculator.read("5", "7");

// console.log(calculator);

// console.log(calculator.sum());

// console.log(calculator.mult());

//--------------------------------------------------------------------------------

//6. Напишіть функцію updateObject, яка приймає об'єкт та перелік ключів
//і повертає новий об'єкт без вказаних властивостей
//Очікуваний результат ({ a: 1, b: 2, c: 3 }, 'b', 'c') => {a: 1}

// const obj = { a: 1, b: 2, c: 3 };

// function updateObject(object, ...args) {
//   const newObject = { ...object };
//   const keys = Object.keys(newObject);

//   args.forEach((el) => {
//     if (keys.includes(el)) {
//       delete newObject[el];
//     }
//   });

//   return newObject;
// }

// const result = updateObject(obj, "b", "c");

// console.log(result);


//1. Напишіть скрипт, який для об'єкта user, послідовно:
//1 додасть властивість mood зі значенням 'happy'
//2 замінить значення властивості hobby на 'skydiving'
//3 замінить значення властивості premium на false
//4 використовуючи Object.keys() и for...of, виведе у консоль зміст об'єкта users у форматі:
//name: John
//"age: 20"
//"hobby: skydiving"
//"premium: false"
//"mood: happy"

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for(const key of keys){
console.log(`${key} : ${user[key]}`)
}