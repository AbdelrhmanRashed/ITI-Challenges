var img = document.querySelector("img");
var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var play = document.querySelector("#play");
var pause = document.querySelector("#stop");

var counter = 1;
var slide;

function moveNext() {
  counter++;
  if (counter > 6) counter = 1;
  img.src = `Images/${counter}.png`;
}

function movePrev() {
  counter--;
  if (counter < 1) counter = 6;
  img.src = `Images/${counter}.png`;
}

function slider() {
  slide = setInterval(moveNext, 1000);
}

function stopSlider() {
  clearInterval(slide);
}

next.addEventListener("click", moveNext);
prev.addEventListener("click", movePrev);
play.addEventListener("click", slider);
pause.addEventListener("click", stopSlider);
