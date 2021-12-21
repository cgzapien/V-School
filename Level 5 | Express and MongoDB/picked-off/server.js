const express = require("express")
const app = express()

app.use(express.json())

app.use("/pokemon", (req, res, next) => {
  req.body = {name: "Carlos!"}
  next()
})

app.use("/pokemon", (req, res, next) => {
  res.send(req.body)
})

app.use("/pokemon", require("./routes/pokemonRouter"))

app.listen(9000, () => {
  console.log("app is on port 9000")
})