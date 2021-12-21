const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounty", require("./routes/bountyRouter"))

app.listen(5000, () => {
  console.log("app is on port 5000")
})