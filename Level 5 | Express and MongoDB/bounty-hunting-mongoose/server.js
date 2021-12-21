const express = require('express')
const app = express()
const mongoose = require("mongoose")
const morgan = require("morgan")

//middleware
app.use(express.json())
app.use(morgan("dev"))
//connect to mongoose
mongoose.connect("mongodb://localhost:27017/bountyhunterdb",
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
},
() => console.log("Connected to the BounterHunterDB")
)
//routes
app.use("/bounty", require("./routes/BountyHunterRouter"))
//error catching
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({err: err.message})
})
//port listen
app.listen(6000, () => {
  console.log("App is running on Port 6000")
})