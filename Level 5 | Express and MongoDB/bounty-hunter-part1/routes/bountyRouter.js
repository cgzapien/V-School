const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid")

const bounties = [
  {firstName: "Han", lastName: "Solo", living: true, bountyAmount: 100, type: "civilian", _id: uuid.v4()},
  {firstName: "Luke", lastName: "Skywalker", living: true, bountyAmount: 100, type: "Jedi", _id: uuid.v4()},
  {firstName: "Darth", lastName: "Vader", living: true, bountyAmount: 100, type: "Sith", _id: uuid.v4()},
  {firstName: "Princess", lastName: "Leia", living: true, bountyAmount: 100, type: "Jedi", _id: uuid.v4()}
]

bountyRouter.get("/", (req, res) => {
  res.send(bounties)
})
bountyRouter.post("/", (req, res) => {
  const newBounty = req.body
  newBounty._id = uuid.v4()
  bounties.push(newBounty)
  res.send(`${newBounty.firstName} added to bounty`)
})

module.exports = bountyRouter