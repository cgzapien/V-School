import React,{useContext} from "react";
import {UglyContext} from "./UglyThingsContext"

function UglyThingsList() {
  const {
    uglyThingsList, 
    handleDelete, 
    handleEdit, 
    editMode, 
    handleSave,
    editedInputData, 
    handleEditChange} = useContext(UglyContext)
    
  const uglyThings = uglyThingsList.map(thing => {
  return (

      <li id={thing["_id"]} key={thing["_id"]} style={{display: (editMode === false)}} className="listItem">
        <div style={{display: editMode && "none"}}>
        <h1 >{thing.title}</h1>
        <h2>{thing.description}</h2>
        </div>
        <div style={{display: !editMode && "none"}}>
          <input
          type="text" 
          name="title"
          value={editedInputData.title}
          onChange={handleEditChange} 
          placeholder="Title"
          required="required"
          ></input>
          <br/>
          <h2>{thing.description}</h2>
          {/* <input
          type="text" 
          name="description" 
          value={inputData.description}
          onChange={handleChange} 
          placeholder="why is it ugly?"
          ></input> */}
        </div>
        <img src={thing.imgUrl} alt=""></img>
        <br/>
        <div style={{display: editMode && "none"}}>
        <button id="editBtn" onClick={() => handleEdit(thing["_id"], thing["title"])}>Edit</button>
        <button id="deleteBtn" onClick={() => handleDelete(thing["_id"])}>Delete</button>
        </div>
        <div style={{display: !editMode && "none"}}>
          <button id="saveBtn" onClick={() => handleSave(thing["_id"], thing["title"])}>Save</button>
          <button id="deleteBtn" onClick={() => handleDelete(thing["_id"])}>Delete</button>
        </div>
      </li>
    )}
  )
  
  return (
   <ul className="uglyThingsList">
     {uglyThings}
   </ul>
  )
}
export default UglyThingsList