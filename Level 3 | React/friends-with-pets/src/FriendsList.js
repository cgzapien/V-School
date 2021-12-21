import React from "react";
import Friend from "./Friend"
import friends from "./friends"

function FriendsList() {
    let homies = friends.map(homie => <Friend 
        key={homie.name}
        name={homie.name}
        age={homie.age}
        pets={homie.pets}
        />) 
    return (
        <div className="friendsListContainer">
            {homies}
        </div>
    )
}

export default FriendsList