import React, { useContext } from "react";
import { CardMedia, Typography } from "@mui/material";
import { UserContext } from "../../context/UserProvider";

function Home(){
  const { user: {username}} = useContext(UserContext)
  const header = {margin: "80px 30%"}
  return (
    <div className="homepage">
      <Typography variant="h1" style={header}>
        Welcome {username}!
      </Typography>
      {/* <div style={{position: "relative", paddingBottom: "56.25%", height: 0}}><iframe title="loom" src="https://www.loom.com/embed/673b5e76def84b9da74372883085422c" frameBorder="0"   allowFullScreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "50%"}}></iframe></div> */}
    </div>
  )
}
export default Home