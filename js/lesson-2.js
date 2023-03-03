//4. Створіть об'єкт calculator з трьома методами
//read(a, b) - приймає два аргумента та зберігає їх як властивості об'єкта під ключами prop1 та prop2
//sum() перевіряє чи присутні  властивості prop1/prop2 та повертає їх суму, в противному випадку повертає null
//mult() перевіряє чи присутні  властивості prop1/prop2 та повертає їх добуток, в противному випадку повертає null
// Не забудьте, що математичні оператори працюють коректно тільки з числовими значеннями

const calculator = {
  read(a, b) {
    this.prop1 = a;
    this.prop2 = b;
  },
  sum() {
    if (this.prop1 && this.prop2) {
      return Number(this.prop1) + Number(this.prop2);
    }
    return null;
  },
  mult() {
    if (this.prop1 && this.prop2) {
      return this.prop1 * this.prop2;
    }
    return null;
  },
};

calculator.read("5", "7");

console.log(calculator);

console.log(calculator.sum());

console.log(calculator.mult());
