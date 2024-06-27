"use strict";

// console.log(document.querySelector('.section__right_message').textContent);
// document.querySelector('.section__right_message').textContent = 'Правильное число!';

// document.querySelector('.header__number').textContent = 11;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.section__left_guess').value = 5;

// const x = function() {
//     console.log(document.querySelector('.section__left_guess').value);
// };

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".header__number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".section__left_guess").value);

  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".section__right_message").textContent =
      "Нет числа!";
  } else if (guess === secretNumber) {
    document.querySelector(".section__right_message").textContent =
      "Вы угадали!";
    // document.querySelector(".highscore").textContent += Number(secretNumber);
  } else if (guess > secretNumber) {
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
  } else if (guess < secretNumber) {
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
