let firstCard = 13
let secondCard = 8
let hasBlackJack = false
let isAlive = true

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want draw a new card? 😐")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🤩")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

console.log(hasBlackJack)
