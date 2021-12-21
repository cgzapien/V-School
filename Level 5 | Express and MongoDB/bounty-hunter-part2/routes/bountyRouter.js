const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid")

const bounties = [
  {firstName: "Han", lastName: "Solo", living: true, bountyAmount: 100, type: "civilian", _id: uuid.v4()},
  {firstName: "Luke", lastName: "Skywalker", living: true, bountyAmount: 100, type: "Jedi", _id: uuid.v4()},
  {firstName: "Darth", lastName: "Vader", living: true, bountyAmount: 100, type: "Sith", _id: uuid.v4()},
  {firstName: "Princess", lastName: "Leia", living: true, bountyAmount: 100, type: "Jedi", _id: uuid.v4()}
]
bountyRouter.route("/")
  .get((req, res) => {
    res.send(bounties)
  })
  .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(`${newBounty.firstName} added!`)
  })
  bountyRouter.route("/:bountyId")
    .get((req, res) => {
      const id = req.params.bountyId
      const bountyId = bounties.find(bounty => bounty._id === id)
      res.send(bountyId)
    })
    .delete((req, res) => {
      const id = req.params.bountyId
      const bountyIndex = bounties.findIndexd(bounty => bounty._id === id)
      bounties.splice(bountyIndex, 1)
      res.send("deleted")
    })
    .put((req, res) => {
      const id = req.params.bountyId
      const update = req.body
      const bountyIndex = bounties.findIndex(bounty => bounty._id === id)
      const updated = Object.assign(bounties[bountyIndex], update)
      res.send(updated)
    })

module.exports = bountyRouter