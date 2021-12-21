import React, { useState, useEffect}from "react";
import axios from "axios";
const UglyContext = React.createContext()

function UglyThingsProvider(props) {
const [inputData, setInputData] = useState({title: "", description: "", imgUrl: ""})
const [uglyThingsList, setUglyThingsList] = useState([])
const [editMode, setEditMode] = useState(false)
const [editedInputData, setEditInputData] = useState({title: ""})

function handleChange(event) {
  const {name, value} = event.target
  setInputData(prevInputData => ({...prevInputData, [name]: value}))
}
function handleEditChange(event) {
  const {name, value} = event.target
  setEditInputData(prevInputData => ({...prevInputData, [name]: value}))
}

function handleSubmit(event) {
  event.preventDefault()
  const newUglything = {...inputData}
  setInputData(()=> ({
    title: "", 
    description: "", 
    imgUrl: ""
  }))
  axios.post("https://api.vschool.io/carlosz/thing", newUglything)
    .then(() => getData())
    .catch(err => console.log(err))
}

function handleDelete(id) {
  axios.delete(`https://api.vschool.io/carlosz/thing/${id}`)
    .then(() => getData())
    .catch(err => console.log(err))
}
function handleEdit(id, uglyThingsTitle) {
  console.log(id, uglyThingsTitle)
  setEditMode(prevEditStatus => !prevEditStatus)
}
function handleSave(id, uglyThingsTitle) {
  console.log(id, uglyThingsTitle)
  setEditMode(prevEditStatus => prevEditStatus = false)
  const newTitle = {...editedInputData}
  console.log(newTitle);
  // axios.put(`https://api.vschool.io/carlosz/thing/${id}`, newTitle)
  //   .then(() => getData())
  //   .catch(err => console.log(err))
}

function getData() {
  fetch("https://api.vschool.io/carlosz/thing")
    .then(response => response.json())
    .then(data=> {(setUglyThingsList(() => [...data]))})
    .catch(err => console.log(err))
}

useEffect(() => {
  getData()
},[])

  return (
    <UglyContext.Provider 
    value={{
    uglyThingsList, 
    inputData, 
    editMode, 
    editedInputData,
    handleSubmit, 
    handleChange, 
    handleDelete, 
    handleEdit, 
    handleSave, 
    handleEditChange}}>
      {props.children}
    </UglyContext.Provider>
  )
}
export {UglyThingsProvider, UglyContext}