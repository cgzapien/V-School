const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const app = express()

app.use(express.json())
app.use(morgan("dev"))

//connect to mongooseDB
mongoose.connect("mongodb://localhost:27017/crudestoredb", 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the crudestoreDB")
)

//routes
app.use("/crudstore", require("./routes/inventory"))

//error catching
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({err: err.message})
})

//listen to port 5000
app.listen(6000, () => {
  console.log("App is running on Port 6000")
})