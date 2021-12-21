import React from "react";

import UglyThingsForm from "./UglyThingsForm"
import UglyThingsList from "./UglyThingsList"

function App() {
  return (
    <div className="app">
      <h1 id="uglyThingsTitle">World of Ugly Things</h1>
      <UglyThingsForm/>
      <UglyThingsList/>
    </div>
  )
}
export default App
