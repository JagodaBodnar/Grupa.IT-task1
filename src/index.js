/*
        Zadanie polega na napisaniu skryptu w JavaScript, który po kliknięciu w przycisk wygeneruje 20 losowych liczb
        całkowitych z zakresu od 1 do 100 i umieści je w dwóch kolumnach.
        W jednej kolumnie mają znaleźć się tylko liczby parzyste, a w drugiej nieparzyste.
        Dodatkowo obie kolumny muszą być posortowane rosnąco.

 */


const generateRandom = (min, max) => Math.ceil(Math.random() * (max - min)) + min;

const generateArray = ({size, minValue, maxValue}) => {
    if (minValue > maxValue) {
        throw new Error("Wrong range");
    }
    return Array(size)
        .fill(0)
        .map(item => generateRandom(minValue, maxValue))
}
const sortArrayIncr = (array) => array.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else return 0;
})
const separateNumbers = (array) => {
    const evenNumbers = array.filter(item => item % 2 === 0)
    const oddNumbers = array.filter(item => item % 2 !== 0)
    document.querySelectorAll("li").forEach(item => item.remove())
    evenNumbers.map(item => {
        ulEvenNumbers.appendChild(document.createElement("li")).innerHTML = `${item}`
    })
    oddNumbers.map(item => {
        ulOddNumbers.appendChild(document.createElement("li")).innerHTML = `${item}`
    })
}

const main = () => {
    const params = {
        minValue: 1,
        maxValue: 100,
        size: 20
    }
    const array = sortArrayIncr(generateArray(params))
    return separateNumbers(array)
}


const divMain = document.createElement("div")
const title = document.createElement("h2");
const button = document.createElement("button");
const divNumbersContainer = document.createElement("div")
const ulOddNumbers = document.createElement("ul");
const ulEvenNumbers = document.createElement("ul");
button.innerText = "Generate";
title.innerText = "Random numbers generator"
ulOddNumbers.innerText = "Odd numbers"
ulEvenNumbers.innerText = "Even numbers"


document.body.appendChild(divMain)
divMain.appendChild(title)
divMain.appendChild(button)
divMain.appendChild(divNumbersContainer)
divNumbersContainer.appendChild(ulEvenNumbers)
divNumbersContainer.appendChild(ulOddNumbers)


divNumbersContainer.classList.add("container")

button.addEventListener("click", () => main(divMain, ulEvenNumbers, ulOddNumbers))
