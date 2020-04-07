const gameTable = document.querySelector('.game-table')
const gameSetup = document.querySelector('.game-setup')

const startGameBtn = document.querySelector('#start-game-button')
const dealBtn = document.querySelector('#deal-cards')
const hitBtn = document.querySelector('#hit-btn')
const stayBtn = document.querySelector('#stay-btn')

const playerCardOne = document.querySelector('.card-one')
const playerCardTwo = document.querySelector('.card-two')
const playerCards = document.querySelector('.player-cards')
const houseShownCard = document.querySelector('.dealer-shown-card')
const houseHiddenCard = document.querySelector('.dealer-hidden-card')
const extraCards = document.querySelector('.hit-cards')

const deck = [2,3,4,5,6,7,8,9,10, 'J', 'Q', 'K', 'A']



document.addEventListener('DOMContentLoaded', initialLoad())

function initialLoad(e) {
    hideGameTable()
}

function hideGameTable() {
    gameTable.style.display = "none"
}

function showGameTable() {
    gameTable.style.display = ""
}

function hideGameSetup() {
    gameSetup.style.display = "none"
}

function hideStartGameBtn() {
    startGameBtn.style.display = "none"
}

function hidePlayerCards() {
    playerCards.style.display = "none"
}

function showPlayerCards() {
    playerCards.style.display = ""
}

function hideDealerCards() {
    houseShownCard.style.display = "none"
    houseHiddenCard.style.display = "none"
}

function showDealerCard() {
    houseShownCard.style.display = ""
}

function hideHitCards() {
    extraCards.style.display = "none"
}

function showHitCards() {
    extraCards.style.display = ""
}


startGameBtn.addEventListener('click', function(e) {
    e.preventDefault()
    showGameTable()
    hidePlayerCards()
    hideHitCards()
    hideDealerCards()
    hideGameSetup()
    hideStartGameBtn()
})

dealBtn.addEventListener('click', function(e) {
    e.preventDefault()
    dealPlayer()
    dealHouse()
    showDealerCard()
    showPlayerCards()
})

hitBtn.addEventListener('click', function(e) {
    e.preventDefault()
    hitMe()
})

stayBtn.addEventListener('click', function(e) {
    e.preventDefault()
    stay()
})

function hitMe() {
    var hitCards = []
    hitCards.push(Math.floor(Math.random() * deck.length + 1))

    extraCards.innerHTML = `${hitCards}`
    showHitCards()
}

function stay() {
    houseHiddenCard.style.display = ""
}

function dealPlayer() {
    var hand = []
    while(hand.length < 2) {
        hand.push(Math.floor((Math.random() * deck.length + 1)));
    }
    playerCardOne.innerHTML = `${hand[0]}`
    playerCardTwo.innerHTML = `${hand[1]}`
}

function dealHouse() {
    var houseHand = []
    while(houseHand.length < 2) {
        houseHand.push(Math.floor((Math.random() * deck.length + 1)));
    }

    houseShownCard.innerHTML = `${houseHand[0]}`
    houseHiddenCard.innerHTML = `${houseHand[1]}`
    houseHiddenCard.style.display = 'none'
}

