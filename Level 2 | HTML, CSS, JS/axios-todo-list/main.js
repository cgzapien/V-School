getData();

let form = document.todoForm;
const addBtn = document.getElementById("addButton")
addBtn.addEventListener("click", handleAddButtonClick);
let inputTitle = document.getElementById("title");
let inputImage = document.getElementById("imgUrl");
let inputPrice = document.getElementById("price");
let inputDescription = document.getElementById("description");

function getData() {
  // axios
  //   .get("https://api.vschool.io/carlos/todo")
  //   .then((res) => {
  //     for (let i = 0; i < res.data.length; i++) {
  //       createTodo(res.data[i]);
  //     }
  //   })
  //   .catch((err) => console.log(err));
  fetch("https://api.vschool.io/carlos/todo")
    .then(res => res.json())
    .then(data =>{ 
      const prices = data.map((todo) => todo.price)  
      console.log(prices)
      data.forEach(createTodo)
    })
}

function createTodo(todo) {
  const todoList = document.getElementById("newTodoList");
  const todoListItem = createTodoListItem(todo["_id"]);

  todoList.appendChild(todoListItem);
  todoListItem.appendChild(addTitle(todo.title));
  todoListItem.appendChild(addImage(todo.imgUrl));
  todoListItem.appendChild(addPrice(todo.price));
  todoListItem.appendChild(addDescription(todo.description));
  todoListItem.appendChild(addCheckbox(todo["_id"]));
  todoListItem.appendChild(addEditBtn());
  todoListItem.appendChild(addDeleteBtn());

  //-----------CREATE ELEMENT FUNCTIONS ------//

  function createTodoListItem(id) {
    const container = document.createElement("li");
    container.setAttribute("class", "newList");
    container.setAttribute("id", id);
    container.style.margin = "5px 5x";
    return container;
  }

  function addTitle(title) {
    const titleEl = document.createElement("h1");
    titleEl.setAttribute("id", "newItemTitle");
    titleEl.textContent = "Item: " + title;
    return titleEl;
  }

  function addImage(imgUrl) {
    const imageEl = document.createElement("img");
    imageEl.setAttribute("class", "todoImg");
    imageEl.src = todo.imgUrl;
    return imageEl;
  }

  function addPrice(price) {
    const priceEl = document.createElement("h2");
    priceEl.setAttribute("id", "newItemPrice");
    priceEl.setAttribute("step", "0.01");
    priceEl.textContent = "Price: $" + price;
    return priceEl;
  }

  function addDescription(description) {
    const descriptionEl = document.createElement("h2");
    descriptionEl.setAttribute("id", "newItemDescription");
    descriptionEl.textContent = "Description: " + description;
    return descriptionEl;
  }

  function addCheckbox(id) {
    const labelEl = document.createElement("label");
    labelEl.innerHTML = "Check off";
    labelEl.setAttribute("for", `checkbox-${id}`);
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.setAttribute("id", `checkbox-${id}`);
    checkboxEl.addEventListener("click", handleCheckboxClick);
    labelEl.appendChild(checkboxEl);
    return labelEl;
  }

  function addDeleteBtn(id) {
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete");
    deleteButton.setAttribute("id", `delete-${id}`);
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", deleteButtonHandler);
    return deleteButton;
  }

  function addEditBtn(id) {
    const editButton = document.createElement("button");
    editButton.setAttribute("class", "edit");
    editButton.setAttribute("id", `edit-${id}`);
    editButton.innerHTML = "Edit";
    editButton.addEventListener("click", editButtonHandler);
    return editButton;
  }

  // ----------EVENT HANDLERS----------------//

  //delete todo item in api using todo item id
  function deleteButtonHandler(event) {
    const container = event.target.parentNode;
    const todoList = container.parentNode;
    todoList.removeChild(container);
    const itemId = container.id;
    axios
      .delete(`https://api.vschool.io/carlos/todo/${itemId}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  //edit("put") todo item in api using id. should update with save
  function editButtonHandler(event) {
    const editButton = event.target
    const container = editButton.parentNode;
    if (editButton.textContent === "Edit") {
      const h1 = container.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = h1.textContent;
      container.insertBefore(input, h1);
      container.removeChild(h1);
      editButton.textContent = "Save";
    } else if (editButton.textContent === "Save") {
      const newInput = container.firstElementChild;
      const newTitle = document.createElement("h1");
      newTitle.textContent = newInput.value;
      newTitle.setAttribute("id", "newItemTitle");
      container.insertBefore(newTitle, newInput);
      container.removeChild(newInput);
      editButton.textContent = "Edit";
      const itemId = todo["_id"];
      const editedTodo = {
        title: newInput.value,
        //imgUrl: form.image.src,
        //price: form.price.value,
        //description: form.description.value
      };
      axios
        .put(`https://api.vschool.io/carlos/todo/${itemId}`, editedTodo)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    }
  }

  //
  function handleCheckboxClick(e) {
    const selected = e.target;
    const todoItemNode = selected.parentNode.parentNode;
    const itemId = todo["_id"];
    if (selected.checked) {
      todoItemNode.style.opacity = "0.5";
      const itemUnChecked = {
        completed: true
    }
    axios.put(`https://api.vschool.io/carlos/todo/${itemId}`, itemUnChecked)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
  
    } else {
      todoItemNode.style.opacity = "1";
      document.querySelector(".newList").style.opacity = "1";
      const itemUnChecked = {
          completed: false
      }
      axios.put(`https://api.vschool.io/carlos/todo/${itemId}`, itemUnChecked)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    }
  }
}

function handleAddButtonClick(e) {
  e.preventDefault();
  inputTitle = document.querySelector(".todoFormContainer #title");
  inputImage = document.querySelector(".todoFormContainer #imgUrl");
  inputPrice = document.querySelector(".todoFormContainer #price");
  inputDescription = document.querySelector(".todoFormContainer #description");
  const newTodo = {
    title: inputTitle.value,
    imgUrl: inputImage.value,
    price: parseFloat(inputPrice.value),
    description: inputDescription.value,
  };
  console.log(newTodo);
  inputTitle.value = "";
  inputImage.value = "";
  inputPrice.value = "";
  inputDescription.value = "";

  axios
    .post("https://api.vschool.io/carlos/todo", newTodo)
    .then((res) => {
      createTodo(res.data)
    })
    .catch((err) => console.log(err));
}