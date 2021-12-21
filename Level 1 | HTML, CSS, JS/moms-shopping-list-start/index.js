var myForm = document["addItem"];

function addNewItem(e) {
    e.preventDefault();
    var addedItem = myForm.title.value
    myForm.title.value = "";
    console.log(addedItem)
    
    var listOfItems = document.querySelector("#list");
    
    var xButton = document.createElement("button");
        xButton.innerHTML = "X"
        xButton.setAttribute("id", "delete")
    var newLi = document.createElement("li");
    var itemName = document.createElement("div")
        itemName.style.marginBottom = "10px"
    var editButton = document.createElement("button");
        editButton.innerHTML = "edit"
        editButton.setAttribute ("id", "edit")
        
    itemName.textContent = addedItem;
    listOfItems.appendChild(newLi) 
    newLi.appendChild(itemName)
    newLi.appendChild(editButton)
    newLi.appendChild(xButton)

    console.log(listOfItems)
    
    xButton.addEventListener("click", function () {
        itemName.textContent = "";
        xButton.remove();
        editButton.remove();
    }
    )
    
    // var editItem = document.getElementById("edit");
    // console.log(editItem)
    // editItem.addEventListener("onclick", function () {
    //         for (var e = 0; e < editItem.length; e++) {    
    //         var newInput = document.createElement("input")
    //         itemName.innerHTML = newInput 
    //     }
    // })    
}

myForm.addEventListener("submit", addNewItem )

        
   