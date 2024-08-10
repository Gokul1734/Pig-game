'use strict';

let dice = 0;
let dice1 = 0;
let val = 'current--0';

// const player1 = document.querySelector('.player--0');
// const player2 = document.querySelector('.player--1');

function roller1() {
  const diceNumber = Number(Math.trunc(Math.random() * 6 + 1));

  document.querySelector('.dice').src = `dice-${diceNumber}.png`;
  dice += diceNumber;
  document.getElementById(val).textContent = dice;

  if (diceNumber === 1) {
    swap();
  }
}

function roller2() {
  const diceNumber1 = Number(Math.trunc(Math.random() * 6 + 1));

  document.querySelector('.dice').src = `dice-${diceNumber1}.png`;

  dice1 += diceNumber1;
  document.getElementById(val).textContent = dice1;

  if (diceNumber1 === 1) {
    swap();
  }
}

document.querySelector('.btn--roll').addEventListener('click', function () {
  if (val === 'current--0') {
    roller1();
  } else if (val === 'current--1') {
    roller2();
  }
});

function swap() {
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');

  if (val === 'current--0') {
    // document.getElementById('score--0').textContent -= Number(dice) * -1;
    document.getElementById('current--0').textContent = 0;
    val = 'current--1';
    dice = 0;
  } else if (val === 'current--1') {
    // document.getElementById('score--1').textContent -= dice1 * -1;
    document.getElementById('current--1').textContent = 0;
    val = 'current--0';
    dice1 = 0;
  }
}

document.querySelector('.btn--hold').addEventListener('click', function () {
 if (val === 'current--0') {
  document.getElementById('score--0').textContent -= Number(dice) * -1;
 } else if (val === 'current--1') {
  document.getElementById('score--1').textContent -= dice1 * -1;
 }
  swap();
});

document.querySelector('.btn--new').addEventListener('click', function () {
  dice = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
});

document.addEventListener('keydown', function (event) {
  if (
    document.querySelector('.player--0').classList.contains('player--active') &&
    event.key === 'w'
  ) {
    roller1();
  } else if (
    document.querySelector('.player--1').classList.contains('player--active') &&
    event.key == 'ArrowUp'
  ) {
    roller2();
  }
});

// if (document.querySelector('.player--0').contains('active')) {
//   console.log('player 1');
// } else if (document.querySelector('.player--1').contains('active')) {
//   console.log('player 2');
// }

console.log(dice);

console.log('Hello There !!');
console.log('Hi Everyone !!');
console.log(dice);
