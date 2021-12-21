import { Typography , Button, TextField, Stack} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import axios from "axios"

export default function AllThreads(props){
  const { threadName, topic, user, _id, dateCreated} = props
  const date = new Date(dateCreated).toLocaleDateString()
  const [username, setUsername] = useState("")
  
  const linkStyles = {
    // textDecoration: "none",
    color: "#000000"
  }
  function getUser(){
    axios.get(`/auth/${user}`)
      .then(res => setUsername(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getUser()
  }, [])
  return (
    <div style={{marginBottom: "10px"}}>
      <Stack>
      <Typography variant="h5">Title: <Link to={`/thread/${_id}`} className="threadLink" style={linkStyles}>{threadName}</Link></Typography>
      <Typography variant="h5">Topic: {topic}</Typography>
      <Typography variant="h5">Username: {username}</Typography>
      <Typography variant="h5">{date}</Typography>
      </Stack>
    </div>
  )
}