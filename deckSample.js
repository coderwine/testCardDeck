//! Target Elements
const discardPile = document.getElementById('display-deck');
const mainCard = document.getElementById('display-card');
const cardTop = document.getElementById('cardTop').childNodes;
const suitValue = document.getElementById('suitValue').childNodes;
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

        let cardObj = new usedCardObj(cardKey.toString(),holdDiscard, suit);
        usedCardPile.push(cardObj);

        if(deck.length === 0) {
            emptyDeck(id);
        }
    }

}

//! Display Card
function showCard(card, suit) {
    //* Single Card 
    mainCard.style = 'background-image: none;';

    switch(suit) {
        case 'H':
            cardTop[1].src = './assets/H.png';
            cardBtm[1].src = './assets/H.png';
            cardTop[1].alt = 'hearts';
            cardBtm[1].alt = 'hearts';
            suitValue[1].style = 'color: red';
            break;
        case 'S':
            cardTop[1].src = './assets/S.png';
            cardBtm[1].src = './assets/S.png';
            cardTop[1].alt = 'spades';
            cardBtm[1].alt = 'spades';
            suitValue[1].style = 'color: black';
            break;
        case 'D':
            cardTop[1].src = './assets/D.png';
            cardBtm[1].src = './assets/D.png';
            cardTop[1].alt = 'diamonds';
            cardBtm[1].alt = 'diamonds';
            suitValue[1].style = 'color: red';
            break;
        default:
            cardTop[1].src = './assets/C.png';
            cardBtm[1].src = './assets/C.png';
            cardTop[1].alt = 'clubs';
            cardBtm[1].alt = 'clubs';
            suitValue[1].style = 'color: black';

    }

    suitValue[1].innerText = card;

    cardDashboard();
}

//! Remaining Cards
function cardDashboard() {
// Display card count and "pile" of used cards to indicate what has been pulled.

    let totalRemainingCards = hearts.length+spades.length+diamonds.length+clubs.length;

    deckGroup[0].innerText = `Hearts: ${hearts.length}`;
    deckGroup[1].innerText = `Spades: ${spades.length}`;
    deckGroup[2].innerText = `Diamonds: ${diamonds.length}`;
    deckGroup[3].innerText = `Clubs: ${clubs.length}`;
    deckGroup[4].innerText = `Total: ${totalRemainingCards}`;

    //* Used Cards 
    while(usedCards.firstChild) {
        usedCards.removeChild(usedCards.firstChild)
    }

    if(usedCardPile.length > 0) {

        for(i=0; i<usedCardPile.length; i++) {
            const card = usedCardPile[i];
            const cardKey = card.key;

            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            p.innerText = card.value;
            img.src = `./assets/${card.suit}.png`;
            div.setAttribute('id', `${card.key}`);
            div.setAttribute('onclick', `returnCard('${cardKey}','${card.suit}')`);
            
            div.appendChild(p);
            div.appendChild(img);
            usedCards.appendChild(div);

        }
    }


}

//! Empty Deck
function emptyDeck(id) {
// Handles UI when a suit is empty so that users know when it is empty.
    let selectedBtn = document.getElementById(id);
    selectedBtn.style = 'background-color: grey; color: black;';
}

//! Returning Cards
function returnCard(key, suit) {
/* Need to:
    - locate the exact card in Used Card Pile.
    - remove the card from the Used Card Pile.
    - remove the card from discard list for count.
    - Add back to the respective array so it can be selected again.
    */

    usedCardPile.map((k,i) => {

        const sortCard = (index, obj, value, deck, discardDeck) => {
        // remove card from used cards and put back in respective decks.

            usedCardPile.splice(index, 1);
            deck.push(value);
            discardDeck.push(obj);
            
        }
        
        if(k.key === key) {
            // Determine where the card is initially.
            
            switch(suit) {
                case 'H':
                    sortCard(i, k, k.value, hearts, discardA);
                    break;
                case 'S':
                    sortCard(i, k, k.value, spades, discardB);
                    break;
                case 'D':
                    sortCard(i, k, k.value, diamonds, discardC);
                    break;
                default:
                    sortCard(i, k, k.value, clubs, discardD);

            }
        }

    });

    //* Reset the displayed card and showcase remaining.
    mainCard.style = `background-image: url(./assets/cardBack.jpg);`;
    suitValue[1].innerText = null;
    cardTop[1].src = '';
    cardTop[1].alt = '';
    cardBtm[1].src = '';
    cardBtm[1].alt = '';

    cardDashboard();

}



