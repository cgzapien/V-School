import React, {useState, useEffect}from "react";
import axios from "axios"

import List from "./List"
import AddBountyForm from "./AddBountyForm";

export default function App(props) {
  const [bounties, setBounties] = useState([])
  //console.log('bounties: ', bounties);

  function getBounty() {
    axios.get("/bounty")
      .then(res => {
        //console.log(res)
        setBounties(res.data)
      })
      .catch(err => console.log(err.response.data.err))
  }
  function postBounty(inputObject) {
    console.log('inputObject: ', inputObject);
    axios.post("/bounty", inputObject)
      .then(res => {
        //console.log(res.data)
        setBounties(prevBounties => [...prevBounties, res.data])
      })
      .catch(err => console.log(err))
  }
  function deleteBounty(bountyId) {
    console.log('bountyId: ', bountyId);
    axios.delete(`./bounty/${bountyId}`)
      .then(res => {
        //console.log(res)
        setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
      })
      .catch(err => console.log(err))
  }
  function editBounty(updates, bountyId) {
    console.log('updates: ', updates);
    axios.put(`./bounty/${bountyId}`, updates)
      .then(res => {
        console.log(res.data)
    setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getBounty()
  }, [])
  return (
   <div >
     <h1 className="bountyHeader">Star Wars Bounty Hunter</h1>
     <AddBountyForm submit={postBounty} btnText="Submit Bounty"/>

     <div className="bountyList">
     {bounties.map(bounty => <List 
     key={bounty._id} 
     data={bounty} 
     deleteBounty={deleteBounty}
     editBounty={editBounty}
     />)}

     </div>
   </div>
  )
}