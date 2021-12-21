import React from "react";
import NameBadge from "./NameBadge";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            nameBadges: [],
            id: 0,
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phoneNumber: "",
            favoriteFood: "",
            description: ""
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         this.enableSubmit = this.enableSubmit.bind(this)
    }
    handleChange(event) {
        //console.log("I'm working on change")
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        this.setState(prevState => {
            return {
                nameBadges: [{
                    id: prevState.id += 1,
                    firstName: prevState.firstName,
                    lastName: prevState.lastName,
                    email: prevState.email,
                    placeOfBirth: prevState.placeOfBirth,
                    phoneNumber: prevState.phoneNumber,
                    favoriteFood: prevState.favoriteFood,
                    description: prevState.description
                }, ...prevState.nameBadges],
                    firstName: "",
                    lastName: "",
                    email: "",
                    placeOfBirth: "",
                    phoneNumber: "",
                    favoriteFood: "",
                    description: ""
            }
        })
    }
    enableSubmit() {
        const inputs = document.getElementsByTagName("input")
        const submitButton = document.getElementById("submitBtn")
        for(let i = 0; i < inputs.length; i++) {
            // if(inputs[i].value === "") {
                //     submitButton.disabled = true
                // } else {
                    //     submitButton.disabled = false
                    // }
                    (inputs[i].value === "") ? submitButton.disabled = true : submitButton.disabled = false;
                }
            }
            render() {
                let badges = this.state.nameBadges.map(name => <NameBadge 
        key={name.id}
        name={name}
            />)
        const {firstName, lastName, email, placeOfBirth, phoneNumber, favoriteFood, description} = this.state
        const isEnabled = firstName.length > 3 && lastName.length > 3 && placeOfBirth.length > 3 && phoneNumber.length > 3 && favoriteFood.length > 3 && email.length > 3 && description.length > 3
        return (
            <div className="nameBadgeDiv">
                <form className="nameBadgeForm" onSubmit={this.handleSubmit}>
                <input 
                className="dataInput"
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                minLength="3"
                size="40"
                ></input>
                <input 
                className="dataInput"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
                minLength="3"
                size="40"
                ></input>
                <input 
                className="dataInput"
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                minLength="3"
                size="40"
                ></input>
                <input 
                className="dataInput"
                type="text"
                name="placeOfBirth"
                value={this.state.placeOfBirth}
                onChange={this.handleChange}
                placeholder="Place of Birth"
                minLength="3"
                size="40"
                ></input>
                <input 
                className="dataInput"
                type="tel"
                name="phoneNumber"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
                placeholder="Phone Number"
                minLength="3"
                size="40"
                maxLength="10"
                ></input>
                <input 
                className="dataInput"
                type="text"
                name="favoriteFood"
                value={this.state.favoriteFood}
                onChange={this.handleChange}
                placeholder="Favorite Food"
                minLength="3"
                size="40"
                ></input>
                <textarea
                className="dataInput"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Tell us about yourself"
                minLength="3"
                rows="10" 
                cols="80"
                ></textarea>
                <button id="submitBtn" disabled={!isEnabled}>Submit</button>
               </form>
                <ul>
                    {badges}
                </ul>
            </div>
        )
    }
}

export default App