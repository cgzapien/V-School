const form = document.calculator

const additionSubmitButton = document.getElementById("additionSubmitButton")
const subtractionButton = document.getElementById("subtractionButton")
const multiplicationButton = document.getElementById("multiplicationButton")

function addition (e) {
    e.preventDefault()
    let firstAdditionNumber = parseInt(document.getElementById("additionInputFirstNumber").value)
    let secondAdditionNumber = parseInt(document.getElementById("additionInputSecondNumber"). value)
    let answerBox = document.getElementById("answerBox")
    let answer = firstAdditionNumber + secondAdditionNumber;
    answerBox.textContent = answer; 
    document.getElementById("additionInputFirstNumber").value= "";
    document.getElementById("additionInputSecondNumber").value= "";
    console.log(answer)
    console.log(answerBox)
}

function subtraction () {
    let firstSubtractionNumber = parseInt(document.getElementById("firstSubtractionNumber").value)
    let secondSubtractionNumber = parseInt(document.getElementById("secondSubtractionNumber"). value)
    let answerBox = document.getElementById("answerBox")
    let answer = firstSubtractionNumber - secondSubtractionNumber
    answerBox.textContent = answer; 
    document.getElementById("firstSubtractionNumber").value= "";
    document.getElementById("secondSubtractionNumber").value= "";
    console.log(answer)
    
}

function multiplication () {
    let firstMultiNum = parseInt(document.getElementById("firstMultiplicationNumber").value)
    let secondMultiNum = parseInt(document.getElementById("secondMultiplicationNumber").value)
    let answerBox = document.getElementById("answerBox")
    let answer = firstMultiNum * secondMultiNum
    answerBox.textContent = answer; 
    document.getElementById("firstMultiplicationNumber").value= "";
    document.getElementById("secondMultiplicationNumber").value= "";
}

additionSubmitButton.addEventListener("click", addition)
subtractionButton.addEventListener("click", subtraction)
multiplicationButton.addEventListener("click", multiplication)

document.getElementById("clearButton").addEventListener("click", function clearAnswer () {
    document.getElementById("answerBox").innerHTML = ""
})
