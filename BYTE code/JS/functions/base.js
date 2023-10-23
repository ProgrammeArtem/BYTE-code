function showHelo(a, b)
{
    return a + b;
}

console.log(
    showHelo(2,2)
);


function divide(a,b) {
    if (b == 0){
        console.error('hi');
        return;
    }

    console.log(a/b);
    // return a/b;
}

divide(10, 2)