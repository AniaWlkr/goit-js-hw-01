// Пользователь может оформить доставку товара к себе в страну,
// указав ее при посещении страницы в prompt.Учти, пользователь может ввести имя страны
// не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй switch.Формат сообщения: 'Доставка в [страна] будет стоить [цена]
// кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение
// 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

//   Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

"use strict"

// Variant_1
const country = prompt("Укажите страну доставки")
let price = 0

if (!country) {
  alert("Отменено пользователем");
}
else {
  const countryNormalized = country[0].toUpperCase() + country.slice(1).toLowerCase()

  // let countryNormalized = ""
  // for (let i = 0; i < country.length; i += 1) {
  //   if (i === 0) countryNormalized = country[i].toUpperCase()
  //   else countryNormalized += country[i].toLowerCase()
  // }

  switch (countryNormalized) {
    case "Китай":
      price = 100
      break
    case "Чили":
      price = 250
      break
    case "Австралия":
      price = 170
      break
    case "Индия":
      price = 80
      break
    case "Ямайка":
      price = 120
      break
  }

  if (price) alert(`Доставка в ${countryNormalized} будет стоить ${price} кредитов`)
  else alert("В вашей стране доставка недоступна")
}
// Variant_2

// let price = 0
// const buttonRef = document.querySelector('button[name = "btn-country"]')

// buttonRef.addEventListener("click", () => {
//   const countryInputRef = document.querySelector('input[name = "country"]')
//   if (countryInputRef.value) {
//     const country = countryInputRef.value[0].toUpperCase() + countryInputRef.value.slice(1).toLowerCase()
//     console.log(country)

//     switch (country) {
//       case "Китай":
//         price = 100
//         break
//       case "Чили":
//         price = 250
//         break
//       case "Австралия":
//         price = 170
//         break
//       case "Индия":
//         price = 80
//         break
//       case "Ямайка":
//         price = 120
//         break
//     }

//     if (price) console.log(`Доставка в ${country} будет стоить ${price} кредитов`)
//     else console.log("В вашей стране доставка недоступна")
//   } else console.log("Отменено пользователем")
// })
