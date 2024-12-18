{
    // instance of guard

    class Animal {
        name: string;
        species: string;
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound")
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMew() {
            console.log("I am mewing")
        }
    }
    class Cow extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeHamba() {
            console.log("I say Hamba Hamba")
        }
    }

    // smart way te handle korar jonno  amra caile function use korte pari 
    const isCat = (animal : Animal) : animal is Cat => {
        return animal instanceof Cat 
    }
    const isCow = (animal: Animal) : animal is Cow => {
        return animal instanceof Cow
    }
    const getAnimal = (animal: Animal) => {
        if (isCow(animal)) {
            animal.makeHamba()
        } else if (isCat(animal)) {
            animal.makeMew()
        } else {
            animal.makeSound()
        }
    }

    const cat = new Cat("Mr. Cat", "Cat")
    const cow = new Cow("Mr. Cow", "Cow")
    getAnimal(cow)
    getAnimal(cat)
 




    //
}