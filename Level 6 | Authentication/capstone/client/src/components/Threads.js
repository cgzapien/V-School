import React, {useContext} from "react";
import { Typography } from "@mui/material";
import { AppContext } from "../Context/AppProvider";
import AllThreads from "./AllThreads";



export default function Threads(){
  const {allThreads} = useContext(AppContext)
  return(
    <div style={{marginLeft: "10px"}}>
      <Typography variant="h4">Threads that have been created</Typography>
      {allThreads.map(thread => <AllThreads key={thread._id} {...thread} />)}
    </div>
  )
}