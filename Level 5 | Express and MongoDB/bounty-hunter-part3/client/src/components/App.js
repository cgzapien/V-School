import React, {useContext} from "react";

import BountyList from "./BountyList";
import AddBountyForm from "./AddBountyForm";
import { BountyHunterContext } from "../bountyHunterContext";

function App() {
  const {bountyList, addBounty } = useContext(BountyHunterContext)
  
  
  return (
   <div>
     <h1 style={{textAlign:"center"}}>Bounty Hunter Pt. 3</h1>
     <AddBountyForm btnText="Add Bounty" submit={addBounty}/>
     {bountyList.map(bounty => <BountyList {...bounty} key={bounty._id}/>) }
   </div>
  )
}
export default App