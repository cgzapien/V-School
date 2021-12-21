
const express = require("express")
const req = require("express/lib/request")
const res = require("express/lib/response")
const app = express()
const uuid = require("uuid")

app.use(express.json())

const videoGames = [
  {title: "GTA4", _id: uuid.v4() },
  {title: "Madden", _id: uuid.v4() },
  {title: "FIFI", _id: uuid.v4() }
]
app.get('/videoGames', (req, res) => {
  res.send(videoGames)
});

app.post("/videoGames", (req, res) => {
  const newtitle = req.body
  newtitle._id = uuid.v4()
  videoGames.push(newtitle)
  res.send("posted")
})

app.listen(9000), () => {
  console.log("app is listening on port 3000")
}