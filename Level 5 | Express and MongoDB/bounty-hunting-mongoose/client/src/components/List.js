import React, {useState}from "react";
import AddBountyForm from "./AddBountyForm";
import lightsaber from "../media/lightsaber-clip.m4a"
import useSound from "use-sound"

export default function List(props) {
  const {firstName, lastName, bountyAmount, species, _id,} = props.data
  const {deleteBounty, editBounty} = props
  const [editMode, setEditMode] = useState(false)
  const [play] = useSound(lightsaber)
  return (
    <div className="wantedPoster">
      {!editMode ?
      <>
        <h1>Wanted: <br/>Dead or Alive</h1>
        <h1>Name: {firstName} {lastName}</h1>
        <p>{species}</p>
        <h1>Reward: <u>{bountyAmount}</u> Imperial Credits</h1>
        <button className="deleteBtn" onClick={() => deleteBounty(_id)} onMouseDown={play}>Delete</button>
        <button className="editBtn" onClick={() => setEditMode(prevEditMode => !prevEditMode)} onMouseDown={play}>Edit</button>
        </>
        :
        <>
        <AddBountyForm
        firstName={firstName}
        lastName={lastName}
        bountyAmount={bountyAmount}
        species={species}
        _id={_id}
        btnText="Submit Edit" 
        submit={editBounty}
        />
        <button onClick={()  => setEditMode(prevEditMode => !prevEditMode)}>Close</button>
        </>
      }
    </div>
  )
}