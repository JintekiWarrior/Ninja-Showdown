// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

// creates a fight function
let playerName = window.prompt("What is your name ninja?")
let playerHealth = 100
const playerAttack = 10
let playerMoney = 10

console.log(playerName, playerHealth, playerAttack)

const enemyNames = ["Death Bringer", "Snake Charmer", "Shadow"]
let enemyHealth = 50
const enemyAttack = 12

const fight = function(enemyName) { 
  
  while (playerHealth > 0 && enemyHealth > 0) {
    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight.toLowerCase() === "skip") {
      const confirmSkip = window.confirm("Are you sure you'd like to skip?")
  
      if (confirmSkip) {
        window.alert(`${playerName} has ran away.`)
        playerMoney -= 10
        console.log("player money: ", playerMoney)
        break
      } else {
        fight()
      }
    } 
    
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth -= playerAttack

    // Log a resulting message to the console so we know that it worked.
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} hp ${enemyHealth}`)

    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died`)
      break
    } else {
      window.alert(`${enemyName} still has ${enemyHealth} health left`)
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth -= enemyAttack

    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} hp ${playerHealth}`)

    if (playerHealth <= 0) {
      window.alert(`${playerName} has died`)
      break
    } else {
      window.alert(`${playerName} still has ${playerHealth} health left`)
    }  
  }
}

for (i = 0; i < enemyNames.length; i++) {
  let pickedEnemyName = enemyNames[i]
  enemyHealth = 50
  fight(pickedEnemyName)
}
