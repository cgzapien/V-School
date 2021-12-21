import React, { useState, useEffect }from "react";
import Targets from "./Targets"
//import godfather from "./media/godfather.mp3"

export default function App() {
  const [targetsList, setTargetsList] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then(response => response.json())
      .then(data => {setTargetsList(() => [...data])
      })
      .catch(err => console.log(err))
  }, [])
  console.log(targetsList);
  let targets = targetsList.map((name,index) => <Targets key={index} target={name}/>)
  return (
    <div className="hitListContainer">
        <audio autoPlay className="godfatherTheme">
            <source src="src/media/godfather.mp3"></source> 
        </audio>
        <h1 id="donCTitle">Don Corleone's Hit List</h1>
        {targets}
    </div>
  )
}