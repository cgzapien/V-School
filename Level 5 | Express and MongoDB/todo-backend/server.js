const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/todoList", require("./routes/todoRouter"))

app.listen(9000, () =>{
  console.log("app is on port 9000")
})