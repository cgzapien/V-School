import React from "react";

class NameBadge extends React.Component {
    render() {
        return (
            <div className="nameBadge">
                <h1 className="badgeTitle" style={{backgroundColor: (this.props.name.id % 2 === 0 ) ? "blue" : "red"}}>Badge:</h1>
                <h3>Name: {this.props.name.firstName} {this.props.name.lastName}</h3>
                <h3>Phone: {this.props.name.phoneNumber} </h3>
                <h3>Place of birth: {this.props.name.placeOfBirth}</h3>
                <h3>Favorite Food: {this.props.name.favoriteFood}</h3>
                <h3>Email: {this.props.name.email}</h3>
                <h3>{this.props.name.description}</h3>
            </div>
        )
    }
}

export default NameBadge