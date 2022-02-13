// creates a fight function
let playerName = window.prompt("What is your name ninja?")
let playerHealth = 100 
const playerAttack = 10
let playerMoney = 10

console.log(playerName, playerHealth, playerAttack)

const enemyName = "Death Bringer"
let enemyHealth = 50
const enemyAttack = 12

const fight = function() {
  window.alert("Welcome to ninja showdown!")

  const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

  if (promptFight.toLowerCase() === "fight") {
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth -= playerAttack

    // Log a resulting message to the console so we know that it worked.
    console.log(`${playerName} attacked ${enemyName}. ${enemyName} hp ${enemyHealth}`)

    enemyHealth <= 0 ? 
      window.alert(`${enemyName} has died`) : 
      window.alert(`${enemyName} still has ${enemyHealth} health left`)

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth -= enemyAttack

    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName}. ${playerName} hp ${playerHealth}`)

    playerHealth <= 0 ? 
      window.alert(`${playerName} has died`) : 
      window.alert(`${playerName} still has ${playerHealth} health left`)

  } else if (promptFight.toLowerCase() === "skip") {
    const confirmSkip = window.confirm("Are you sure you'd like to skip?")

    if (confirmSkip) {
      window.alert(`${playerName} has ran away.`)
      playerMoney -= 2
    } else {
      fight()
    }

  } else {
    window.alert("No valid option chosen. Try again.")
  }
}

fight()
