import React from "react";
import Spot from "./Spot"
import vacationSpots from "./vacationSpots";

function Card(props) {
    const destinations = vacationSpots.map(destination => <Spot 
        key={destination.id} 
        place={destination.place}
        price={destination.price}
        timeToGo={destination.timeToGo}
        />) 
    return (
        <div className="card" >
            <div>
            {destinations}
            </div>
        </div>
    )
}

export default Card


