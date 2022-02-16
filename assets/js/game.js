// Random number function 
const randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min)
  return value 
}

// creates a fight function
let playerName = window.prompt("What is your name ninja?")
let playerHealth = 100
let playerAttack = 10
let playerMoney = 10

console.log(playerName, playerHealth, playerAttack)

const enemyNames = ["Death Bringer", "Snake Charmer", "Shadow"]
let enemyHealth = randomNumber(40, 60)
const enemyAttack = 12

const fight = function(enemyName) { 
  
  while (playerHealth > 0 && enemyHealth > 0) {
    console.log(`${enemyName} has ${enemyHealth} hp`)
    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight.toLowerCase() === "skip") {
      const confirmSkip = window.confirm("Are you sure you'd like to skip?")
  
      if (confirmSkip) {
        window.alert(`${playerName} has ran away.`)
        playerMoney = Math.max(0, playerMoney - 10)
        console.log("player money: ", playerMoney)
        break
      } else {
        fight()
      }
    } 

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    let damageEnemy = randomNumber(playerAttack - 3, playerAttack)
    enemyHealth = Math.max(0, enemyHealth - damageEnemy)

    // Log a resulting message to the console so we know that it worked.
    console.log(`${playerName} attacked ${enemyName} with ${damageEnemy} damage. 
    ${enemyName} hp ${enemyHealth}`)

    if (enemyHealth <= 0) {
      window.alert(`${enemyName} has died`)
      break
    } else {
      window.alert(`${enemyName} still has ${enemyHealth} health left`)
    }

    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    let damagePlayer = randomNumber(enemyAttack - 3, enemyAttack)
    playerHealth = Math.max(0, playerHealth - damagePlayer)

    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemyName} attacked ${playerName} with ${damagePlayer} damage. 
    ${playerName} hp ${playerHealth}`)

    if (playerHealth <= 0) {
      window.alert(`${playerName} has died`)
      break
    } else {
      window.alert(`${playerName} still has ${playerHealth} health left`)
    }  
  }
}

const endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job surviving. Your score is " + playerMoney)
  } else {
    window.alert("Sorry you died.")
  }

  const playAgainConfirm = window.confirm("Would you like to play again?")

  if (playAgainConfirm) {
    playerHealth = 100
    enemyHealth = 50
    startGame()
  } else {
    window.alert("See ya! Come again soon")
  }
}

const shop = function() {
  var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")
  
  switch (shopOptionPrompt.toLowerCase()) {
    case "refill":
      if (playerMoney >= 7) {
        window.alert("Refilling players health by 20 for 7 dollars")

        // Increase health and decrease money 
        playerHealth += 20 
        playerMoney -= 7
      } else {
        window.alert("money seems too tight")
      }
      break
    case "upgrade":
      if (playerMoney >= 7) {
        window.alert("Refilling players health by 20 for 7 dollars")

        // Increase health and decrease money 
        playerAttack += 6
        playerMoney -= 7
      } else {
        window.alert("money seems too tight")
      }
      break
    case "leave":
      window.alert("Leaving the store")
      break
    default:
      window.alert("You didn't pick a valid option. Try again")

      shop()
      break
  }
}

const startGame = function() {
  for (i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to ninja showdown! Round " + (i + 1))
      let pickedEnemyName = enemyNames[i]
      enemyHealth = randomNumber(40, 60)
      fight(pickedEnemyName)
      if (playerHealth > 0 && i < enemyNames.length - 1) {
        const storeConfirm = window.confirm("The fight is over. Visit the store?")

        if (storeConfirm) {
          shop()
        }
      }
    } else {
      window.alert("You have died. Game Over!")
      break
    }
  }

  endGame()
}

startGame()

