const expect = chai.expect
const assert = chai.assert


//const suits = ['♠', '♥', '♣', '♦']
//const values = ['A','2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K']
//const deck = [] need to put inside function/test

function makeDeck(suits,values){
const deck = []
for (let i = 0; i <values.length; i++){
    for (let suit of suits) {
        let card = new Card (values[i], i + 1, suit)
        deck.push(card);
    }
}
return deck
}
describe ("Deck of Cards", () => {
    it(`#Should return a deck of 52 cards`, () => {
        const suits = ['♠', '♥', '♣', '♦']
        const values = ['A','2','3','4','5','6','7','8','9','10', 'J', 'Q', 'K']
        const deck = makeDeck (suits, values)
    expect(deck).to.have.lengthOf(52);
    })
}
)

describe ("Determine Winner", () => {
    it (`#Should determine who has highest card value`, () => {
        const game = new Game () // so i don't have to carry over all the class properties i created a new instance of game to test

    if(game.player1.playerScore > game.player2.playerScore){
        console.log(`Player 1 wins the game with a score of ${game.player1.playerScore}!`)
    expect(game.player1.playerScore).to.be.above(game.player2.playerScore)
    } else if (game.player2.playerScore > game.player1.playerScore) {
        console.log(`Player 2 wins the game with a score of ${game.player2.playerScore}!`)
    expect (game.player2.playerScore).to.be.above(game.player1.playerScore +1)
    } else {
        console.log(`It's a tie! Both players have a score of ${game.player1.playerScore}!`)
    expect(game.player1.playerScore).to.equal(game.player2.playerScore)
}
})
})


