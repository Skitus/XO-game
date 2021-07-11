var cells = document.getElementsByClassName("block");
var span = document.getElementById("span");
var winX = document.getElementsByClassName("winX");
var winO = document.getElementsByClassName("winO");
var draw = document.getElementsByClassName("draw");
var input = document.getElementsByClassName("reset");
input[0].addEventListener("click", reset);
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", play);
}
var countx = 0;
var counto = 0;
var countdr = 0;
var x = "x";
var o = "o";
var num = 0;
span.innerHTML = x;

function play() {
    num++;
    if (num == 1 || num == 3 || num == 5 || num == 7 || num == 9) {
        this.innerHTML = x;
        span.innerHTML = this.innerHTML;
    } else if (num == 2 || num == 4 || num == 6 || num == 8) {
        this.innerHTML = o;
        span.innerHTML = this.innerHTML;
    }
    if (cells[0].innerHTML == x && cells[1].innerHTML == x && cells[2].innerHTML == x ||
        cells[3].innerHTML == x && cells[4].innerHTML == x && cells[5].innerHTML == x ||
        cells[6].innerHTML == x && cells[7].innerHTML == x && cells[8].innerHTML == x ||
        cells[0].innerHTML == x && cells[3].innerHTML == x && cells[6].innerHTML == x ||
        cells[1].innerHTML == x && cells[4].innerHTML == x && cells[7].innerHTML == x ||
        cells[2].innerHTML == x && cells[5].innerHTML == x && cells[8].innerHTML == x ||
        cells[0].innerHTML == x && cells[4].innerHTML == x && cells[8].innerHTML == x ||
        cells[2].innerHTML == x && cells[4].innerHTML == x && cells[6].innerHTML == x) {
        countx++;
        winX[0].innerHTML = Number(countx);
        console.log("winX");
        return reset();
    } else if (cells[0].innerHTML == o && cells[1].innerHTML == o && cells[2].innerHTML == o ||
        cells[3].innerHTML == o && cells[4].innerHTML == o && cells[5].innerHTML == o ||
        cells[6].innerHTML == o && cells[7].innerHTML == o && cells[8].innerHTML == o ||
        cells[0].innerHTML == o && cells[3].innerHTML == o && cells[6].innerHTML == o ||
        cells[1].innerHTML == o && cells[4].innerHTML == o && cells[7].innerHTML == o ||
        cells[2].innerHTML == o && cells[5].innerHTML == o && cells[8].innerHTML == o ||
        cells[0].innerHTML == o && cells[4].innerHTML == o && cells[8].innerHTML == o ||
        cells[2].innerHTML == o && cells[4].innerHTML == o && cells[6].innerHTML == o) {
        console.log("winO");
        counto++;
        winO[0].innerHTML = Number(counto);
        return reset();
    }
    if (num >= 9) {
        countdr++;
        draw[0].innerHTML = Number(countdr);
        return reset();
    }
}

function reset() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = " ";
    }
    num = 0;
}