import React, {useState, useEffect} from "react";
import { useParams } from "react-router";

function DrinkDetails() {
  const [drinkDetail, setDrinkDetail] = useState({})
  console.log('drinkDetail: ', drinkDetail);

  const arraysOfKeyValuePairs = Object.entries(drinkDetail)
  const ingredientArrays = arraysOfKeyValuePairs.filter(([word, value]) => word.slice(0, 13) === "strIngredient" && value)
  
  const {drinkId} = useParams()

  function getDrinkInfo() {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then(response => response.json())
      .then(data => setDrinkDetail(() => data.drinks[0]))
      .catch(err => console.log(err))
  }
  
  useEffect(() => {
    getDrinkInfo()
  }, [])
  const ingredients = ingredientArrays.map(ingredientName => ingredientName[1])
  console.log('ingredient: ', ingredients.join(", "));

  const drink = (
      <div key={drinkDetail.idDrink} className="content">
        <div className="front" style={{backgroundImage: `url(${drinkDetail.strDrinkThumb})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
          {/* <img src={drinkDetail.strDrinkThumb} alt={drinkDetail.strDrinkThumb}/> */}
        </div>
        <div className="back">
          <h3>Name: <u>{drinkDetail.strDrink}</u></h3>
          <h3>Type of drink: {drinkDetail.strAlcoholic}</h3>
          <p>Category: {drinkDetail.strCategory}</p>
          <p>Ingredients: {ingredients.join(", ")}</p>
          <p>Instructions: {drinkDetail.strInstructions}</p>
        </div>
      </div>
    )
  
  return (
    <div className="card">
      {drinkDetail === {} ?  <h1>go back and pick a drink</h1> : drink}
      {/* {drink} */}
    </div>
  )
}
export default DrinkDetails

//object.values(data)