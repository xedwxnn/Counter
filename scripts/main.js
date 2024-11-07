let counterValueEl = document.getElementById("counterValue");

function increaseValue() {
    counterValueEl.innerText++;
}

function decreaseValue() {
    if (counterValueEl.innerText > 0) {
        counterValueEl.innerText--;
    }
}

function add10Value() {
    counterValueEl.innerText = parseInt(counterValueEl.innerText) + 10;
}

function remove10Value() {
    if(counterValueEl.innerText >= 10) {
        counterValueEl.innerText = parseInt(counterValueEl.innerText) - 10;
    }
}

function clearValue() {
    counterValueEl.innerText = 0;
}