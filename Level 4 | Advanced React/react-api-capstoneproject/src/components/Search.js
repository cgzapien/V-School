import React, {useContext} from "react";
import { Link } from "react-router-dom";

import {drinkContext} from "/Users/zapien/Desktop/vschool/assignments-lvl4/react-api-capstoneproject/src/DrinkContext.js"

function Search() {
  const {handleSubmit, handleChange, searchedData} = useContext(drinkContext)
  const searchedDataList = searchedData.map(drink => {
    return (
      <div key={drink.idDrink} >
        <Link to={`/drinkdetails/${drink.idDrink}`}>
          <img src={drink.strDrinkThumb} alt={drink.strDrinkThumb} className="drinkImage"/>
        </Link>
        <h3>Name: {drink.strDrink}</h3>
      </div>
    )
  })
  return (
    <div>
      <form className="drinkSearch" onSubmit={handleSubmit}>
        <h2>Search for your drinks</h2>
        {/* <input 
        type="text"
        placeholder="Search by Name"
        ></input> */}
        <br/>
        <label htmlFor="typeOfDrink">Alcoholic</label>
        <input
        id="typeOfDrink"
        type="radio"
        name="typeOfDrink"
        value="Alcoholic"
        onChange={handleChange}
        ></input>
        <label htmlFor="typeOfDrink">Non-Alcoholic</label>
        <input
        id="typeOfDrink"
        type="radio"
        name="typeOfDrink"
        value="Non_Alcoholic"
        onChange={handleChange}
        ></input>
        <br/><br/>
        <button>Submit</button>
      </form>
      <h1 className="searchResults">Search Results:</h1>
      <div className="drinkResults">
      {searchedDataList}

      </div>
    </div>
  )
}
export default Search