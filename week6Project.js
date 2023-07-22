//Deal 26 Cards to each Player from a Deck of 52 cards.
//Iterate through the turns where each Player plays a Card.
//The Player who played the higher card is awarded a point.
//Ties result in zero points for both Players.
//After all cards have been played, display the score and declare the winner.
//Write a Unit Test using Mocha and Chai for at least one of the functions you write.

//const deckOfCards = 52 not needed because I created 4 suits with 13 values so that means theres 52 options for cards.
const suits = ['♠', '♥', '♣', '♦']
const values = ['A','2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K']

class Card {
    constructor (face, value, suit) {
        this.face = face
        this.suit = suit
        this.value = value
         }
        }
//let Deck = [] not needed here, put in player class instead

class Player {
    constructor(num){
        this.name = `Player ${num}`
        this.playerDeck = []
        //this.playerScore = `Score ${num}` was storing each win as a string, so winner was correct but winning total looked like "1111111"
        this.playerScore = 0
    }
}

//for (let i = 0; i <values.length; i++) {
  //  for (let suit of suits) {
    //    let newCard = new Card (values[i], i + 1, suit) //face just placeholder for card type so value will be used to get face at index and +1 for the actual numerical value of the card
      //  Deck.push(newCard)
    //}
//}
//console.log(Deck) //test to make sure there are 52 cards all suits/values accurate
class Game {
    constructor (){
        this.deck = []
        this.makeDeck()
        this.turn = 0
        this.player1 = new Player(1)
        this.player2 = new Player(2)
        this.dealCards()
        this.playGame()
        this.determineWinner ()
    }
     makeDeck() {
   // for (let i = 0; i <deck.length; i++) { should use existing array of values not deck
        for (let i = 0; i <values.length; i++){
            for (let suit of suits) {
                let card = new Card (values[i], i + 1, suit)
                this.deck.push(card);
            }
        }
//I want my deck to be shuffled:
        for (let i = this.deck.length -1; i > 0; i --) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = this.deck [i]
            this.deck [i] = this.deck [j]
            this.deck [j] = temp
        }
    }
    dealCards(){
        this.player1.playerDeck = this.deck.splice(0,26)
        this.player2.playerDeck = this.deck.splice (0,26)
    }
    playGame(){
      for (let i = 0; i <this.player1.playerDeck.length; i++){
        if(this.player1.playerDeck[i].value > this.player2.playerDeck[i].value){
         this.player1.playerScore = this.player1.playerScore + 1;
        console.log (`Player 1 wins round ${i+1}!`)
        }else if(this.player2.playerDeck[i].value > this.player1.playerDeck[i].value){
        this.player2.playerScore = this.player2.playerScore + 1;
        console.log (`Player 2 wins round ${i+1}!`);
        }else { //(this.player2.playerDeck.value[i] == this.player1.playerDeck.value[i])
            console.log (`Round ${i+1} is a tie.`)
        }
    }
}
    determineWinner(){
        if(this.player1.playerScore > this.player2.playerScore){
            console.log(`Player 1 wins the game with a score of ${this.player1.playerScore}!`)
        } else if(this.player2.playerScore > this.player1.playerScore){
            console.log(`Player 2 wins the game with a score of ${this.player2.playerScore}!`)
        } else {
            console.log(`It's a tie! Both players have a score of ${this.player1.playerScore}!`)

        }
    }
}
//class Player {
  //  constructor(num){
    //    this.name = `Player ${num} `
      //  this.playerDeck = []
        //this.playerScore = `Score ${num}`
    //}
//} move class forward in code

let war = new Game()
