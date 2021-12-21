import React, {useContext, useState} from "react";
import { Button, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { AppContext } from "../Context/AppProvider";
import AllThreads from "./AllThreads";



export default function Threads(){
  const {allThreads} = useContext(AppContext)
  const [topic, setTopic] = useState("")
  // function handleFilter(e){
  //  setTopic(e.target.value)

  // }
  return(
    <div style={{margin: "100px 200px"}}>
      {/* <InputLabel>Filter by topic</InputLabel>
      <Select 
      onChange={handleFilter}
      value={topic}
      name="filteredTopic"
      sx={{minWidth: "100px"}}>
        <MenuItem name="filteredTopic" value="all">All</MenuItem>
        <MenuItem name="filteredTopic" value="general">General</MenuItem>
        <MenuItem name="filteredTopic" value="tips">Tips</MenuItem>
        <MenuItem name="filteredTopic" value="styles">Styles</MenuItem>
        <MenuItem name="filteredTopic" value="materials">Materials</MenuItem>
      </Select> */}
      
      {allThreads.map(thread => <AllThreads key={thread._id} {...thread} />)}
    </div>
  )
}