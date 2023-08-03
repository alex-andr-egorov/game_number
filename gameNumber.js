const submit = document.querySelector('.submit');
const card = document.querySelector('.card');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}; 

const RandomInteger = (() => Math.floor(Math.random() * (10 - 1 + 1)) + 1)
const number = RandomInteger()
console.log(number)
let myNumber = 0;
const input = document.querySelector('.input');
input.addEventListener('input', (event) => {
    myNumber = event.target.value

})

const funcSubmit = (myNumber) => {
    if (myNumber == number) {
        card.style.backgroundColor = 'green'
        card.style.color = 'black';
        card.innerHTML = `Yes the number ${number} `
    }
    else {
        card.style.color = getRandomHexColor()
    }
}
submit.addEventListener('click', (event) => {
    event.preventDefault()
    console.log(funcSubmit(myNumber))
});

