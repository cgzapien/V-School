const pestControlForm = document.marioPestControl
const totalButton = document.getElementById("totalButton")
const clearButton = document.getElementById("clearButton")

function calculateTotal (e) {
    e.preventDefault()
    let goombasCaught = pestControlForm.goombasCaught.value;
    let goombastotal = goombasCaught * 5
    console.log("goombastotal: " + goombastotal)
    let bobombCaught = pestControlForm.bobombCaught.value;
    let bobombTotal = bobombCaught * 7
    console.log("bobombTotal: " + bobombTotal)
    let cheepCaught = pestControlForm.cheepCaught.value;
    let cheepTotal = cheepCaught * 11;
    console.log("cheepTotal: " + cheepTotal)
    let grandtotal = goombastotal + bobombTotal + cheepTotal;
    console.log(grandtotal)
    document.getElementById("goombaTotal").innerHTML = "Goomba Total: " + goombastotal + " coins"
    document.getElementById("bobombTotal").innerHTML = "Bob-omb Total: " + bobombTotal + " coins"
    document.getElementById("cheepTotal").innerHTML = "+ CheepCheep Total: " + cheepTotal + " coins"
    document.getElementById("cheepTotal").style.textDecorationLine = "underline"
    document.getElementById("cheepTotal").style.textDecorationThickness = "3px"
    document.getElementById("grandTotal").innerHTML = "Grand Total: " + grandtotal + " coins"
}

function clearTotals () {
    document.getElementById("goombaTotal").innerHTML = "Goomba Total: " 
    document.getElementById("bobombTotal").innerHTML = "Bob-omb Total: " 
    document.getElementById("cheepTotal").innerHTML = " +   CheepCheep Total: " 
    document.getElementById("grandTotal").innerHTML = "Grand Total: " 
    document.getElementById("goombasCaught").value = ""
    document.getElementById("bobombCaught").value = ""
    document.getElementById("cheepCaught").value = ""
}


pestControlForm.addEventListener("submit", calculateTotal)

clearButton.addEventListener("click", clearTotals)