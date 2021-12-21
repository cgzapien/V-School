import React from "react";
import Colors from "./Colors"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: [],
            randomInd: 0
        }
    }
    componentDidMount() {
        fetch(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(response => response.json())
        .then(data => { 
            console.log(data.colors.map(color => color.hex))
            this.setState({
                //const newColor = data.colors.map(color => color.hex
                color: data.colors
            })
        })
    }
    render() {
        let colors = this.state.color.map((c,i) => <Colors key={i} color={c} />)
        console.log(this.state.color.map(item => item.hex))
        return (
            <div>
                <h2 id="appTitle">Random Color Component</h2>
                {colors}
            </div>
        )
    }
}

export default App