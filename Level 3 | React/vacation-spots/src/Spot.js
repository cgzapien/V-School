import React from "react";

function Spot(props) {
    const money = (props.price < 500) ? "$" : (props.price < 1000 && props.price > 500) ? "$$" : "$$$"

    const handleChange = (e) => {
        let checked = e.target;
        if(checked) {

            console.log("checked")
        } else if (!checked) {
            console.log("not checked")
        }
    }
    return (
        <div className="spot" style={{backgroundColor: (props.timeToGo === "Fall") ? "lightblue" : (props.timeToGo === "Summer") ? "green" : (props.timeToGo === "Spring") ? "purple" : "red"}}>
            <h1>{money}</h1>
            {/* <input className="checked" type="checkbox" onChange={handleChange} /> */}
            <h1 >Place: {props.place}</h1>
            <h2 >Price: {props.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</h2>
            <h3 >Best Time to go: {props.timeToGo}</h3> 
        </div>
    )
}

export default Spot
