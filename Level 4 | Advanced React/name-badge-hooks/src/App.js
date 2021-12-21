import React, { useState } from "react";
import NameBadge from "./NameBadge";

export default function App() {
  const [inputData, setInputData] = useState({
                id: 0,
                firstName: "",
                lastName: "",
                email: "",
                placeOfBirth: "",
                phoneNumber: "",
                favoriteFood: "",
                description: ""})
  const [nameBadges, setNameBadges] = useState([])
  
  function handleChange(event) {
    const {name, value} = event.target
    setInputData(prevInputData => ({...prevInputData, [name]: value}))
}
  function handleSubmit(event) {
  event.preventDefault()
  setNameBadges(prevNameBadges => [inputData, ...prevNameBadges])
  setInputData(prevInputData => ({
    id: prevInputData.id += 1,
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phoneNumber: "",
    favoriteFood: "",
    description: ""
  }))
  
}
  const {firstName,lastName, email, placeOfBirth, phoneNumber, favoriteFood, description} = inputData
  console.log('firstName: ', firstName);

  const isEnabled = firstName.length > 3 && lastName.length > 3 && placeOfBirth.length > 3 
  && phoneNumber.length > 3 && favoriteFood.length > 3 && email.length > 3 && description.length > 3
  let badges = nameBadges.map(name => <NameBadge key={name.id} name={name} />)
  return (
    <div className="nameBadgeDiv">
        <form className="nameBadgeForm" onSubmit={handleSubmit}>
          <input 
            className="dataInput"
            type="text"
            name="firstName"
            value={inputData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            minLength="3"
            size="40"
          ></input>
          <input 
            className="dataInput"
            type="text"
            name="lastName"
            value={inputData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            minLength="3"
            size="40"
          ></input>
          <input 
            className="dataInput"
            type="text"
            name="email"
            value={inputData.email}
            onChange={handleChange}
            placeholder="Email"
            minLength="3"
            size="40"
          ></input>
          <input 
          className="dataInput"
          type="text"
          name="placeOfBirth"
          value={inputData.placeOfBirth}
          onChange={handleChange}
          placeholder="Place of Birth"
          minLength="3"
          size="40"
          ></input>
          <input 
            className="dataInput"
            type="tel"
            name="phoneNumber"
            value={inputData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            minLength="3"
            size="40"
            maxLength="10"
          ></input>
          <input 
            className="dataInput"
            type="text"
            name="favoriteFood"
            value={inputData.favoriteFood}
            onChange={handleChange}
            placeholder="Favorite Food"
            minLength="3"
            size="40"
          ></input>
          <textarea
            className="dataInput"
            type="text"
            name="description"
            value={inputData.description}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            minLength="3"
            rows="10" 
            cols="80"
          ></textarea>
        <button id="submitBtn" disabled={!isEnabled}>Submit</button>
      </form>
        <ul>
            {badges}
        </ul>
    </div>
  )
}


