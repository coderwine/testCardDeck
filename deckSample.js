//! Target Elements
const discardPile = document.getElementById('display-deck');
const cardTop = document.getElementById('cardTop').childNodes
const suiteValue = document.getElementById('suiteValue').childNodes
const cardBtm = document.getElementById('cardBtm').childNodes

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

//! Logic
// Shuffling

const shuffleDeck = (deck, discard, suit) => {
    
    for(i=0; i<deck.length; i++){
        let pos = Math.floor(Math.random() * deck.length);
        let hold = deck[pos];

        deck.splice(pos,1);
        deck.unshift(hold);
    }

    let pos = Math.floor(Math.random() * deck.length);
    let holdDiscard = deck[pos];
    deck.splice(pos,1);
    discard.push(holdDiscard)

    playerCard = discard[0];
    showCard(playerCard, suit);

}

//! Display
function showCard(card, suit) {
    console.log('SHOWCARD', card, suit);

    switch(suit) {
        case 'H':
            cardTop[1].src = './assets/like.png';
            cardBtm[1].src = './assets/like.png';
            cardTop[1].alt = 'hearts';
            cardBtm[1].alt = 'hearts';
            suiteValue[1].style = 'color: red';
            break;
        case 'S':
            cardTop[1].src = './assets/spades.png';
            cardBtm[1].src = './assets/spades.png';
            cardTop[1].alt = 'spades';
            cardBtm[1].alt = 'spades';
            suiteValue[1].style = 'color: black';
            break;
        case 'D':
            cardTop[1].src = './assets/diamond.png';
            cardBtm[1].src = './assets/diamond.png';
            cardTop[1].alt = 'diamonds';
            cardBtm[1].alt = 'diamonds';
            suiteValue[1].style = 'color: red';
            break;
        default:
            cardTop[1].src = './assets/club.png';
            cardBtm[1].src = './assets/club.png';
            cardTop[1].alt = 'clubs';
            cardBtm[1].alt = 'clubs';
            suiteValue[1].style = 'color: black';

    }

    suiteValue[1].innerText = card;
}

