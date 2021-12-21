import React from "react";

class Colors extends React.Component {
    render() {

        return (
            <div className="colorComponent" style={{backgroundColor: `#${this.props.color.hex}`}}>
            </div>
        )
    }
}

export default Colors