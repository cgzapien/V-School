import React from "react";

export default function nameBadge(props) {
  return (
    <div className="nameBadge">
      <h1 className="badgeTitle" style={{backgroundColor: (props.name.id % 2 === 0 ) ? "blue" : "red"}}>Badge:</h1>
      <h3>Name: {props.name.firstName} {props.name.lastName}</h3>
      <h3>Phone: {props.name.phoneNumber} </h3>
      <h3>Place of birth: {props.name.placeOfBirth}</h3>
      <h3>Favorite Food: {props.name.favoriteFood}</h3>
      <h3>Email: {props.name.email}</h3>
      <h3>{props.name.description}</h3>
  </div>
  )
}