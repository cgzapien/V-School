const express = require("express")
const CrudeStoreRouter = express.Router()
const Inventory = require("../models/inventory")

// CrudeStoreRouter.get("/", (req, res, next) => {
//   inventory.find((err, items) => {
//     if(err) {
//       res.status(500)
//       return next(err)
//     }
//     return res.status(200).send(items)
//   })
// })

CrudeStoreRouter.route("/")
  .get((req, res, next) => {
    Inventory.find((err, items) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(items)
    })
  })
  .post((req,res,next) => {
    const newInvenory = new Inventory(req.body)
    newInvenory.save((err, savedInventory) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(`${savedInventory.name} added!`)
    })
  })

CrudeStoreRouter.route("/:inventoryId")
  .delete((req, res, next) => { 
    Inventory.findOneAndDelete({_id: req.params.inventoryId}, (err, deletedItem) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted ${deletedItem.name} from the database`)
    })
  })
  .get((req, res, next) => {
    Inventory.findById(req.params.inventoryId, (err, item) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(item)
    })
  })
  .put((req, res, next) => {
    Inventory.findOneAndUpdate(
      {_id: req.params.inventoryId},
      req.body,
      {new: true},
      (err, updatedItem) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        return res.status(200).send(updatedItem)
      }
    )
  })

module.exports = CrudeStoreRouter