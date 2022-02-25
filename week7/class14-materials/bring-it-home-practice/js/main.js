// *Variables*
// Create a variable and console log the value
let test = "sup"
console.log(test)
// Create a variable, add 10 to it, and alert the value
let num = 0;
alert(num + 10);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtractFourNumbers(a, b, c, d) {
    let difference = (a - b - c - d);
    alert(difference);
}
// Create a function that divides one number by another and returns the remainder
function divideTwoNumbers(x, y) {
    return x / y
}
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwoJumanji(num1, num2) {
    let sum = num1 + num2;
    // if (sum>50){
    //     alert('Jumanji')
    // }

    (sum > 50) ? alert('Jumanji') : console.log('no Jumanji :(');
}
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multipleThreeNumbers(x, y, z) {

    let product = x * y * z;
    (product % 3 == 0) ? alert("zebra") : console.log('horse :(');
}
