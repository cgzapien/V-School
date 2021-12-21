const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounties", require("./routes/bountyRouter"))

app.listen(9000, () => {
  console.log("App is on port 9000")
})