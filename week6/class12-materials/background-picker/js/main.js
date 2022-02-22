document.getElementById('purple').addEventListener('click', partyPurple)
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241, 63, 247, 1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'lightgreen'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'cyan'
  document.querySelector('body').style.color = 'white'
}