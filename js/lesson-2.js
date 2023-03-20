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

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);

// for(const key of keys){
// console.log(`${key} : ${user[key]}`)
// }

// ----------------------------------------------------------------------
//2. Є об'єкт, в якому зберігаються зарплати команди. Напишіть функцію getTotalSalary, яка буде повертати загальну суму зарплат. Якщо об'єкт пустий, то функція має повернути 0

// const salaries = {
//   mango: 100,
//   poly: 160,
//   ajax: 1470,
// };

// let result = 0;

// function getTotalSalary() {
//   const values = Object.values(salaries);
//   for (const value of values) {
//     result += value;

//   }
//     return result

//   }
// console.log(getTotalSalary());

//3. Напишіть фукцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і рядок з назвою каменю.
//Функція обчислює і повертає загальну вартість каменів з таким іменем

// const stones = [
//   { name: "emerald", price: 1300, quantity: 4 },
//   { name: "diamond", price: 2700, quantity: 6 },
//   { name: "sapphire", price: 400, quantity: 7 },
//   { name: "rubble", price: 150, quantity: 100 },
// ];

// let totalPrice = 0;
// function calcTotalPrice(stones, stonesName){
// for(const ston of stones){
//   if(ston.name === stonesName){
//     totalPrice = ston.price * ston.quantity;
//   }
// }
// return totalPrice;
// }

// console.log(calcTotalPrice(stones, "sapphire"));

//-------------------------------------------------------

// 8. Напиши скрипт керування особистим кабінетом інтернет банку.
//Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією трансакцій
//Типів трансакцій усього два. Можна поповнити рахунок або списати з нього гроші.
//
// const TYPES_TRANSACTION = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// }
//Кожна трансакція має мати властивості: id, type, amount.

// const account = {
//   //поточний баланс рахунку
//   balance: 0,
//   //Історія трансакцій
//   transactions: [],
//   //Метод приймає суму та тип трансакції
//   //створює об'єкт трансакції за зразком {id, type, amount}
//   //додає його у масив трансакцій
//   //в залежності від типу трансакції викликає методи, які відповідають за збільшення/зменшення балансу
//   createTransaction(type, amount) {
//
//   },
//   //Метод приймає суму трансакції і відповідає за додавання суми до балансу.
//   deposit(amount) {
//
//   },
//   //Метод приймає суму трансакції і відповідає за додавання суми до балансу.
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення в консоль про те, що недостатньо коштів на рахунку [You don't have enough funds in your account] і повертаємо null
//   withdraw(amount) {
//
//   },
//   //Метод повертає поточний баланс
//   getBalance() {
//
//   },
//   //Метод шукає та повертає об'єкт трансакції по id
// getTransactionDetails(idForSearch) {

// },
//Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
// getTotalSumByType(type) {

// },

// }

// const TYPES_TRANSACTION = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   id: 0,
//   //поточний баланс рахунку
//   balance: 0,
//   //Історія трансакцій
//   transactions: [],
//   //Метод приймає суму та тип трансакції
//   //створює об'єкт трансакції за зразком {id, type, amount}
//   //додає його у масив трансакцій
//   //в залежності від типу трансакції викликає методи, які відповідають за збільшення/зменшення балансу
//   createTransaction(type, amount) {
//     this.id += 1;

//     const dataTrans = {};
//     dataTrans.id = this.id;
//     dataTrans.type = type;
//     dataTrans.amount = amount;
//     dataTrans.status = false;

//     if (type === TYPES_TRANSACTION.DEPOSIT) {
//       this.deposit(amount);
//       dataTrans.status = true;
//       this.transactions.push(dataTrans);

//       return;
//     }

//     if (type === TYPES_TRANSACTION.WITHDRAW) {
//       const isValid = this.withdraw(amount);

//       if (isValid) {
//         dataTrans.status = true;
//         this.transactions.push(dataTrans);
//         return;
//       }

//       this.transactions.push(dataTrans);
//       return;
//     }
//   },
//   //Метод приймає суму трансакції і відповідає за додавання суми до балансу.
//   deposit(amount) {
//     this.balance += amount;
//   },
//   //Метод приймає суму трансакції і відповідає за віднімання суми до балансу.
//   //Якщо amount більше ніж поточний баланс, виводимо повідомлення в консоль про те, що недостатньо коштів на рахунку [You don't have enough funds in your account] і повертаємо null
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log("You don't have enough funds in your account");

//       return null;
//     }

//     this.balance -= amount;
//     return true;
//   },
//   //Метод повертає поточний баланс
//   getBalance() {
//     return this.balance;
//   },
//   //Метод шукає та повертає об'єкт трансакції по id
//   getTransactionDetails(idForSearch) {
//     return this.transactions.find((el) => el.id === idForSearch);
//   },

//   //Метод повертає загальну суму трансакції певного типу із всієї історії трансакцій
//   getTotalSumByType(type) {
//     return this.transactions
//       .filter((el) => el.type === type && el.status)
//       .reduce((acc, el) => (acc += el.amount), 0);
//   },
// };

// account.createTransaction(TYPES_TRANSACTION.DEPOSIT, 2000);
// account.createTransaction(TYPES_TRANSACTION.DEPOSIT, 5000);
// account.createTransaction(TYPES_TRANSACTION.WITHDRAW, 2000000);
// account.createTransaction(TYPES_TRANSACTION.DEPOSIT, 4000);
// account.createTransaction(TYPES_TRANSACTION.WITHDRAW, 10000);
// account.createTransaction(TYPES_TRANSACTION.DEPOSIT, 1000);
// account.createTransaction(TYPES_TRANSACTION.WITHDRAW, 1000);
// // console.log(account.getBalance());

// // console.log(account.getTransactionDetails(1));

// console.log(account.getTotalSumByType(TYPES_TRANSACTION.WITHDRAW));
