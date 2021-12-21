const readlineSync = require("readline-sync");
const welcome = readlineSync.question("Welcome to Colossal Adventure!! You must embark on a journey across the treacherous Rainbow Road! \n\nBut first what is your name? ");
let distanceLeftToTravel = 100;
console.log("\nWelcome " + welcome + "! Your SpaceShip is " + distanceLeftToTravel + "ft across RainBow Road! Will you make it??")

let playerName = welcome;
let playerHp = 100;
let inventory = {potion: 0}
let playerStats = "\n\nPlayer Name: " + playerName + "\nHealth: " + playerHp + "\nInventory: " + inventory.potion; 
let enemies = ['Darth Vader', "Hans Gruber", "Thanos"];
let randomEnemy = () => enemies[Math.floor(Math.random() * enemies.length)];


function walk () {
  let walking = readlineSync.keyIn("\nWhat will you do?\n\n[w]Wallk [p]Player Info [q]Quit ", {limit: "wpq"})
  let chanceOfBeingAttacked = Math.floor(Math.random() * 100);
  // console.log(inventory)
  // inventory['potion'] = inventory['potion'] + 1
  // console.log(inventory)
  let playerStats = "\n\nPlayer Name: " + playerName + "\nHealth: " + playerHp + "\nInventory: " + inventory.potion + " potion(2)";
  //console.log(chanceOfBeingAttacked)
  if (walking === "w" && distanceLeftToTravel >= 0) {
    let distanceWalked = Math.floor(Math.random() * 25)
    distanceLeftToTravel = distanceLeftToTravel - distanceWalked;
    //console.log(distanceWalked)
    console.log("\nDistance Left To Travel: " + distanceLeftToTravel + "ft.")
    if (chanceOfBeingAttacked > 25) {
      walk()
    } else {
      const enemy = randomEnemy()
      fightEnemy(enemy, 50)
    }
  } else if (walking === "p") {
    console.log(playerStats)
  } else if (walking === "q") {
    console.log("\nGame Over!\n")
    distanceLeftToTravel = -1
  } else if (distanceLeftToTravel <= 0) {
    distanceLeftToTravel = -1
    console.log("\nCongratulations you reached your Space Ship. Time to take off!!\n")
  }
}

function fightEnemy (enemy, enemyHp) {
  console.log('\n' + enemy + " has appeared. What do you want to do?")
  while (playerHp >= 0 && enemyHp >= 0) {
    let damageInflictedOnEnemy =  Math.floor(Math.random() * (75 - 25) + 25)
    let damageInflictedOnPlayer =  Math.floor(Math.random() * (35 - 0) + 0)
    let hpReceivedFroKillinEnemy = Math.floor(Math.random() * (50 - 25) + 25)
    let potionReceivedFromKillingEnemy = Math.floor(Math.random() * (10 - 0) + 0)
    let chanceOfEscaping = randomGenerator();
    function randomGenerator () {
      return Math.floor(Math.random() * 100);
    }
    const fight = readlineSync.keyIn("\nFight[f] Run[r] ", {limit: "fr"})
    if (fight === "f") {
      console.log("\n" + welcome + "'s Health: " + playerHp)
      playerHp = playerHp - damageInflictedOnPlayer
      //console.log(damageInflictedOnPlayer)
      console.log(enemy +"'s Health: " + enemyHp)
      enemyHp = enemyHp - damageInflictedOnEnemy
      //console.log(damageInflictedOnEnemy)
      console.log("\nyou both attack!")
      console.log("\n" + welcome + "'s Health remaining: " + playerHp)
      console.log(enemy +"'s Health remaining: " + enemyHp)
      
        if(enemyHp <= 0) {
          playerHp  = hpReceivedFroKillinEnemy + playerHp
          console.log(`\nEnemy is dead! You received ${hpReceivedFroKillinEnemy} HP points and ${potionReceivedFromKillingEnemy} potion(s)`)
          //console.log(hpReceivedFroKillinEnemy)
          //console.log(potionReceivedFromKillingEnemy)
          inventory.potion = inventory.potion + potionReceivedFromKillingEnemy
          console.log(inventory)
          //console.log(playerStats)
          walk()
          } else if ( playerHp <= 0) {
            console.log(`\n${enemy} has killed you! The treacherous Rainbow Road has claimed another victim!\n`)
            distanceLeftToTravel = -1
          }
    } else if (fight === "r") {
      chanceOfEscaping = randomGenerator();
      //console.log("chanceOfEscaping:" + chanceOfEscaping)
      if (chanceOfEscaping > 50) {
        console.log("\nYou escaped!!!")
        break;
        //walk()
      } else if (chanceOfEscaping< 50) {
        chanceOfEscaping = randomGenerator();
        console.log("\nNice try but you can't run from me!")
        playerHp = playerHp - damageInflictedOnPlayer
        console.log("\nWhile trying to escape the enemy attacked and now your health is: " + playerHp)
        fightEnemy(enemy, enemyHp)
        break;
      } 
    }
  }
}



while (distanceLeftToTravel >= 0) {
  walk()
}