const increaseBtnEl = document.getElementById("increaseBtn");
const decreaseBtnEl = document.getElementById("decreaseBtn");
let counterValueEl = document.getElementById("counterValue");

function increaseValue() {
    counterValueEl.innerText++;
}

function decreaseValue() {
    if (counterValueEl.innerText > 0) {
        counterValueEl.innerText--;
    }
}

function clearValue() {
    counterValueEl.innerText = 0;
}

function add10Value() {
    counterValueEl.innerText = parseInt(counterValueEl.innerText) + 10;
}