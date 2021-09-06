let cards = []
let sum = 0
let msg = " "
let msgEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
isAlive = false
hasBlackJack = false
const player = {
    name: 'Md',
    chips: 135
}
playerEl.textContent = player.name + ": $" + player.chips


function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function getRandomCard(){
    let randomCard = Math.floor((Math.random() * 12) + 1)
    if(randomCard > 10){
        return 10
    } else if(randomCard === 1){
        return 11
    } else {
        return randomCard
    }
}

function renderGame(){
    cardEl.textContent = "Cards:"
    for(let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if(sum < 21){
         msg = "Do you want another card?"
    } else if(sum === 21){
        msg = "You've BlackJack!" 
        hasBlackJack = true
    } else {
        msg = "You're out of the game"
        isAlive = false
    }
    msgEl.textContent = msg 
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}
    