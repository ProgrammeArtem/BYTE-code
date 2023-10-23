let number1 = +prompt("Number1:");
let number2 = +prompt("Number2:");
let option = prompt("Action:");

function plus(num1, num2) {
    alert(num1 + num2);
};

function minus(num1, num2) {
    alert(num1 - num2);
}

function multiply(num1, num2) {
    alert(num1 * num2);
};

function devide(num1, num2) {
    if (num2 == 0) {
        alert("Cannot divide by zero!");
        return;
    }
    alert(num1 / num2);
};


switch(option)
{
    case "+":
        plus(number1, number2);
        break;
    case "-":
        minus(number1, number2);
        break;
    case "*":
        multiply(number1, number2);
        break;
    case "/": 
        devide(number1,number2);
        break;
    // default:
    //     alert("Something");
}