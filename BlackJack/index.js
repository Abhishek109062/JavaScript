let player = {
    name : "Abhishek",
    chips : 200
};

let isAlive = false;
let hasBlackJack = false;
let sum = 0;
let cards = [];
let message = ""
let messageEl = document.getElementById("message-el") 
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + " : $ " + player.chips;

function startGame(){
        isStarted = true;
        isAlive = true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard;
        renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards : "
    for(let x = 0; x < cards.length; x++){
        cardsEl.textContent += cards[x]+" "
    }
    sumEl.textContent = "Sum : " + sum
    if(sum < 21)
    message = "Do you want a new Card?"
    else if(sum === 21){
        message = "You have got a BlackJack";
        hasBlackJack = true;
    }
    else{
        message = "You are out of the game!"
        isAlive = false;
    }

    messageEl.textContent = message
}

function newCard(){
    if(isAlive && !hasBlackJack){
    let card = getRandomCard();
    sum += card
    cards.push(card)
    renderGame()
    }
}

function getRandomCard(){
    let random1 = Math.floor(Math.random()*13) + 1;
    if(random1 > 10)
    return 10;
    else if(random1 === 1)
    return 11;
    else
    return random1;

}