let countri = ['Ukraine', 'USA', 'Africa'];

for (let index = 0; index < countri.length; index++) 
{
    console.log(`[${index}] - ${countri[index]}`);
}

let namber1 = '1991';
let namber2 = '1775';
while (namber1 < 1000) {
    namber1++;
    console.log(namber2);

    namber2++;
}

let countri1 = [ 'Ukraine-1991', 'USA-1775'];

for (const countri1_year of countri1) {
    console.log(countri1_year);
}

for (const index in countri1) {
    console.log(index);
}