const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema ({
  firstName: {
    type: String,
    require: true
  },
  lastName: {
    type: String,
    require: true
  },
  bountyAmount: {
    type: Number,
    require: true
  },
  species: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model("bounty", bountySchema)