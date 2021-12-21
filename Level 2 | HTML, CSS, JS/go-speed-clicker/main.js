const clickButton = document.getElementById("click");
const previousSessionButton = document.getElementById("previouslySessionClickStats")
let clickCounter = 0

function clickAsFastAsYouCan() {
    clickCounter+=1
    document.getElementById("clickCounts").innerHTML = clickCounter
    localStorage.setItem("timesClick", clickCounter)
    // const timeClickLastSession = localStorage.getItem("timesClick")
    // document.getElementById("timesClickedPreviously").innerHTML = timeClickLastSession

}

function previousSessionStats (clickCounter) {
    const timeClickLastSession = localStorage.getItem("timesClick")
    document.getElementById("timesClickedPreviously").innerHTML = timeClickLastSession

}


    let countdown = 10;
const counting =  setInterval (function countdownTimer () {
    countdown-=1
    document.getElementById("countdown").innerHTML = countdown + " seconds"
    console.log(countdown)
    if(countdown < 1) {
        clickButton.removeEventListener("click", clickAsFastAsYouCan)
    }
},1000)
function stopCountdown () {
    clearInterval(counting)
}
setTimeout(stopCountdown, 10000)



const clicker = clickButton.addEventListener('click', clickAsFastAsYouCan)
previousSessionButton.addEventListener('click', previousSessionStats)