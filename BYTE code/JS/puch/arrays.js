// -=-=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-=-

// initialization type 1
var array = new Array();
array[0] = 100;
array[1] = 200;
array[2] = 300;

//var array = new Array(3); // lenght: 3
var array = new Array(6.5, 2.2, 0, 100);

// initialization type 2
var array = []; // empty array
var array = [3, -5, 123, 44, -1, 23, 123, 66]; // Lenght: 8

array[0] = 44;
console.log(array[0]); // 44

console.log("Before: " + array);
array[5] = 60;
console.log("After: " + array);

array[20] = 55;
console.log("Array: " + array);

console.log(`Array lenght: ${array.length}`);


// -=-=-=-=-=-=- Array Methods -=-=-=-=-=-=-
console.log("Original Array: ", array);

array.push(777); // add element to the end
console.log("Array:", array);

array.pop(); // remove the last element
console.log("Array:", array);

array.shift(); // remove the first element
console.log("Array:", array);

array.unshift(555); // add to the beginning
console.log("Array:", array);

console.log("Index of first 123:", array.indexOf(123));  // if not found = -1
console.log("Index of last 123:", array.lastIndexOf(123));

array.sort();
console.log("Sorted by default:", array);

array.splice(2, 3); // 3 element from index 2
console.log("After remove:", array);

array = [4, 6, 8, 1, 13, 16, -4, 0, 99];

//

const colors = ['red', 'brown', 'green', 'gold', 'silver'];

const str = colors.join(" - ");
console.log("Str after join: ", str);

console.log("Elements after split: ", str.split(' - ').length);