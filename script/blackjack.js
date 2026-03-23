let firstCard = 13
let secondCard = 9

let sum = firstCard + secondCard

if (sum < 21) {
    console.log("Do you want draw a new card? 😐")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🤩")
} else {
    console.log("You're out of the game! 😭")
}