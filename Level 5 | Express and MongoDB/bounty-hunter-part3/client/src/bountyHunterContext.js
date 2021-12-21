import React, {useEffect, useState} from "react";
import axios from "axios"
const BountyHunterContext = React.createContext()

function BountyHunterProvider(props) {
  const [bountyList, setBountyList] = useState([])
  
  function getBounties() {
    fetch("/bounties")
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        setBountyList(res)})
      .catch(err => console.log(err)) 
  }
  function addBounty(newBounty) {
    axios.post("/bounties", newBounty)
      .then(res => setBountyList(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }
  function deleteBounty(_id) {
    //console.log('_id: ', _id);
    axios.delete(`/bounties/${_id}`)
      .then(res => {
        console.log(res)
        setBountyList(prevBounties => prevBounties.filter(bounty => bounty._id !== _id))
      })
      .catch(err => console.log(err))
  }
  const editBounty = (update, id) => {
    console.log('update: ', update);
    console.log('id: ', id);
    axios.put(`/bounties/${id}`, update)
      .then(res => {
        console.log(res)
        setBountyList(prevBounties => prevBounties.map(bounty => bounty._id !== id ? bounty : res.data))
      })
      .catch(res => console.log(res))
  }
  useEffect(() => {
    getBounties()
  }, [])
  return (
    <BountyHunterContext.Provider value={{bountyList, addBounty, deleteBounty, editBounty}}>
      {props.children}
    </BountyHunterContext.Provider>
  )
}

export {BountyHunterProvider, BountyHunterContext}