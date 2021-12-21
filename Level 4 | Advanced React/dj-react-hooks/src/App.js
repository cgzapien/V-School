import React, { useState } from "react";
import Square from "./Square";

export default function App() {
  const [colorsData, setColorsData] = useState(["white", "white", "white", "white"])
  //console.log(colorsData);
  
  function smallTimeDJ() {
    console.log("btn working")
    setColorsData(prevColorsData => {
      if(prevColorsData[0] !== "white") {
        return ["white", "white", "white", "white"]
      } else if(prevColorsData[0] === "white") {
        return ["black", "black", "black", "black"]
      }
    })
  }
  function partyDJ() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[0] = "purple"
      newColors[1] = "purple"
      return newColors
    })
  }
  function professionDJ() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[2] = "blue"
      return newColors
    })
  }
  function professionDJ2() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[3] = "blue"
      return newColors
    })
  }
  function bigTimeDJ1() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[0] = "darkred"
      return newColors
    })
  }
  function bigTimeDJ2() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[1] = "lightblue"
      return newColors
    })
  }
  function bigTimeDJ3() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[2] = "yellow"
      return newColors
    })
  }
  function bigTimeDJ4() {
    setColorsData(prevColorsData => {
      let newColors = [...prevColorsData]
      newColors[3] = "pink"
      return newColors
    })
  }
  // function cycleColor() {
  //   setInterval(function(){ 
  //    ; }, 1000);
  // }
  let boxColors = colorsData.map((color, index) => <Square key={index} colors={color}/>)
  return (
    <div>
        <h1 className="header">DJ React</h1>
          <div className="boxGrid">
            {boxColors}
          </div>
          <div className="buttons">
            <button onClick={smallTimeDJ}>Small Time DJ</button>
            <button onClick={partyDJ}>Party Dj</button>
            <button onClick={professionDJ}>Left Bottom Blue</button>
            <button onClick={professionDJ2}>Right Bottom Blue</button>
            <button onClick={bigTimeDJ1}>Big Time DJ 1</button>
            <button onClick={bigTimeDJ2}>Big Time DJ 2</button>
            <button onClick={bigTimeDJ3}>Big Time DJ 3</button>
            <button onClick={bigTimeDJ4}>Big Time DJ 4</button>
            <button >Cycle colors</button>
          </div>
    </div>
  )
}