/*
Задача 1
Нажатие на кновку "SHOW ME" должно выводить значение с поля ввода (смотрите на элементы в html-разметке)
*/

// ===================================================

// const btnEl = document.querySelector("#alertButton");
// const inputEl = document.querySelector("#alertInput");

// btnEl.addEventListener("click", onShow);

// function onShow() {
//   const value = inputEl.value;

//   if (!value) {
//     alert("Введите значение в поле!!!");
//     return;
//   }

//   alert(value);

//   clearInput();
// }

// function clearInput() {
//   inputEl.value = "";
// }

// ===================================================

/*
Задача 2
По нажатию на кнопку "SWAP ME" осуществляется обмен содержимым между двумя инпутами. 
можете понажимать на нее несколько раз или вручную сменить содержимое инпутов.
*/
// const btn = document.querySelector('#swapButton');
// const leftInput = document.querySelector('#leftSwapInput');
// const rightInput = document.querySelector('#rightSwapInput');

// btn.addEventListener('click', onChange);

// function onChange() {
//   const acc = leftInput.value;
//   leftInput.value = rightInput.value;
//   rightInput.value = acc;
// }

// ===================================================
// ===================================================

/*
Задача 3
Кнопка "Скрыть" прячет текст и заменяет название кнопки на
"Раскрыть", при повторном нажатии текст снова становится доступен
и кнопка принимает начальный вид.
*/

// const refs = {
//   hideBtn: document.querySelector('#passwordButton'),
//   input: document.querySelector('#passwordInput'),
// };

// refs.hideBtn.addEventListener('click', onHideBtnClick);

// function onHideBtnClick(e) {
//   let inputValue = refs.input.value;

//   if (refs.input.type === 'password') {
//     e.target.textContent = 'Скрыть';
//     refs.input.type = 'text';
//   } else {
//     e.target.textContent = 'Раскрыть';
//     refs.input.type = 'password';

//     refs.input.value = inputValue;
//   }
// }

// ===================================================
// ===================================================

/*
Задача 4
Кнопка "Уменьшить" делает квадрат меньше на 10 пикселей, кпопка "Увеличить" - больше на 10 пикселей.
*/

// ===================================================
const incrBtn = document.querySelector("#increase");
const decrBtn = document.querySelector("#decrease");

const square = document.querySelector("#box");

incrBtn.addEventListener("click", onSquareIncr);
function onSquareIncr() {
  const currentSize = square.offsetWidth;

  square.style.width = `${currentSize + 10}px`;
  square.style.height = `${currentSize + 10}px`;
}

decrBtn.addEventListener("click", onSquareDecr);
function onSquareDecr() {
  const currentSize = square.offsetWidth;

  square.style.width = `${currentSize - 10}px`;
  square.style.height = `${currentSize - 10}px`;
}

// ===================================================

/*
Задача 5
Навесьте слушатель по клику и определите, когда клик происходит
внутри элемента с id "place" и когда клик приходится вне зоны элемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains
*/



document.addEventListener("click", onClickBox);


function onClickBox (event) {
  // if (event.target.id === "place") {
  //  console.log("Вітаю! Ви потрапили у межі елементу!")
  // } else {
  //   console.log("Спробуйте ще раз!")
  // }

  if (document.querySelector("#place").contains(event.target)) {
    console.log("Вітаю! Ви потрапили у межі елементу!")
  } else {
      console.log("Спробуйте ще раз!")
    }

}




// ===================================================
// ===================================================

/*
Задача 6
По клику на кнопку "Удвоить" увеличить значение
в каждом элементе списка в 2 раза
*/

// ===================================================
// ===================================================

/*
Задача 7
При клике на круг он должен следовать за курсором.
При повторном клике он становится в начальное положение.
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY
*/

// ===================================================
// ===================================================

/*
Задача 8
При клике на каждую из кнопок суммируются значения с data-атрибутов.
По нажатию на кнопку "Вывести результат" выводится сумма значения, а также статистика с
информацией о том, какая кнопка была нажата сколько раз.
*/

// ===================================================
// ===================================================

/*
Задача 9
Удали из списка те элементы, которые отмечены.
*/

// ===================================================
// ===================================================

/*
Задача 10
Дан список людей. Сделай возможность сортировки списка по имени и по фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 11
Дан список людей. Сделай фильтр по имени/фамилии.
*/

// ===================================================
// ===================================================

/*
Задача 12
Клик по кнопке заменяет символ с первого поля ввода 
на символ со второго поля ввода во всем тексте.
Если одно из полей пустое, вызывай alert с просьбой заполнить их.
*/

// ===================================================
// ===================================================

/*
Задача 13
Круг должен изчезать при наведении на него.
При этом позиция соседних кругов должна оставаться прежней.
*/
