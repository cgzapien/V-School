import React, {useState} from "react";
import darthVaderBreathing from "../media/dvbreathing.mp3"
import useSound from "use-sound";

export default function AddBountyForm(props) {
  const [play] = useSound(darthVaderBreathing)
  const initialInputs = {
    firstName: props.firstName || "", 
    lastName: props.lastName || "", 
    bountyAmount: props.bountyAmount || "", 
    species: props.species || ""}
  const [inputs, setInputs] = useState(initialInputs)
  // console.log('inputs: ', inputs);

  function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInputs => ({...prevInputs, [name]: value}))
  }
  function handleSubmit(e) {
    e.preventDefault()
    props.submit(inputs, props._id)
    setInputs(initialInputs)
  }
  return (
    <form className="bountyForm" onSubmit={handleSubmit} style={{marginTop: "10px", padding:"20px"}}>
      <label>First Name</label>
      <input
      style={{marginLeft: "15px"}}
      type="text"
      name="firstName"
      value={inputs.firstName}
      placeholder="First Name"
      onChange={handleChange}
      ></input>
      <br/>
      <label>Last Name</label>
      <input
      style={{marginLeft: "15px", marginTop:"10px"}}
      type="text"
      name="lastName"
      value={inputs.lastName}
      placeholder="Last Name"
      onChange={handleChange}
      ></input>
      <br/>
      <label htmlFor="species">Choose Species</label>
      <select name="species" value={inputs.species} onChange={handleChange} style={{marginLeft: "15px", marginTop:"10px"}}>
        <option  name="species" value="Jedi" >Jedi</option>
        <option name="species" value="Sith" >Sith</option>
        <option name="species" value="Civilian" >Civilian</option>
        </select>
      <br/>
      <label>Bounty</label>
      <input
      style={{marginLeft: "15px", marginTop:"10px"}}
      type="number"
      name="bountyAmount"
      value={inputs.bountyAmount}
      placeholder="Bounty Amount"
      onChange={handleChange}
      ></input><br/>
      <button style={{marginTop:"10px"}} className="submitBtn" onMouseDown={play}>{props.btnText}</button>
    </form>
  )
}