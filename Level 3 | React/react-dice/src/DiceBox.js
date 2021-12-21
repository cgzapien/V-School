import React from "react";
import Die from "./Die"


class DiceBox extends React.Component {
    constructor() {
        super()
        this.state= {
            dice: [
            {
                id: 0,
                num: 1,
                isHold: false,
                isRolled: 0
            },{
                id: 1,
                num: 1,
                isHold: false,
                isRolled: 0
            }, {
                id: 2,
                num: 1,
                isHold: false,
                isRolled: 0
            }, {
                id: 3,
                num: 1,
                isHold: false,
                isRolled: 0
            }, {
                id: 4,
                num: 1,
                isHold: false,
                isRolled: 0
            }]
        }
        this.randomNumGenerator = this.randomNumGenerator.bind(this)
        this.rollDice = this.rollDice.bind(this)
        this.holdDice = this.holdDice.bind(this)
    }
    randomNumGenerator() {
        return Math.floor(Math.random() * 6) +1
    } 
    rollDice() {
        console.log("i'm working")
        this.setState(prevState => {
            let newDiceNumberArray = []
            //look at each number object in prevState.numbers
            for(let i = 0; i < this.state.dice.length; i++) {
                // If isHold is false then generate random number
                let newObj = {...prevState.dice[i]}
                if(prevState.dice[i].isHold === false) {
                    newObj.num = this.randomNumGenerator()
                    //else isHold is true update rolled and if rolled is = to 3, if so generate random number
                } else{
                        if(prevState.dice[i].isRolled < 3) {
                            newObj.isRolled += 1
                        //once random number is generated change isHold to false
                        } else {
                            newObj.isRolled = 0
                            newObj.num = this.randomNumGenerator()
                            newObj.isHold = false
                    }
                }
                newDiceNumberArray.push(newObj)
            }
            return {dice: newDiceNumberArray}
        })
    }
    holdDice(id) {
        console.log("i'm working")
        this.setState(prevState => {
            if(!prevState.dice[id].isHold) {
                prevState.dice[id].isHold = true
            }
            return prevState
        })
    }
    
    render = () => {
        // let dices = this.state.dice.map(die => {
        //    return ( <div key={die.id} onClick={() => this.holdDice(die.id)}><h1>
        //        {die.num}</h1></div>)
        // }
        //     )
        let dices = this.state.dice.map(die => <Die
            holdDice={() => this.holdDice(die.id)}
            key={die.id}
            id={die.id}
            number={die.num}
            isHold={die.isHold}
            isRolled={die.isRolled}
            />)
            return (
                <div className="diceContainer">
                {dices}
                <button onClick={this.rollDice}>Roll Dice</button>
            </div>
        )
    }
}
export default DiceBox