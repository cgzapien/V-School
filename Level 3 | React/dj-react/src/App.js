import React from "react";


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            colors: ["white", "white", "white", "white"]
        }
        this.smallTimeDJ = this.smallTimeDJ.bind(this)
        this.partyDJ = this.partyDJ.bind(this)
        this.professionDJ = this.professionDJ.bind(this)
        this.professionDJ2 = this.professionDJ2.bind(this)
        this.bigTimeDJ1 = this.bigTimeDJ1.bind(this)
        this.bigTimeDJ2 = this.bigTimeDJ2.bind(this)
        this.bigTimeDJ3 = this.bigTimeDJ3.bind(this)
        this.bigTimeDJ4 = this.bigTimeDJ4.bind(this)
        this.soundBtn = this.soundBtn.bind(this)
    }
    smallTimeDJ() {
        this.setState(prevState => {
            if(prevState.colors[0] !== "white") {
                return {
                    colors: ["white", "white", "white", "white"]
                }
            } else if(prevState.colors[0] === "white"){
                return {
                    colors: ["black", "black", "black", "black"]
                }
            }
        })
    }
    partyDJ() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[0] = "purple"
            NewColor[1] = "purple"
            return {colors: NewColor}
        })
    }
    professionDJ() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[2] = "blue"
            return {colors: NewColor}
        })
    }
    professionDJ2() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[3] = "blue"
            return {colors: NewColor}
        })
    }
    bigTimeDJ1() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[0] = "darkred"
            return {colors: NewColor}
        })
    }
    bigTimeDJ2() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[1] = "lightblue"
            return {colors: NewColor}
        })
    }
    bigTimeDJ3() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[2] = "green"
            return {colors: NewColor}
        })
    }
    bigTimeDJ4() {
        this.setState(prevState => {
            let NewColor = prevState.colors
            NewColor[3] = "teal"
            return {colors: NewColor}
        })
    }
    soundBtn() {
        this.setState(prevState => {
        })
    }

    render () {
        let colors = this.state.colors.map((color,index) => <Square key={index} colored={color}/>)
        return (
            <div>
                <h1 className="header">DJ React</h1>
                <div className="boxGrid">
                    {colors}
                </div>
                <div className="buttons">
                <button onClick={this.smallTimeDJ}>Small Time DJ</button>
                <button onClick={this.partyDJ}>Party Dj</button>
                <button onClick={this.professionDJ}>Left Bottom Blue</button>
                <button onClick={this.professionDJ2}>Right Bottom Blue</button>
                <button onClick={this.bigTimeDJ1}>Big Time DJ 1</button>
                <button onClick={this.bigTimeDJ2}>Big Time DJ 2</button>
                <button onClick={this.bigTimeDJ3}>Big Time DJ 3</button>
                <button onClick={this.bigTimeDJ4}>Big Time DJ 4</button>
                <button onClick={this.soundBtn}>Make Noise</button>
                <audio autoPlay>
                    <source src="/Users/SMilES/Desktop/VSchool/assignments-level3/dj-react/src/audio/[YTHUB.CC] Super Mario Bros. Original Theme by Nintendo (8D AUDIO) 🎧-320k.mp3"></source>
                </audio>
                </div>
            </div>
        )
    }
}

class Square extends React.Component {
    render() {
        let newColor = {
            backgroundColor : this.props.colored
        }
        return (
            <div >
                <p className="boxes" style={newColor}>{this.props.colored}</p>
            </div>

        )
    }
}

export default App