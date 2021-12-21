import React from "react";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            names: [],
            firstName: "",
            lastName: ""
    
    }
        console.log(this.state)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        console.log("I'm working on change")
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        console.log("I'm working on submit")
        event.preventDefault()
        //alert(`A name was submitted: ${this.state.firstName} ${this.state.lastName}`);
        this.setState(prevState => {
            return {
                names: [{
                    firstName: prevState.firstName,
                    lastName: prevState.lastName
                    }, ...prevState.names],
                    firstName: "",
                    lastName: ""
            }
        })
    }
    render() {
        let names = this.state.names.map((name, index) => {
           return (
                <li key={index}>{name.firstName} {name.lastName}</li>
            )
        })
        return (
            <main className="nameContainer">
                <form className="nameForm" onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                placeholder="First Name"
                ></input>
                
                
                <input 
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                placeholder="Last Name"
                ></input>
                <h1>Name: {this.state.firstName} {this.state.lastName}</h1>
                <button>Submit Name</button>
                <ol>
                    {names}
                </ol>
                </form>
            </main>
        )
    }
}

export default App