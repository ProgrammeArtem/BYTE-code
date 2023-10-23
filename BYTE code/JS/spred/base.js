// let num = [1,2,3];
// console.log(...num);

// let numb = [...num ,4,5];
// console.log(...numb);

let person ={
    name: 'Artem',
    age: '11'
};

let newperson ={
    ...person,
    city: 'Kyiv',
};

console.log(newperson);