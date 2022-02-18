document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day === "tuesday" || day === "thursday") {
    document.querySelector('#placeToSee').innerHTML = 'CLASS DAY'
  } else if (day === "saturday" || day === "sunday") {
    document.querySelector('#placeToSee').innerHTML = 'WEEKEND'
  } else {
    document.querySelector('#placeToSee').innerHTML = 'BOOOOOOOOOOOOOOOORING'
  }

}
