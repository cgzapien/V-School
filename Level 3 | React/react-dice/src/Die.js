import React from "react";
import one from "./images/dice1.jpeg"
import two from "./images/dice2.jpeg"
import three from "./images/dice3.jpeg"
import four from "./images/dice4.jpeg"
import five from "./images/dice5.png"
import six from "./images/dice6.png"


class Die extends React.Component {
    render() {
        let diceImg = {
            backgroundImage: (this.props.number === 1) ? `url(${one})` : 
            (this.props.number === 2) ? `url(${two})` : 
            (this.props.number === 3) ? `url(${three})` :
            (this.props.number === 4) ? `url(${four})` : 
            (this.props.number === 5) ? `url(${five})` : `url(${six})`}
         
        return (
            <div className="dice"  style={diceImg} onClick={() => this.props.holdDice(this.props.id)}>
            {/* <p >{this.props.number}</p> */}
        </div>
        )
    }
}

export default Die