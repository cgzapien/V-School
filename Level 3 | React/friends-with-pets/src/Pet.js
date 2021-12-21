import React from "react"

function Pet(props) {
    return (
        <div className="pet">
            <h3 className="petName">name: {props.petName}</h3>
            <h4 className="petBreed">breed: {props.petBreed}  </h4>
        </div>
    )
}

export default Pet