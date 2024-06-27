"use strict";

// Случайное секретное число
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Количество попыток
let score = 20;

let highscore = 0;

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
    document.querySelector(".header__number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".header__number").style.width = "25rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
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

// Перезагрузка игры

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".section__right_message").textContent =
    "Начинайте угадывать...";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#3f1616";
  document.querySelector(".header__number").style.width = "15rem";
  document.querySelector(".header__number").textContent = "?";
  document.querySelector(".section__left_guess").value = "";
});
