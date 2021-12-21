//--------get data from api-------//
function getData(){
    axios.get("https://api.vschool.io/carlos/todo")
    .then(res => { 
        for(let i = 0; i < res.data.length; i++) {
            createTodo(res.data[i])
        }
    })
    .catch(err => console.log(err))
}

getData()

const form = document.todoForm
const AddButton = document.getElementById("addButton")
const inputTitle = document.getElementById("title");
const inputImage = document.getElementById("imgUrl")
const inputPrice = document.getElementById("price");
const inputDescription = document.getElementById("description");
const todoList = document.getElementById("newTodoList")



function createTodo(todo) {
    console.log(todo)
    console.log(todo.title)
    console.log(todo["_id"])
//create new elements
    const container = document.createElement("li");
    container.setAttribute("class","newList")
    container.setAttribute("id", todo["_id"])
    container.style.margin = "5px 5x"
    const title = document.createElement("h1");
    title.setAttribute("id", "newItemTitle")
    const image = document.createElement("img");
    image.setAttribute("id", "newItemImg")
    const price = document.createElement("h2");
    price.setAttribute("id", "newItemPrice")
    price.setAttribute("step", "0.01")
    const description = document.createElement("h2");
    description.setAttribute("id", "newItemDescription");
    const label = document.createElement("label")
    label.innerHTML = "Completed"
    label.setAttribute("for","checkbox" )
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.setAttribute("id", "checkbox")
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete")
    deleteButton.innerHTML = "Delete"
    const editButton = document.createElement("button");
    editButton.setAttribute("id", "edit")
    editButton.innerHTML = "Edit"
//edit elements
    title.textContent = todo.title
    image.src = todo.imgUrl
    price.textContent = todo.price
//console.log(price.textContent)
    description.textContent = todo.description
//append elements childern > parent > grandparent
    todoList.appendChild(container)
    container.appendChild(title)
    container.appendChild(image)
    container.appendChild(price)
    container.appendChild(description)
    container.appendChild(label)
    container.appendChild(checkbox)
    container.appendChild(editButton)
    container.appendChild(deleteButton)
    
//delete todo item in api using todo item id       
deleteButton.addEventListener("click", function() {
    todoList.removeChild(container)
    const itemId = todo["_id"]
    console.log(itemId) 
        axios.delete(`https://api.vschool.io/carlos/todo/${itemId}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    });
//edit("put") todo item in api using id. should update with save
editButton.addEventListener("click", function(event){
    if(event.target.tagName === "BUTTON") {
        const button = event.target;
        if(button.textContent === "Edit") {
            const h1 = container.firstElementChild;
            //const h1 = container.title
            const input = document.createElement("input");
            input.type = "text";
            input.value = h1.textContent;
            container.insertBefore(input, h1);
            container.removeChild(h1)
            editButton.textContent = "Save";
        } else if(button.textContent === 'Save'){
            const newInput = container.firstElementChild;
            const newTitle = document.createElement("h1");
            newTitle.textContent = newInput.value;
            container.insertBefore(newTitle, newInput);
            container.removeChild(newInput);
            editButton.textContent = "Edit"
            const itemId = todo["_id"];
        //     const editedTodo = {
        //         title: newInput.value,
        //         //imgUrl: form.image.src,
        //         //price: form.price.value,
        //         //description: form.description.value 
        // } 
        // axios.put(`https://api.vschool.io/carlos/todo/${itemId}`, editedTodo)
        //     .then(response => console.log(response.data))
        //     .catch(error => console.log(error))
    }
}  
})
document.getElementById("checkbox").addEventListener("change", (e) => {
    if(e.target.tagName === "INPUT") {
        const selected = e.target
        const itemId = todo["_id"];
        console.log(itemId)
        if(selected.checked) {
            document.querySelector(".newList").style.opacity = "0.5";
            // const itemChecked = {
            //     completed: true
            // }
            // axios.put(`https://api.vschool.io/carlos/todo/${itemId}`, itemChecked)
            // .then(response => console.log(response.data))
            // .catch(error => console.log(error))
        } else {
            document.querySelector(".newList").style.opacity = "1";
            // const itemUnChecked = {
            //     completed: true
            // }
            // axios.put(`https://api.vschool.io/carlos/todo/${itemId}`, itemUnChecked)
            // .then(response => console.log(response.data))
            // .catch(error => console.log(error))
    } 
    } 

    })
}

function clearList(){
    const el = document.getElementById('newTodoList')
    while(el.firstChild){
        el.removeChild(el.firstChild)
    }
}

AddButton.addEventListener("click", (e) => {
    e.preventDefault()
    clearList()
    const newTodo = {
        title: inputTitle.value,
        imgUrl: inputImage.value,
        price: inputPrice.value,
        description: inputDescription.value
    }
    inputTitle.value = ""
    inputImage.value = ""
    inputPrice.value = "";
    inputDescription.value = "";
    
    axios.post("https://api.vschool.io/carlos/todo", newTodo)
    .then(res => getData())
    .catch(err => console.log(err))
})
