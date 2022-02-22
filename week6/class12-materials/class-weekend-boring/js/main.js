document.getElementById('check').onclick = check

function check() {
  let val = document.getElementById('day').value.toLowerCase();
  if (val === 'tuesday' || val === 'thursday') {
    document.getElementById('placeToSee').innerHTML = "CLASS DAAAAY"
  } else if (val === 'saturday' || val === 'sunday') {
    document.getElementById('placeToSee').innerHTML = 'WEEKEND BABY'
  } else {
    document.getElementById('placeToSee').innerHTML = 'BOOOOOOOORING'
  }
}