// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

"use strict"

// Variant_1

// const password = prompt("Введите пароль")
// const ADMIN_PASSWORD = "jqueryismyjam"
// let message

// if (!password) {
//   message = "Отменено пользователем!"
// } else if (password === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!"
// } else {
//   message = "Доступ запрещен, неверный пароль!"
// }

// alert(message)

// Variant_2

const ADMIN_PASSWORD = "jqueryismyjam"
const buttonRef = document.querySelector('button[name = "btn-pass"]')
let message

buttonRef.addEventListener("click", () => {
  const passwordInputRef = document.querySelector('input[name = "password"]')
  const password = passwordInputRef.value

  if (!password) {
    message = "Отменено пользователем!"
  } else if (password === ADMIN_PASSWORD) {
    message = "Добро пожаловать!"
  } else {
    message = "Доступ запрещен, неверный пароль!"
  }

  console.log(message)
})
