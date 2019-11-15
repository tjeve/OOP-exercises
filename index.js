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

let contactInfo = (name) => { return "This is the email address of" + name.name}

contactInfo(Jordon)
