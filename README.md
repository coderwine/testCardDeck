# Reason for this Build
**deckSample.js** is meant to take three different suits in a deck, shuffle each, and toggle between each one through one session. Users should be able to select a deck to choose from and reveal a new card throughout each "turn".

## The Process
Users will need to:
- Select from a deck of their choosing.
  - Display the revealed card and have it held in a discard pile.
    - May want to include an option to return card to deck
  - This will reduce the amount of cards remaining in the original deck.
  - Users can see the count of cards remaining.

## As it is Currently:
- Users can select a card from each suit. 
- Each time a user picks a card, the array of cards are shuffled to randomly select a card. 
- Displayed is their result. 
- A count of cards remaining displays.
- Once the user selects a second card from a suit, the previous card value/suit will be placed in a **used cards** pile.
- When the suit has no more cards to display, the button will fade out. 

## What is Currently Does Not Do:
- This isn't mobile responsive.
  - The goal of this project was to practice parsing through a set of information and display it in different ways.
  - I may work on making this responsive only for viewing purposes/ease.
- Considering on the process of returning cards to their respective decks.