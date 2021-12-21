import React, {useEffect, useState} from "react";

const drinkContext = React.createContext()

function DrinkContextProvider(props) {
  const [randomDrinkData, setRandomDrinkData] = useState([])
  const [alcoholicDrinks, setAlcoholicDrinksData] = useState([])
  const [nonAlcoholicDrinks, setNonAlcoholicDrinksData] = useState([])
  const [searchedData, setSearchedData] = useState([])
  const [inputData, setInputData] = useState("")

   
  function randomIndx() {
    return Math.floor(Math.random() * 50)
  }
  function getRandomDrinkData() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then(response => response.json())
      .then(data => setRandomDrinkData(() => [...data.drinks]))
      .catch(err => console.log(err))
  }
  function getAlcoholicDrinkData() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then(response => response.json())
      .then(data => setAlcoholicDrinksData(() => [data.drinks[0], data.drinks[1], data.drinks[2], data.drinks[3]]))
      .catch(err => console.log(err))
  }
  function getNonAlcoholicDrinkData() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then(response => response.json())
      .then(data => setNonAlcoholicDrinksData(() => [data.drinks[0], data.drinks[1], data.drinks[2], data.drinks[3]]))
      .catch(err => console.log(err))
  }
  function handleSubmit(e) {
    e.preventDefault()
    const drinkType = inputData
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${drinkType}`)
      .then(response => response.json())
      .then(data => setSearchedData(() => [...data.drinks]))
      .catch(err => console.log(err))
  }
  function handleChange(e) {
    const drinkType = e.target.value
    setInputData(() => drinkType)
  }
  //www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka search by name
  useEffect(() => {
    getRandomDrinkData()
    getAlcoholicDrinkData()
    getNonAlcoholicDrinkData()
  }, [])
  
  return (
    <drinkContext.Provider value={{
      randomDrinkData, 
      alcoholicDrinks, 
      nonAlcoholicDrinks,
      searchedData, 
      randomIndx, 
      handleSubmit,
      handleChange
      }}>
      {props.children}
    </drinkContext.Provider>
  )
}
export {DrinkContextProvider, drinkContext}