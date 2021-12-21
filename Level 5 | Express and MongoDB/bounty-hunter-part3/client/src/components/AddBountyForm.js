import React, {useState} from "react";

export default function AddBountyForm(props) {
  const initInputs = {
  firstName: "" || props.firstName,
  lastName: "" || props.lastName,
  living: "true",
  bountyAmount: "" || props.bountyAmount,
  species: "" || props.species}
  const [inputs, setInputs] = useState(initInputs)


  function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }
  
  function handleSubmit(e) {
    e.preventDefault()
    props.submit(inputs, props._id)
  }
  return (
    <form className="bountyForm" onSubmit={handleSubmit}>
      <label>First Name</label>
      <input 
      type="text" 
      name="firstName" 
      value={inputs.firstName} 
      onChange={handleChange} 
      placeholder="First Name"></input>
      <br/>
      <label>Last Name</label>
      <input 
      type="text" 
      name="lastName" 
      value={inputs.lastName} 
      onChange={handleChange} 
      placeholder="Last Name"></input>
      <br/>
      <label>Bounty Amount</label>
      <input 
      type="number" 
      name="bountyAmount" 
      value={inputs.bountyAmount} 
      onChange={handleChange} 
      placeholder="Bounty Amount"></input>
      <br/>
      <label htmlFor="type">Choose Bounty Type</label>
      <select name="species" onChange={handleChange}>
        <option  name="species" value="Jedi" >Jedi</option>
        <option name="species" value="Sith" >Sith</option>
        <option name="species" value="Civilian" >Civilian</option>
      </select>
      <br/>
      <button>{props.btnText}</button>
    </form>
  )
}