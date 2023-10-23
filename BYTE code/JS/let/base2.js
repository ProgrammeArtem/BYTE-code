let a = +prompt("Числа №1:");//number
let b = +prompt("Числа №2:"); //number
let option = prompt("Виберіть дію: ");
document.write('Відповідь: <br>')

if (option == "+") 
{
    document.write( a + b);
}

else if (option == "-") 
{
    document.write( a - b);
}

else if (option == "*") 
{
    document.write( a * b);
}

else
{
    console.error("error!");
}

// 2

// switch (option){
//     case '+':

//         break;
//     case '-':

//         break;
//     case '*':

//         break;
//     case '/':

//         break;
//     default
// }