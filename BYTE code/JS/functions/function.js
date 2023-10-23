// ---------- functions ---------- //

/*
    функция — это "подпрограмма", которую можно вызывать из внешнего (или внутреннего, в случае рекурсии) по отношению к функции кода.
    Как и сама программа, функция состоит из последовательности инструкций, называемой телом функции.
    Значения могут быть переданы в функцию, а функция вернёт значение.
*/

// // Function Syntax
// function name(parameter1, parameter2, parameter3) {

//   // code to be executed

// }


// // Function to compute the product of p1 and p2
// function myFunction(p1, p2) {
//   return p1 * p2;
// }

// // --------------------------------------------------------

// function divide(a, b) {
//     if (b == 0) {
//         console.error("Cannot divide by zero!");
//         return;
//     }
//     return a / b;
// }


// // invoke function
// divide(4, 7);

// // function in variable

// let summ = function (a, b) { console.log(`Summ: ${a} + ${b} = ${a + b}`); }

// let try1 = divide(4, 7);

// summ(4, 7);

// // function in array
// let mixed = [40, 4.4, "red", "green", false, [1, 2, 3], summ];

// // invoke function from array
// mixed[6](3, 9);