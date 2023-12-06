const cardArray = [
    {
        name: 'fries',
        img: '/assets/memory-game/fries.png'
    },
    {
        name: 'cheeseburger',
        img: '/assets/memory-game/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: '/assets/memory-game/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: '/assets/memory-game/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: '/assets/memory-game/milkshake.png'
    },
    {
        name: 'pizza',
        img: '/assets/memory-game/pizza.png'
    },
    {
        name: 'fries',
        img: '/assets/memory-game/fries.png'
    },
    {
        name: 'cheeseburger',
        img: '/assets/memory-game/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: '/assets/memory-game/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: '/assets/memory-game/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: '/assets/memory-game/milkshake.png'
    },
    {
        name: 'pizza',
        img: '/assets/memory-game/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', '/assets/memory-game/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img:not(#non-game-image)')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', '/assets/memory-game/blank.png')
        cards[optionTwoId].setAttribute('src', '/assets/memory-game/blank.png')
        alert('You have the clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You have found a match!')
        cards[optionOneId].setAttribute('src', '/assets/memory-game/white.png')
        cards[optionTwoId].setAttribute('src', '/assets/memory-game/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', '/assets/memory-game/blank.png')
        cards[optionTwoId].setAttribute('src', '/assets/memory-game/blank.png')
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length
        cardsChosen = []
        cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations, you found them all!'
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.lengthj === 2) {
        setTimeout(checkMatch, 500)
    }
}