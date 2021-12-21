import React, {useContext, useState} from "react";

import { BountyHunterContext } from "../bountyHunterContext";
import AddBountyForm from "./AddBountyForm";

function BountyList(props) {
  const {firstName, lastName, living, bountyAmount, species, _id} = props
  const [editMode, setEditMode] = useState(false)
  const {editBounty, deleteBounty} = useContext(BountyHunterContext)
  return (
    <ul className="bounty" style={{border: "1px solid", marginTop: "10px", textAlign: "center", listStyleType: "none"}}>
      { !editMode ?
      <>
      <li style={{textAlign: "center", padding:"15px"}}>
        <h1>{firstName} {lastName}</h1>
        <p>Livng: {living}</p>
        <p>Bounty: {bountyAmount} parcels</p>
        <p>Type: {species}</p>
        <button onClick={() => deleteBounty(_id)} >Delete</button>
        <button onClick={() => setEditMode(prevEditMode => !prevEditMode)} >Edit</button>
      </li>
        </>
      :
      <>
        <AddBountyForm
        firstName={firstName}
        lastName={lastName}
        alive={living}
        _id={_id}
        bountyAmount={bountyAmount}
        species={species}
        btnText="Save"
        submit={editBounty}
        />
        <button
        onClick={() => setEditMode(prevEditMode => !prevEditMode)}
        >Close</button>
      </>
      }
    </ul>
  )
}
export default BountyList