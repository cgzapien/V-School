import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { drinkContext } from "/Users/zapien/Desktop/vschool/assignments-lvl4/react-api-capstoneproject/src/DrinkContext.js";


function HomePage() {
  const {randomDrinkData, alcoholicDrinks, nonAlcoholicDrinks} = useContext(drinkContext)

  const randomDrink = randomDrinkData.map(drink => {
    return (
      <div key={drink.idDrink}>
        <h1>Name: {drink.strDrink}</h1>
        <Link to={`/drinkdetails/${drink.idDrink}`}>
          <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} className="drinkImage"/>
        </Link>
      </div>
    )
  })
  const alcoholicDrinkList = alcoholicDrinks.map(drink => {
    return (
      <div key={drink.idDrink} className="alcoholicDrink">
        <Link to={`/drinkdetails/${drink.idDrink}`}>
          <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} className="drinkImage"/>
        </Link>
        <h1>Name: {drink.strDrink}</h1>
      </div>
    )
  })
  const nonAlcoholicDrinkList = nonAlcoholicDrinks.map((drink, index) => {
    return (
      <div key={drink.idDrink} className="nonAlcoholicDrink">
        <Link to={`/drinkdetails/${drink.idDrink}`}>
          <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} className="drinkImage"/>
        </Link>
        <h1>Name: {drink.strDrink}</h1>
      </div>
    )
  })
  return (
    <div className="homePage">
      <p id="introP">Welcome to World of Drinks! Here you can explore any drinks you want.<br/>
      I made this App using The CocktailDB API. The purpose of this App is for the user to search<br/>
      for Alcoholic and Non-Alcoholic drinks. When the user clicks on the drink image you will routed<br/> 
      to the Details Page where details regarding that drink will populate.<br/> Thanks for visiting!</p>
      <div>
        <h1><u>Random Drink of the Day!</u></h1>
        {randomDrink}
      </div>
      <div className="drinks">
        <div className="alcoholicDrinks">
          <h1><u>Top Alcoholic Drinks</u></h1>
          {alcoholicDrinkList}
        </div>
        <div className="nonAlcoholicDrinks">
          <h1><u>Top Non-Alcoholic Drink</u></h1>
          {nonAlcoholicDrinkList}
        </div>
      </div>
    </div>
  )
}
export default HomePage