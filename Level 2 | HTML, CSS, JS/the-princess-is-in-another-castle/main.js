function randomRange() { //generate random number 0-2
    return Math.floor((Math.random() * 3) + 0)
}
class Player {
    constructor (name) {
        this.name = name
        this.totalCoins = 0
        this.status = "Big" //options: powered up, big, small and dead
        this.hasStar = false //changes to true when you find a star
        this.gameActive = true //becomes false when status is dead
    }
    setName(name) { 
        this.name = name
        } 
    gotHit() { //if you get hit then downgrade status
        const enemies = ['Bowser', "Bob-omb", "Cheep-Cheep"];
        let randomEnemy = enemies[Math.floor(Math.random() * enemies.length)];
        console.log(`${randomEnemy} hit you!\n`)
        if (this.status === "Powered Up!" ) {
            this.status = "Big"
            newPlayer.print()
        } else if (this.status === "Big") {
            this.status = "Small"
            newPlayer.print()
        } else if (this.status === "Small") {
            this.status = "Dead"
            this.gameActive = false
            console.log(` You Died!!\n Final Game Stats\n 1. Name: ${this.name}\n 2. Status: ${this.status}\n 3. Total Coins: ${this.totalCoins}\n 4. Star status: ${this.hasStar}\n 5. Game Active: ${this.gameActive}\n`)
            clearInterval(startGame)
        }
    }
    gotPowerUp() {
        console.log("PowerUp!\n")
        // const statusOptions = ["Powered Up!", "Big", "Small", "Dead"]
        // let randomStatusGenerator = statusOptions[Math.floor(Math.random() * statusOptions.length)];
        // console.log("You got " + randomStatusGenerator + "\n")
        // this.status = randomStatusGenerator
        if(this.status === "Small") {
            this.status = "Big"
        } else if(this.status === "Big") {
            this.status = "Powered Up!"
         } 
        if (this.status === "Powered Up!") {
            console.log("You found a star!\n")
            this.hasStar = true
            setTimeout(() => {this.hasStar = false}, 3000);
            // console.log(`Your star protected you!`)
        } 
        newPlayer.print()
    }
    addCoin() { //add coin to totalCoins
        console.log("Found some Coins!\n")
        // let randomCoinGenerator = Math.floor((Math.random() * 5) + 1)
        // console.log("+" + randomCoinGenerator + "\n")
        // this.totalCoins = this.totalCoins + randomCoinGenerator
        this.totalCoins = this.totalCoins+=1
        newPlayer.print()
    }
    print() { //print to console name, totalcoins, status and star propperties
        console.log(` 1. Name: ${this.name}\n 2. Status: ${this.status}\n 3. Total Coins: ${this.totalCoins}\n 4. Star status: ${this.hasStar}\n 5. Game Active: ${this.gameActive}\n`)
    }
}

let newPlayer = new Player ("")

newPlayer.setName("Mario")

let startGame = setInterval(function start() {
    if(randomRange() === 0) {
        newPlayer.gotHit()
    } else if (randomRange() === 1) {
        newPlayer.addCoin()
    }  else if(randomRange() === 2) {
        newPlayer.gotPowerUp()
    }       
    }, 1000)
    
    // let endGame = setTimeout(function stop() {
    //     clearInterval(startGame)
    //     console.log("end")
    // }, 10000)
