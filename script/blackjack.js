let firstCard = 13
let secondCard = 8
let hasBlackJack = false
let isAlive = true
let sum = firstCard + secondCard
let message = ""

function startGame() {
    if (sum < 21) {
        message = "Do you want draw a new card? 😐"
    } else if (sum === 21) {
        hasBlackJack = true
        message = "Wohoo! You've got Blackjack! 🤩"
    } else {
        isAlive = false
        message = "You're out of the game! 😭"
    }
}

console.log(isAlive)
console.log(message)
