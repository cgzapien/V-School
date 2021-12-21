const express = require("express")
const pokemonRouter = express.Router()
const uuid = require("uuid")

const pokemonList = [
  {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/", _id: uuid.v4()},
  {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/", _id: uuid.v4()},
  {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/", _id: uuid.v4()},
  {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/", _id: uuid.v4()}
]

pokemonRouter.route("/")
  .get((req, res) => {res.send(pokemonList)})
  .post((req, res) => {
    const newPokemon = req.body
    newPokemon._id = uuid.v4()
    pokemonList.push(newPokemon)
    res.send(`${newPokemon.name} added`)
  })
pokemonRouter.route("/:pokemonId")
.get((req, res) => {
  const id = req.params.pokemonId
  const foundId = pokemonList.find(pokemon => pokemon._id === id)
  res.send(foundId)
})
.delete((req, res) => {
  const pokemonId = req.params.pokemonId
  const pokemonIndex = pokemonList.findIndex(pokemon => pokemon._id === pokemonId)
  pokemonList.splice(pokemonIndex, 1)
  res.send("deleted")
})
.put((req, res) => {
  const pokemonId = req.params.pokemonId
  const update = req.body
  const pokemonIndex = pokemonList.findIndex(pokemon => pokemon._id === pokemonId)
  const updated = Object.assign(pokemonList[pokemonIndex], update)
  res.send(updated)
})

module.exports = pokemonRouter