import React from "react"

export default function Square(props) {
  let newColor = {backgroundColor : props.colors}
  return (
      <div >
        <p className="boxes" style={newColor}></p>
      </div>
  )
}