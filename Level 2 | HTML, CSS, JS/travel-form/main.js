const flightInfo = document.airlineInfo;
const submitInfo = document.getElementById("submit");

function printCustomerInfo (e) {
    e.preventDefault();
    const firstName = flightInfo.firstName.value;
    firstName.value = ""
    const lastName = flightInfo.lastName.value;
    lastName.value = "";
    const age = flightInfo.ageNumber.value
    age.value = "";
    const gender = flightInfo.gender.value;
    gender.value = "";
    const destination = document.getElementById("destination").value;
    destination.value = "";
    const diet = [];
    if (flightInfo.vegan.checked) {
        diet.push(document.getElementById("vegan").value);
        document.getElementById('vegan').value='';
    } 
    if (flightInfo.kosher.checked) {
        diet.push(document.getElementById("kosher").value);
        document.getElementById('kosher').value='';
    }
    if (flightInfo.lactose.checked) {
        diet.push(document.getElementById("lactose").value)
        document.getElementById('lactose').value='';
    }



    alert(`First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination} \nDiet: ${diet} \nOnce again, Thank you for choosing Mohican Airways. `)
}

flightInfo.addEventListener("submit", printCustomerInfo)