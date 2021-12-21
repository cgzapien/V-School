const mongoose = require("mongoose")
const Schema = mongoose.Schema

const inventorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String
  },
  price: {
    type: Number
  }
})

module.exports = mongoose.model("Inventory", inventorySchema)