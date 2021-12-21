// const readLireadLineSync = require('readline-sync')
// const intro = readLireadLineSync.keyIn("Hello, what is your name? \n\n [m]Mario [l]Lugi", {limit: "ml"})
function randomRange() { //generate random number 0-2
    return Math.floor((Math.random() * 3) + 0)
}
const statusOptions = ["Powered Up!", "Big", "Small", "Dead"]
class Player {
    constructor (name = "Mario") {
        this.name = name
        this.totalCoins = 0
        this.status = "Big" //options: powered up, big, small and dead
        this.hasStar = false //changes to true when you find a star
        this.gameActive = true //becomes false when status is dead
        this.print = function () { //print to console name, totalcoins, status and star propperties
            console.log(` 1. Name: ${this.name}\n 2. Status: ${this.status}\n 3. Total Coins: ${this.totalCoins}\n 4. Game Active: ${this.gameActive}\n`);
            if(this.hasStar === true) {
                console.log("You have a Star!")
            }
        }
    }
    setName(namePicked) { 
        this.name = name
        } 
    gotHit() { //if you get hit then downgrade status
        const enemies = ['Bowser', "Bob-omb", "Cheep-Cheep"];
        let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`${randomEnemy} hit you!\n`)
        if (this.status === "Powered Up!" ) {
            this.status = "Big"
            this.print()
        } else if (this.status === "Big") {
            this.status = "Small"
            this.print()
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false
            this.print()
            clearInterval(startGame)
        }
    }
    gotPowerUp() {
        console.log("status change\n")
       this.status = this.status+=1
        if(this.status === "Small") {
            this.status = "Big"
            this.print()
        } else if(this.status === "Big") {
            this.status = "Powered Up!"
            this.print()
         } 
        else if (this.status = "Powered Up!") {
            console.log("You found a star!\n")
            this.hasStar = true
            setTimeout(() => {this.hasStar = false}, 3000);
            console.log(`\nYour star protected you!`)
            this.print()
        } 
    }
    addCoin() { //add coin to totalCoins
        console.log("Found some Coins!\n")
        this.totalCoins = this.totalCoins+=1
        this.print()
    }
    
}

let mario = new Player ("Mario")
let luigui = new Player ("Luigi")

let startGame = setInterval(function start() {
    if(randomRange() === 0) {
        mario.gotHit()
    } else if (randomRange() === 1) {
        mario.addCoin()
    }  else if(randomRange() === 2) {
        mario.gotPowerUp()
    }       
    }, 1000)
    
    // let endGame = setTimeout(function stop() {
    //     clearInterval(startGame)
    //     console.log("end")
    // }, 10000)
