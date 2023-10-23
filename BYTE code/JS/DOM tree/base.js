const btn = document.getElementById('btn');
const h1 = document.getElementById('h1');
const inp = document.getElementById('inp');


btn.onclick = () => {
    let name = inp.value;
    console.log('Hello');
    h1.innerHTML = `${name}<strong>`;
}