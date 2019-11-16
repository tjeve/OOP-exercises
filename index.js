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
        let arrayOfAllPointsInHand = this.hand.map(x => x.point)
        // The reduce method turns an array into a single value
        let pointsInHand = arrayOfAllPointsInHand.reduce((accumulator, currentValue) => accumulator + currentValue)

        return pointsInHand
    }
}

let myHand = new Hand()

myHand.addCard(myCard)

// console.log(myHand)
myHand.addCard(yourCard)

// console.log(myHand.hand[1].point)
console.log(myHand.getPoints())

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
// ~~~~~~~~~~~~~~~~ Deck Constructor ~~~~~~~~~~~~~~~~