import React from "react";
import Targets from "./Targets"
//import godfather from "./media/godfather.mp3"

class App extends React.Component {
    constructor() {
        super()
        this.state = {       
            target: []
        }
        this.playAudio = this.playAudio.bind(this)
    }
    componentDidMount() {
        console.log('mount')
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    target: data
                })
            })
    }
    playAudio() {
        const audioEl = document.getElementsByClassName("godfatherTheme")[0]
        audioEl.play()
      }
    render() {
        let targets = this.state.target.map((name,index) => <Targets key={index} target={name}/>)
        return (
            <div className="hitListContainer">
                <audio autoPlay className="godfatherTheme">
                    <source src="src/media/godfather.mp3"></source> 
                </audio>
                <h1 id="donCTitle">Don Corleone's Hit List</h1>
                {targets}
            </div>
        )
    }
}
export default App