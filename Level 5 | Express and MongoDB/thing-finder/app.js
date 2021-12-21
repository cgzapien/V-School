const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(morgan("dev"))
//connect to DB
mongoose.connect("mongodb://localhost:27017/thingfinderdb", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the DB")
)

app.use("/inventory", require("./inventoryRouter"))

app.use((err, req, res, next) => {
  console.log(err)
  return res.send({error: err.message})
})


app.listen(9000, () => {
  console.log("app is on port 9000")
}) 