let total = 0
const display = document.getElementById('display')

document.getElementById('zero').onclick = setZero
document.getElementById('plus3').onclick = plus3
document.getElementById('plus9').onclick = plus9
document.getElementById('sub2').onclick = sub2



function setZero() {
  total = 0
  display.innerHTML = total
}

function plus3() {
  total += 3
  display.innerHTML = total
}

function plus9() {
  total += 9
  display.innerHTML = total
}

function sub2() {
  total -= 2
  display.innerHTML = total
}