import React, {useContext} from "react";
import {UglyContext} from "./UglyThingsContext"

function UglyThingsForm() {
  const {inputData, handleSubmit, handleChange} = useContext(UglyContext)


  return (
    <form onSubmit={handleSubmit} className="uglyThingsForm">
      <input 
      type="text" 
      name="title"
      value={inputData.title}
      onChange={handleChange} 
      placeholder="Title"
      required="required"
      ></input>
      <input 
      type="text" 
      name="description" 
      value={inputData.description}
      onChange={handleChange} 
      placeholder="why is it ugly?"
      ></input>
      <input 
      type="text" 
      name="imgUrl" 
      value={inputData.imgUrl}
      onChange={handleChange} 
      placeholder="url"
      ></input>
      <br/>
      <button type="submit">Submit your Ugly Thing!</button>
    </form>
  )
}
export default UglyThingsForm