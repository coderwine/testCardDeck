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
// let usedCardPileSuit = [];
// let usedCardObj = {}
class usedCardObj {
    constructor(value, suit) {
        this.value = value,
        this.suit = suit
    }
}

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
    discard.push(holdDiscard);
    // usedCardPile.push(holdDiscard);
    // usedCardPileSuit.push(suit);
    // console.log(usedCardPile)

    playerCard = discard[discard.length-1];
    showCard(playerCard, discard, suit);

    let cardObj = new usedCardObj(holdDiscard, suit);
    console.log(cardObj);
    usedCardPile.push(cardObj)

}

//! Display
function showCard(card, discard, suit) {
    // console.log('SHOWCARD', card, suit);

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

    // Remaining
    deckGroup[0].innerText = `Hearts: ${hearts.length}`;
    deckGroup[1].innerText = `Spades: ${spades.length}`;
    deckGroup[2].innerText = `Diamonds: ${diamonds.length}`;
    deckGroup[3].innerText = `Clubs: ${clubs.length}`;
    console.log('CHECK USED CARDS', usedCardPile.length)
    console.log('CHECK USED CARDS', usedCardPile[0])
    if(usedCardPile.length > 0) {
        while(usedCards.firstChild) {
            // console.log(usedCards.children)
            usedCards.removeChild(usedCards.firstChild)
        }
        // console.log(usedCards)

        // console.log(discard)
        console.log('USEDCARDS',usedCardPile)
        for(i=0; i<usedCardPile.length; i++) {

            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            // p.innerText = discard[i];
            p.innerText = usedCardPile[i].value;
            // img.src = `./assets/${suit}.png`;
            img.src = `./assets/${usedCardPile[i].suit}.png`;
            
            div.appendChild(p);
            div.appendChild(img);
            usedCards.appendChild(div);
        }
    }

    // if(discardB.length > 0) {
    //     for(i=0; i<discardB.length; i++) {
    //         const p = document.createElement('p');
    //         p.innerText = discardB[i];
    //         usedCards.appendChild(p);
    //     }
    // }

    // if(discardC.length > 0) {
    //     for(i=0; i<discardC.length; i++) {
    //         const p = document.createElement('p');
    //         p.innerText = discardC[i];
    //         usedCards.appendChild(p);
    //     }
    // }

    // if(discardD.length > 0) {
    //     for(i=0; i<discardD.length; i++) {
    //         const p = document.createElement('p');
    //         p.innerText = discardD[i];
    //         usedCards.appendChild(p);
    //     }
    // }
}

