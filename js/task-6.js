// Напиши скрипт который просит посетителя ввести число в prompt до тех пор,
// пока посетитель на нажмет Cancel и каждый раз добавляет введенное значение к общей сумме.

// При загрузке страницы пользователю предлагается в prompt ввести число.Ввод добавляется
// к значению переменной total.
// Операция ввода числа продолжается до тех пор, пока пользователь не нажмет кнопку Cancel
// в prompt.
// После того как пользователь прекратил ввод нажав кнопку Cancel, показать alert со строкой
// 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный
// набор символов, не нужно.Если хочешь, в случае некорректного ввода,
// показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt плюсовать к общей сумме не нужно,
// после чего снова пользователю предлагается ввести число в prompt.

// let input;
// let total = 0;

"use strict"

//Variant-1

// let input
// let total = 0

// while (true) {
//   input = prompt("Укажите число")

//   if (!input) break

//   input = Number(input)

//   if (Number.isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз")
//   } else {
//     total += input
//   }
// }
// alert(`Общая сумма чисел равна ${total}`)

//Variant-2

let total = 0;
const buttonConfirmRef = document.querySelector('button[name = "btn-confirm"]');
const buttonCancelRef = document.querySelector('button[name = "btn-cancel"]');

buttonConfirmRef.addEventListener("click", () => {
  const inputRef = document.querySelector('input[name = "number"]');
  let input = inputRef.value;
  document.querySelector('input[name = "number"]').value = "";

  if (!input) input = 0;
  total += Number(input);
})

buttonCancelRef.addEventListener("click", () => {
  console.log(`Общая сумма чисел равна ${total}`);
  total = 0;
})

