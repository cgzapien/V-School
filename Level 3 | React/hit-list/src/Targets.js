import React from "react";

class Targets extends React.Component {
    constructor() {
        super()
        this.state = {
            targetWhacked: false
        }
    }

    render() {
        return (
            <div className="targetContainer">
                <h1>{this.props.target.name}</h1>
                <img className="hitListImage" src={this.props.target.image} alt=""></img>
            </div>
        )
    }
}

export default Targets