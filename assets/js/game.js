
const fight = function(enemy) { 
  
  while (playerInfo.health > 0 && enemy.health > 0) {
    console.log(`${enemy.name} has ${enemy.health} hp`)
    const promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if (promptFight.toLowerCase() === "skip") {
      const confirmSkip = window.confirm("Are you sure you'd like to skip?")
  
      if (confirmSkip) {
        window.alert(`${playerInfo.name} has ran away.`)
        playerInfo.money = Math.max(0, playerInfo.money - 10)
        console.log("player money: ", playerInfo.money)
        break
      } else {
        fight()
      }
    } 

    //Subtract the value of `playerInfo.attack` from the value of `enemy.health` and use that result to update the value in the `enemy.health` variable
    let damageEnemy = randomNumber(playerInfo.attack - 3, playerInfo.attack)
    enemy.health = Math.max(0, enemy.health - damageEnemy)

    // Log a resulting message to the console so we know that it worked.
    console.log(`${playerInfo.name} attacked ${enemy.name} with ${damageEnemy} damage. 
    ${enemy.name} hp ${enemy.health}`)

    if (enemy.health <= 0) {
      window.alert(`${enemy.name} has died`)
      break
    } else {
      window.alert(`${enemy.name} still has ${enemy.health} health left`)
    }

    // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
    let damagePlayer = randomNumber(enemy.attack - 3, enemy.attack)
    playerInfo.health = Math.max(0, playerInfo.health - damagePlayer)

    // Log a resulting message to the console so we know that it worked.
    console.log(`${enemy.name} attacked ${playerInfo.name} with ${damagePlayer} damage. 
    ${playerInfo.name} hp ${playerInfo.health}`)

    if (playerInfo.health <= 0) {
      window.alert(`${playerInfo.name} has died`)
      break
    } else {
      window.alert(`${playerInfo.name} still has ${playerInfo.health} health left`)
    }  
  }
}

const endGame = function() {
  if (playerInfo.health > 0) {
    window.alert("Great job surviving. Your score is " + playerInfo.money)
  } else {
    window.alert("Sorry you died.")
  }

  const playAgainConfirm = window.confirm("Would you like to play again?")

  if (playAgainConfirm) {
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
      playerInfo.refillHealth()
      break
    case "upgrade":
      playerInfo.upgradeAttack()
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

// Random number function 
const randomNumber = function(min, max) {
  let value = Math.floor(Math.random() * (max - min + 1) + min)
  return value 
}

// creates a fight function
const playerInfo = {
  name: window.prompt("What is your ninja's name?"),
  health: 100,
  attack: 10,
  money: 10,
  reset: function() {
    this.health = 100
    this.money = 10 
    this.attack = 10
  },
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars")
      this.health += 20
      this.money -= 7
    } else {
      window.alert("You don't have enough mula!")
    }
  },
  upgradeAttack: function() {
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.")
      this.attack += 6
      this.money -= 7
    } else {
      window.alert("You don't have enough money!")
    }
  }
}

console.log("name", playerInfo.name, "hp", playerInfo.health, "atk", playerInfo.attack)

const enemyInfo = [
  {
    name: "Death Bringer",
    attack: randomNumber(10, 14)
  },
  {
    name: "Snake Charmer",
    attack: randomNumber(10, 14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10, 14)
  }
] 

const startGame = function() {
  playerInfo.reset()

  for (i = 0; i < enemyInfo.length; i++) {

    if (playerInfo.health > 0) {
      window.alert("Welcome to ninja showdown! Round " + (i + 1))
      let pickedEnemyObj = enemyInfo[i]
      pickedEnemyObj.health = randomNumber(40, 60)
      fight(pickedEnemyObj)

      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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

