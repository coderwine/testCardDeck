//! Target Elements
const discardPile = document.getElementById('display-deck');
const cardTop = document.getElementById('cardTop').childNodes;
const suiteValue = document.getElementById('suiteValue').childNodes;
const cardBtm = document.getElementById('cardBtm').childNodes;
const deckGroup = document.getElementById('deckGroup').children;
const usedCards = document.getElementById('used-cards');

//! Establish Decks
let hearts = [
        'A','2','3','4','5','6','7','8','9','10','J','Q','K'
    ];
let spades = [
        'A','2','3','4','5','6','7','8','9','10','J','Q','K'
    ];
let diamonds = [
        'A','2','3','4','5','6','7','8','9','10','J','Q','K'
    ];

let clubs = [
        'A','2','3','4','5','6','7','8','9','10','J','Q','K'
    ];

let discardA = [];
let discardB = [];
let discardC = [];
let discardD = [];

let playerCard;
let usedCardPile = [];
class usedCardObj {
    constructor(key,value, suit) {
        this.key = key,
        this.value = value,
        this.suit = suit
    }
}

//! Logic
// Shuffling

const shuffleDeck = (deck, discard, suit, id) => {
    
    if(deck.length === 0) {
        emptyDeck(id);
    } else {

        for(i=0; i<deck.length; i++){
            let pos = Math.floor(Math.random() * deck.length);
            let hold = deck[pos];

            deck.splice(pos,1);
            deck.unshift(hold);
        }

        let pos = Math.floor(Math.random() * deck.length);
        let holdDiscard = deck[pos];
        let cardKey = holdDiscard + suit;

        deck.splice(pos,1);
        discard.push(holdDiscard);

        playerCard = discard[discard.length-1];
        showCard(playerCard, suit);

        let cardObj = new usedCardObj(cardKey,holdDiscard, suit);
        usedCardPile.push(cardObj)

        if(deck.length === 0) {
            emptyDeck(id);
        }
    }

}

//! Display
function showCard(card, suit) {
    //* Single Card 
    const mainCard = document.getElementById('display-card');
    mainCard.style = 'background-image: none;';

    switch(suit) {
        case 'H':
            cardTop[1].src = './assets/H.png';
            cardBtm[1].src = './assets/H.png';
            cardTop[1].alt = 'hearts';
            cardBtm[1].alt = 'hearts';
            suiteValue[1].style = 'color: red';
            break;
        case 'S':
            cardTop[1].src = './assets/S.png';
            cardBtm[1].src = './assets/S.png';
            cardTop[1].alt = 'spades';
            cardBtm[1].alt = 'spades';
            suiteValue[1].style = 'color: black';
            break;
        case 'D':
            cardTop[1].src = './assets/D.png';
            cardBtm[1].src = './assets/D.png';
            cardTop[1].alt = 'diamonds';
            cardBtm[1].alt = 'diamonds';
            suiteValue[1].style = 'color: red';
            break;
        default:
            cardTop[1].src = './assets/C.png';
            cardBtm[1].src = './assets/C.png';
            cardTop[1].alt = 'clubs';
            cardBtm[1].alt = 'clubs';
            suiteValue[1].style = 'color: black';

    }

    suiteValue[1].innerText = card;

    //* Remaining
    let totalRemainingCards = hearts.length+spades.length+diamonds.length+clubs.length;

    deckGroup[0].innerText = `Hearts: ${hearts.length}`;
    deckGroup[1].innerText = `Spades: ${spades.length}`;
    deckGroup[2].innerText = `Diamonds: ${diamonds.length}`;
    deckGroup[3].innerText = `Clubs: ${clubs.length}`;
    deckGroup[4].innerText = `Total: ${totalRemainingCards}`;

    //* Used Cards 
    if(usedCardPile.length > 0) {
        while(usedCards.firstChild) {
            usedCards.removeChild(usedCards.firstChild)
        }

        for(i=0; i<usedCardPile.length; i++) {
            const card = usedCardPile[i];

            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            p.innerText = card.value;
            img.src = `./assets/${card.suit}.png`;
            // div.setAttribute('id', `${card.value}`);
            div.setAttribute('onclick', `returnCard(${card.key})`)
            
            div.appendChild(p);
            div.appendChild(img);
            usedCards.appendChild(div);

        }
    }

}

//! Empty Deck
function emptyDeck(id) {
    let selectedBtn = document.getElementById(id);
    selectedBtn.style = 'background-color: grey; color: black;';
}

//! Returning Cards
function returnCard(key, suit) {
    console.log(key, typeof key);
    // console.log('ACCEPTED', key)
    // console.log(usedCardPile);
    
    // let find = usedCardPile.indexOf(key);
    // let find = usedCardPile.some(x => x.key == key);
    // console.log(find);

    // switch(suit) {
    //     case 'H':
    //         break;
    //     case 'S':
    //         break;
    //     case 'D':
    //         break;
    //     default:

    // }

    // usedCardPile.splice(pos,1);

}



