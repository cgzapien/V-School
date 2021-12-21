var form = document.getElementById("airline-form");
var submit = document.getElementById("submit");

function formAlert (e) {
    e.preventDefault();
    var firstName = form.elements["firstName"].value;
    form.elements["firstName"].value = ""
    var lastName = form.elements["lastName"].value;
    form.elements["lastName"].value = ""
    var age = form.age.value;
    form.age.value = "";
    var gender = form.gender.value;
    form.gender.value = "";
    var location = form["travel-location"].value;
    form["travel-location"].value = "";
    var diet = [];
    if (form.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
    }
    if (form.gluten.checked) {
        diet.push(document.getElementById('gluten').value);
    }
    if (form.paleo.checked) {
        diet.push(document.getElementById('paleo').value);
    }


    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
}


form.addEventListener("submit", formAlert);