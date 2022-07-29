/* global data */

var $car = document.querySelector('.car-size');
var intervalId = null;

function keyPress(event) {
  if (event.keyCode === 39) {
    $car.className = 'car-size';
    data.direction = 'right';
  } else if (event.keyCode === 40) {
    $car.className = 'car-size facing-down';
    data.direction = 'down';
  } else if (event.keyCode === 37) {
    $car.className = 'car-size facing-left';
    data.direction = 'left';
  } else if (event.keyCode === 38) {
    $car.className = 'car-size facing-up';
    data.direction = 'up';

  } if (event.keyCode === 32 && data.start === false) {
    // eslint-disable-next-line no-unused-vars
    intervalId = setInterval(start, 5);
    data.start = true;
  } else if (event.keyCode === 32 && data.start === true) {
    clearInterval(intervalId);
    data.start = false;
  }
}

window.addEventListener('keydown', keyPress);

function start() {
  data.x = data.x + 1;
  $car.style.left = data.x + 'px';
}
