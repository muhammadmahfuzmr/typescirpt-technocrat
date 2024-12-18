{
    //Oop class

    class Animal {
        //name: string;
        // species: string;
        // sound: string
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }
        makeSound() {
            console.log(`The ${this.name} ${this.species} says ${this.sound}`)
        }
    }

    const cat = new Animal("Billu", "cat", "mew mew");
    const cow = new Animal("Australian", "Cow", "Hamba Hamba");
    console.log(cow.name)
    cat.makeSound()

    cow.makeSound()

    //
}