// -=-=-=-=-=-=-=-=- strings -=-=-=-=-=-=-=-=-
let login = 'My login is "Artem"?';
let end = "end!";

console.log("login[3]: ", login[3]); // l 
console.log("Char at 3: ", login.charAt(3)); // l
console.log(login + end);

if (login.endsWith("?")) console.log("Ends with ?");
else console.log("Does not end with ?");

if (login.startsWith("A")) console.log("Starts with A");

console.log("Index of i: ", login.indexOf('i')); // 6
console.log("Last Index of i: ", login.lastIndexOf('i')); // 9

if (login.includes("is")) console.log("Includes the word 'is'");

console.log("Symbols: ", login.length);

console.log("After replace: ", login.replace(" ", "-"));

let welcome = "Hello";
console.log(welcome.repeat(3));
console.log("Hello".repeat(3));

console.log("Upper case: ", login.toUpperCase());
console.log("Lower case: ", login.toLowerCase());

let text = "How are you today? And, blabla. Goodbye!";
const words = text.split(" ");
console.log("Words: ", words);

console.log("Joined: ", words.join('-'));