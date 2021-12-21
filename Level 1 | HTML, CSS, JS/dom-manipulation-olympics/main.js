var header = document.getElementById("header");
header.textContent = "JavaScript Made This!!";
header.style.textAlign = "center";
header.style.fontSize = "80px";

var span = document.getElementById("spanOne");
span.style.display = "block";
span.textContent = "Carlos wrote the JavaScript";
span.style.fontSize = "25px";
span.style.textAlign = "center";
span.style.marginTop = "15px";
header.appendChild(span);


var firstMessageLeft = document.getElementsByClassName("message left");
firstMessageLeft[0].textContent = "Hello! fabulous morning ain't it?!";
var firstMessageRight = document.getElementsByClassName("message right");
firstMessageRight[0].textContent = "Yes! it's a splendid day!";
var secondMessageLeft = document.getElementsByClassName("message left");
secondMessageLeft[1].textContent = "well, you have a great day!";
var secondMessageRight = document.getElementsByClassName("message right");
secondMessageRight[1].textContent = "Thank you, you as well. Bye-Bye!";

var button = document.getElementById("clear-button"); //grabbing button
var conversation = document.querySelector(".messages");
function clearConversation () {
    conversation.innerHTML = "";
}
button.addEventListener("click", clearConversation); //button on click will perform function

var newTheme = document.createElement("option"); 
newTheme.value="theme-three";
newTheme.textContent = "orange/green"
var themeList = document.getElementById("theme-drop-down")
themeList.append(newTheme);


var dropDown = document.getElementById("theme-drop-down");

dropDown.addEventListener("change", function () {
    if(dropDown.options[dropDown.selectedIndex].value === "theme-two") {
        firstMessageLeft[0].style.backgroundColor = "red";
        firstMessageRight[0].style.backgroundColor = "black";
        secondMessageLeft[1].style.backgroundColor = "red";
        secondMessageRight[1].style.backgroundColor = "black";
        firstMessageRight[0].style.color = "white";
        secondMessageRight[1].style.color = "white";
    } else if (dropDown.options[dropDown.selectedIndex].value === "theme-one") {
        firstMessageLeft[0].style.backgroundColor = "burlywood";
        firstMessageRight[0].style.backgroundColor = "lightblue";
        secondMessageLeft[1].style.backgroundColor = "burlywood";
        secondMessageRight[1].style.backgroundColor = "lightblue";
        firstMessageRight[0].style.color = "black";
        secondMessageRight[1].style.color = "black";
    } else if (dropDown.options[dropDown.selectedIndex].value === "theme-three") {
        firstMessageLeft[0].style.backgroundColor = "orange";
        firstMessageRight[0].style.backgroundColor = "green";
        secondMessageLeft[1].style.backgroundColor = "orange";
        secondMessageRight[1].style.backgroundColor = "green";
        firstMessageRight[0].style.color = "black";
        secondMessageRight[1].style.color = "black";
    }
}) 


// var sendButton = document.message

// sendButton.addEventListener("submit", function sendTextToMessageBox (e) {
//     e.preventDefault()
//     // var inputBox = document.getElementById("input").value;
//     var inputText = 
//     firstMessageLeft[0].innerHTML = inputBox
//     // firstMessageRight[0].innerHTML = inputBox
// });

var form = document.message;
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var value = form.input.value;
    form.input.value = ""
    firstMessageLeft[0].innerHTML = value;
})
