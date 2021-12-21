var square = document.getElementById("square");

function blueSquare () {
    square.style.backgroundColor = "blue"
}
function redSquare () {
    square.style.backgroundColor = "red"
}
function yellowSquare () {
    square.style.backgroundColor = "yellow"
}
function greenSquare () {
    square.style.backgroundColor = "green"
}
function orangeSquare () {
    square.style.backgroundColor = "orange"
}
function redSquare () {
    square.style.backgroundColor = "red"
}
square.addEventListener('mouseover', blueSquare)
square.addEventListener('mousedown', redSquare)
square.addEventListener('mouseup', yellowSquare)
square.addEventListener("dblclick", greenSquare)
window.addEventListener('wheel', function () {
    square.style.backgroundColor = "orange"
});

window.addEventListener('keydown', function pressKeyColor(event) {
    var x = event.keyCode;
    if (x == 82) {  // 82 is the r key
      square.style.backgroundColor = "red";
    } else if (x == 66) {  // 66 is the b key
        square.style.backgroundColor = "blue";
    } else if (x == 89) {  // 89 is the y key
    square.style.backgroundColor = "yellow";
    } else if (x == 71) {  // 71 is the g key
        square.style.backgroundColor = "green";
    } else if (x == 79) {  // 79 is the o key
        square.style.backgroundColor = "orange";
  }
})

