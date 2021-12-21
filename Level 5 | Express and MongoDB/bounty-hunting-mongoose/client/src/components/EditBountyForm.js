import React from "react";

export default function EditBountyForm() {
  return (
    <form className="editForm">
      <input
      type="text"
      name="firstName"
      value={inputs.firstName}
      placeholder="First Name"
      onChange={handleChange}
      ></input>
      <input
      type="text"
      name="lastName"
      value={inputs.lastName}
      placeholder="Last Name"
      onChange={handleChange}
      ></input><br/>
      
      <input
      type="number"
      name="bountyAmount"
      value={inputs.bountyAmount}
      placeholder="Bounty Amount"
      onChange={handleChange}
      ></input><br/>
      <button>Submit Bounty</button>
    </form>
  )
}