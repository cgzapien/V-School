import React from "react";
import Pet from "./Pet"

function Friend(props) {
    let pets = props.pets.map((pet) =>
        <Pet
        key={pet.name}
        petName={pet.name}
        petBreed={pet.breed}
        />
    )
    return (
        <div className="friend" style={{border: (props.pets.length < 2) ? "2px solid red":"2px solid blue" }}>
            <h1 className="firendName">{props.name}</h1>
            <h2 className="firendAge">{props.age}</h2>
            <h3 className="friendPetNum" >number of pets: {props.pets.length}</h3>
            {pets}
        </div>

    )

}

export default Friend