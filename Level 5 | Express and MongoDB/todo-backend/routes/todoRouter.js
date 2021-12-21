const express = require("express")
const todoRouter = express.Router()
const uuid = require("uuid")

const todoList = [
  {name: "wash car", description: "", imageUrl: "", completed: false, _id: uuid.v4()},
  {name: "clean dishes", description: "", imageUrl: "", completed: false, _id: uuid.v4()},
  {name: "wash laundry", description: "", imageUrl: "", completed: false, _id: uuid.v4()},
  {name: "sweep house", description: "", imageUrl: "", completed: false, _id: uuid.v4()},
]

todoRouter.route("/")
  .get((req, res) => {
    res.send(todoList)
  })
  .post((req, res) => {
    const newTodo = req.body
    newTodo._id = uuid.v4()
    todoList.push(newTodo)
    res.send(`${newTodo.name} added!`)
  })
todoRouter.route("/:todoId")
.get((req, res) => {
  const todoId = req.params.todoId
  const foundId = todoList.find(todo => todo._id === todoId)
  res.send(foundId)
})
.delete((req, res) => {
  const todoId = req.params.todoId
  const todoIndex = todoList.findIndex(todo => todo._id === todoId)
  todoList.splice(todoList[todoIndex], 1)
  res.send("deleted")
})
.put((req, res) => {
  const todoId = req.params.todoId
  const update = req.body
  const todoIndex = todoList.findIndex(todo => todo._id === todoId)
  const updatedTodo = Object.assign(todoList[todoIndex], update)
  res.send(updatedTodo)
  
})

module.exports = todoRouter