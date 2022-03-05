'use strict';

let dogNumber = Math.trunc(Math.random() * 30) + 1;
console.log(dogNumber);
let showNumber = document.querySelector('.number__value');
let image = document.querySelector('.image');
image.src = 'img/start.jpg';
let message = document.querySelector('.info-area__text');
let score = 30;
let highscore = 0;
let currentScore = document.querySelector('.current-value');
let currentHigh = document.querySelector('.best-value');

const go = document.querySelector('.button-go');
const restart = document.querySelector('.button-restart');

go.addEventListener('click', function () {
    const playerGuess = Number(document.querySelector('.player-input').value);
    if (!playerGuess || playerGuess === 0 || playerGuess < 0) {
        message.textContent = "You didn't enter anything :(";
    } else if (playerGuess === dogNumber) {
        message.textContent = 'You won!';
        image.src = 'img/win.jpg';
        showNumber.textContent = dogNumber;
        if (score > highscore) {
            highscore = score;
            currentHigh.textContent = highscore;
        }
    } else if (playerGuess !== dogNumber) {
        if (score > 1) {
            if (playerGuess > dogNumber) {
                message.textContent = "That's too much!";
                image.src = 'img/high.jpg';
                score--;
                currentScore.textContent = score;
            }
            if (playerGuess < dogNumber) {
                message.textContent = 'Not enough!';
                image.src = 'img/low.jpg';
                score--;
                currentScore.textContent = score;
            }
        } else {
            message.textContent = 'Game over!';
            image.src = 'img/gameover.jpg';
            currentScore.textContent = 0;
        }
    }
});

restart.addEventListener('click', function () {
    dogNumber = Math.trunc(Math.random() * 30) + 1;
    console.log(dogNumber);
    score = 30;
    currentScore.textContent = score;
    image.src = 'img/start.jpg';
    message.textContent = 'Start guessing...';
    showNumber.textContent = '?';
});
