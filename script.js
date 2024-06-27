"use strict";

// console.log(document.querySelector('.section__right_message').textContent);
// document.querySelector('.section__right_message').textContent = 'Правильное число!';

// document.querySelector('.header__number').textContent = 11;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.section__left_guess').value = 5;

// const x = function() {
//     console.log(document.querySelector('.section__left_guess').value);
// };
// Случайное секретное число
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Количество попыток
let score = 20;
// Присвоение секретного числа вместо ?
document.querySelector(".header__number").textContent = secretNumber;

// Функция для обработки события клик
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".section__left_guess").value);

  console.log(guess, typeof guess);

  // Когда на входе не получаем данные
  if (!guess) {
    document.querySelector(".section__right_message").textContent =
      "Нет числа!";
  }

  // Когда угадали число
  else if (guess === secretNumber) {
    document.querySelector(".section__right_message").textContent =
      "Вы угадали!";
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.header__number').style.width = '25rem';
  }

  // Когда загаданное число меньше
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".section__right_message").textContent =
        "Загаданное число меньше вашего!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".section__right_message").textContent =
        "Попытки закончились! Вы проиграли!";
      document.querySelector(".score").textContent = 0;
    }
  }

  // Когда загаданное число больше
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".section__right_message").textContent =
        "Загаданное число больше вашего!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".section__right_message").textContent =
        "Попытки закончились! Вы проиграли!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
