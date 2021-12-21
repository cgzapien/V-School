const express = require("express")
const bountyRouter = express.Router()
const uuid = require('uuid')

const bounties = [
  {firstName: "Han", lastName: "Solo", living: "true", bountyAmount: 100, species: "Civilian", _id: uuid.v4()},
  {firstName: "Luke", lastName: "Skywalker", living: "true", bountyAmount: 100, species: "Jedi", _id: uuid.v4()},
  {firstName: "Darth", lastName: "Vader", living: "true", bountyAmount: 100, species: "Sith", _id: uuid.v4()},
  {firstName: "Princess", lastName: "Leia", living: "true", bountyAmount: 100, species: "Jedi", _id: uuid.v4()}
]

bountyRouter.route("/")
  .get((req, res) => {
    res.send(bounties)
  })
  .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuid.v4()
    bounties.push(newBounty)
    res.send(newBounty)
  })
bountyRouter.route("/:bountyId")
  .get((req, res) => {
    const bountyId = req.params.bountyId
    const foundBountyId = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBountyId)
  }) 
  .put((req, res) => {
    const bountyId = req.params.bountyId
    const update = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], update)
    res.send(updatedBounty) 
  })
  .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("delete successful!")
  })

module.exports = bountyRouter