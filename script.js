const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const output = document.querySelector('#output');

btn.addEventListener('click', wordLength);
//output will be the lenght of the input
function wordLength() {
    output.innerHTML = input.value.length;
    input.value = '';
}
