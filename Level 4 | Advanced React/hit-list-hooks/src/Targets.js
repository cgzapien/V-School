import React from "react";

export default function Targets(props) {
  return (
    <div className="targetContainer">
        <h1>{props.target.name}</h1>
        <img className="hitListImage" src={props.target.image} alt=""></img>
    </div>
  )
}