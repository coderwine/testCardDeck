# Reason for this Build
This is meant to be both a practice session of thought for a larger project in mind, as well as turn into a lesson plan for teaching.

This was initially built without any design concept prior. The results of this means that the code can certainly be cleaned up and possibly used in a much more structured way; however, I wanted to work and refactor throughout the process to simply practice the puzzle of logic as a whole. I believe this was very helpful. I think I will keep this format simply to highlight my process of thought as a teaching tool.

## Concept
**deckSample.js** is meant to take four different suits in a deck, shuffle each, and toggle between each one through one session. Users should be able to select a deck to choose from and reveal a new card throughout each "turn".

Users will then be able to see how many cards are left in the deck, both as individual suits and as a total deck of 52 cards.

A pile of discarded cards will be displayed, indicating what has been randomly selected.

Users will be able to selected used cards and return them back to their respective decks. This then updates the values associated to each suit to indicate the current card count.

## The Process
Users will need to:
- Select from a deck of their choosing.
  - Display the revealed card.
  - Place card in a used card pile when a new card is pulled.
  - Note total amount of cards remaining.
  - Click on used cards to return.
    - Counts will need to be re-evaluated.

## As it is Currently:
- Functionality is completed. 

## What is Currently Does Not Do:
- This is slightly mobile responsive.
  - The focus was not to make this the prettiest design.
- Update final notes throughout the build to highlight overall thought process on logic.