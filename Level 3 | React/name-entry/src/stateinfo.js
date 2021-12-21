this.setState(prevState => {
    return {
        names: [{
            firstName: prevState.firstName,
            lastName: prevState.lastName
        }, ...prevState.names],
        firstName: "" ,
        lastName: ""

    }
})