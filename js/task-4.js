// На счету пользователя есть 23580 кредитов, значение хранится в переменной credits
// (создай и присвой).Пользователь решает купить ремонтных дроидов,
// которые стоят по 3000 кредитов за штуку.Цена одного дроида
// хранится в переменной pricePerDroid(создай и присвой).

// При посещении страницы, используя prompt, необходимо спросить количество дроидов
// которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение
// 'Отменено пользователем!'.
// В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice.
// Проверяет сможет ли пользователь оплатить заказ:
// если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение
// 'Недостаточно средств на счету!'.
// в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'.

"use strict"

// Variant_1

// let credits = 23580
// const pricePerDroid = 3000

// const droidQty = prompt("Какое количество дроидов хотите купить?")

// if (!droidQty) {
//   alert("Отменено пользователем!")
// } else {
//   const totalPrice = pricePerDroid * Number(droidQty)
//   if (totalPrice > credits) {
//     alert("Недостаточно средств на счету!")
//   } else {
//     credits = credits - totalPrice
//     alert(`Вы купили ${droidQty} дроидов, на счету осталось ${credits} кредитов.`)
//   }
// }

"use strict"

//Variant-2

let credits = 23580
const pricePerDroid = 3000
let message
const buttonRef = document.querySelector('button[name = "btn-purchase"]')

buttonRef.addEventListener("click", () => {
  const droidQtyInputRef = document.querySelector('input[name = "droid-qty"]')
  const droidQty = droidQtyInputRef.value

  if (!droidQty) {
    message = "Отменено пользователем!"
  } else {
    const totalPrice = pricePerDroid * Number(droidQty)
    if (totalPrice > credits) {
      message = "Недостаточно средств на счету!"
    } else {
      credits = credits - totalPrice
      message = `Вы купили ${droidQty} дроидов, на счету осталось ${credits} кредитов.`
    }
  }

  console.log(message)
})
