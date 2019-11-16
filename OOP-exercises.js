// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ Card ~~~~~~~~~~~~~~~~
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
    greet(otherPerson) {
      console.log('Hello ' + otherPerson.name + ', I am ' + this.name + '!');
    }
  }

let Sonny = new Person("Sonny", 'sonny@hotmail.com', '483-485-4948')

let Jordon = new Person("Jordon", "jordon@aol.com", '495-586-3456')

// Sonny.greet(Jordon)

let printContactInfo = (Person) => {
    return console.log("My name is " + Person.name + " and my phone number and email are: " + Person.phone + " and " + Person.email)
}

let SonnyContactInfo = () => printContactInfo(Sonny)

let JordonContactInfo = () => printContactInfo(Jordon)

// SonnyContactInfo()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ Person ~~~~~~~~~~~~~~~~


class Card {
    constructor (point, suit) {
        this.point = point,
        this.suit = suit;
    }

    getImageURL(card) {
        console.log('images/' + this.point + '_of_' + this.suit + '.png')

    }

}
let myCard = new Card (5, 'diamonds')
let yourCard = new Card (13, 'spades')
let card1 = new Card (8, 'clubs')
let card2 = new Card (12, 'hearts')
// myCard.getImageURL()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ Hand Constructor ~~~~~~~~~~~~~~~~

class Hand {
    constructor () {
        this.hand = []
    }
    addCard(card) {
        this.hand.push(card)
    }
    getPoints() {
        // Maps through the array of objects (cards in Hand) and returns just the point properties to a new array
        let arrayOfPointsInHand = this.hand.map(card => card.point)
        // The reduce method turns an array into a single value
        let pointsInHand = arrayOfPointsInHand.reduce((accumulator, currentValue,) => accumulator + currentValue)

        return pointsInHand
    }
}

let myHand = new Hand()

myHand.addCard(myCard)
myHand.addCard(card1)
myHand.addCard(card2)

// console.log(myHand)
myHand.addCard(yourCard)

// console.log(myHand.hand[1].point)
// console.log(myHand.getPoints())

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ Deck Constructor ~~~~~~~~~~~~~~~~

class Deck {
    constructor () {
        let deck = this.deck = []

        const suits = ['spades', 'hearts', 'clubs', 'diamonds']
        const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

        for (var idx = 0; idx < suits.length; idx++) {

            for (var idx2 = 0; idx2 < points.length; idx2++) {

                let card = {
                    point: points[idx2],
                    suit: suits[idx]
                }
                deck.push(card)
            }
        }
    }
    draw() {
        let randomNumberBetween1and52 = (Number((Math.random()* 52).toFixed(0)))
        return this.deck[randomNumberBetween1and52]
    }
    // shuffle() {
    //     //function can iterate through an array, grabbing random, unique indices
    //     //and sending them to a new array until there is an array the same length
    //     //there are definitely methods for this already.
    // }
    // numCardsLeft () {}
}

let myDeck = new Deck 

// console.log(randomNumberBetween1and52)
console.log(myDeck.draw())











// This is useful: https://wsvincent.com/javascript-object-oriented-deck-cards/
