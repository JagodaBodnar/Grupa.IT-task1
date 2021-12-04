/*
        Zadanie polega na napisaniu skryptu w JavaScript, który po kliknięciu w przycisk wygeneruje 20 losowych liczb
        całkowitych z zakresu od 1 do 100 i umieści je w dwóch kolumnach.
        W jednej kolumnie mają znaleźć się tylko liczby parzyste, a w drugiej nieparzyste.
        Dodatkowo obie kolumny muszą być posortowane rosnąco.

 */


const generateRandom = (min, max) => Math.ceil(Math.random() * (max - min)) + min;
const generateArray = ({size, minValue, maxValue}, condition) => {
    if (minValue > maxValue) {
        throw new Error("Wrong range");
    }
    return Array(size)
        .fill(0)
        .map(item => generateRandom(minValue, maxValue)).filter(item => condition(item) && item)
}
const sortArrayIncr = (array) => array.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else return 0;
})
const generateNumbers =(evenNumbers,oddNumbers)=>{
    const allLi = document.querySelectorAll("li")
    allLi.forEach(item=>item.remove())
    evenNumbers.map(item=>{
        divEvenNumbers.appendChild(document.createElement("li")).innerHTML = `${item}`
    })
    oddNumbers.map(item=>{
        divOddNumbers.appendChild(document.createElement("li")).innerHTML = `${item}`
    })
}

const main = () => {
    const params = {
        minValue: 1,
        maxValue: 100,
        size: 20
    }
    const conditionEven = (a) => a % 2 === 0
    const conditionOdd = (a) => a % 2 !== 0
    const evenNumbers = sortArrayIncr(generateArray(params, conditionEven))
    const oddNumbers = sortArrayIncr(generateArray(params, conditionOdd))
    return generateNumbers(evenNumbers,oddNumbers)
}


const divMain = document.createElement("div")
const title = document.createElement("h2");
const button = document.createElement("button");
const divNumbersContainer = document.createElement("div")
const divEvenNumbers = document.createElement("ul");
const divOddNumbers = document.createElement("ul");
button.innerHTML = "Generate";
title.innerText ="Random numbers generator"


document.body.appendChild(divMain)
divMain.appendChild(title)
divMain.appendChild(button)
divMain.appendChild(divNumbersContainer)
divNumbersContainer.appendChild(divOddNumbers)
divNumbersContainer.appendChild(divEvenNumbers)


divNumbersContainer.classList.add("container")

button.addEventListener("click",()=>main(divMain,divEvenNumbers, divOddNumbers))
