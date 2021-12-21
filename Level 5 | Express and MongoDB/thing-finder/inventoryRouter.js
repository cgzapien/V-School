const express = require("express")
const inventoryRouter = express.Router()
const Thing = require("../thing-finder/model/thingfinder")

// GET ALL
inventoryRouter.get("/", (req, res, next) => {
  //res.status(200).send(inventoryItems)
  Thing.find((err, thing) => {
  if(err) {
    res.status(500)
    return next(err)
  }
  return res.status(200).send(thing)   
  })
})
//GET ONE
inventoryRouter.get("/:inventoryId", (req, res, next) => {
  Thing.findById(req.params.inventoryId, (err, thing) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(thing)
  })
  // const inventoryId = req.params.inventoryId
  // const foundInventory = inventoryItems.find(inventory => inventory._id === inventoryId)
  // if(!foundInventory) {
  //   const error = new Error(`The item with the id ${inventoryId} was not found`)
  //   res.status(500)
  //   return next(error)
  // }
  // res.send(foundInventory)
})
//GET BY TYPE
inventoryRouter.get("/search/type", (req, res, next) => {
  // const type = req.query.type
  // const filteredInventory = inventoryItems.filter(inventory => inventory.type === type)
  // res.send(filteredInventory)
  Thing.find({type: req.query.type}, (err, things) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(things)
  })
})
//GET BY PRICE MAX AND MIN PRICE
inventoryRouter.get("/search/price", (req, res) => {
  const price = req.query.price
  const foundPrice = inventoryItems.filter(inventory => inventory.price === price)
  res.send(foundPrice)
})
//POST ONE
inventoryRouter.post("/", (req, res, next) => {
  const newThing = new Thing(req.body)
  newThing.save((err, savedThing) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedThing)
  })
  // const newItem = req.body
  // newItem._id = uuid.v4()
  // inventoryItems.push(newItem)
  // res.status(201).send(`${newItem.name} added to the inventory`)
})
//DELETE
inventoryRouter.delete("/:inventoryId", (req, res, next) => {
  Thing.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database`)
  })
  // const inventoryId = req.params.inventoryId
  // const inventoryIndex =  inventoryItems.findIndex(inventory => inventory._id === inventoryId)
  // inventoryItems.splice(inventoryIndex, 1)
  // res.send("deleted")
})
//UPDATE
inventoryRouter.put("/:inventoryId", (req, res, next) => {
  Thing.findOneAndUpdate(
    {_id: req.params.inventoryId},
    req.body,
    {new: true},
    (err, updatedThing) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedThing)
    }
  )
  // const inventoryId = req.params.inventoryId
  // const inventoryIndex =  inventoryItems.findIndex(inventory => inventory._id === inventoryId)
  // const updatedInventory = Object.assign(inventoryItems[inventoryIndex], req.body)
  // res.status(200).send(updatedInventory)
})
module.exports = inventoryRouter