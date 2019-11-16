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

Sonny.greet(Jordon)

let printContactInfo = (Person) => {
    return console.log("My name is " + Person.name + " and my phone number and email are: " + Person.phone + " and " + Person.email)
}

let SonnyContactInfo = () => printContactInfo(Sonny)

let JordonContactInfo = () => printContactInfo(Jordon)

SonnyContactInfo()

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //
