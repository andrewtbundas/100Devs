let total = 0

document.querySelector('#pumpkin').addEventListener('mouseenter', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.getElementById('plus-2').addEventListener('click', add2)
document.getElementById('mod2').addEventListener('click', mod2)

function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
}
function add2() {
  total = total + 2
  document.querySelector('#placeToPutResult').innerHTML = total
}

function mod2() {
  document.querySelector('#evenOrOdd').innerHTML = evenOdd()

}

function evenOdd() {
  if (total % 2 == 0) {
    return 'even'
  } else {
    return 'odd'
  }
}
