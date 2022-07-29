/* global data */

var $car = document.querySelector('.car-size');

function changeDirection(event) {
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
  }
}

window.addEventListener('keydown', changeDirection);
