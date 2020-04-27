//User selects the kind of animal they’d like (dog, cat,rabbit) and you have to play with it, feed it, give it drinks etc.
//There should be consequences across the board – if you don’t play, it gets bored, if you do, it’s happy,but gets thirsty, that kind of thing.


class Animal {
    constructor(name) {
        this._name = name;
        this._hunger = 0; // 0 means not hungry 5 is max hunger
        this._thirst = 0; // 0 means not thirsty 5 is max thirst
        this._happiness = 0; // 0 means not happy wants to be happier
    }
    get name() {
        return this._name;
    }
    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }
    get happiness() {
        return this._happiness;
    }
    eat() {
        this._hunger--; // the hunger decreases by 1 when you call the function eat
    }
    drink() {
        this._thirst++; // his thirst decreases by 1 when you call the function drink
    }
    play() {
        this._hunger++;
        this._happiness++;
    }
    // recall(){
    //     console.log(`${this._name} now has a hunger of ${this._hunger} and a thirst of ${this._thirst}`)
    // }
};

let Steve = new Animal("Steve");


class Bunny extends Animal {
    constructor(name, favFood) {
        super(name);
        this._favFood = favFood;
    }
    get favFood() {
        return this._favFood;
    }
}

const Rosie = new Bunny("Rosie", ["basil", "rockets", "broccoli"]);

class Cat extends Animal {
    constructor(name, favFood) {
        super(name);
        this._favFood = favFood;
    }
    get favFood() {
        return this._favFood;
    }
}

const Fluffy = new Cat("Fluffy", ["Whiskers", "Salmon", "Chicken"]);

class Triceratops extends Animal {
    constructor(name, favFood) {
        super(name);
        this._favFood = favFood;
    }
    get favFood() {
        return this._favFood;
    }
}

const Tony = new Triceratops("Tony", ["Cheese plant", "Ferns", "Aloe Vera"]);

//console.log(Tony._favFood[0]);

let pet = prompt("Which pet would you like to play with? Tony, Fluffy or Rosie?  ");

let chosenPet = "";

if(  pet == "Tony" || pet == "tony") { 
    chosenPet = Tony;
} else if( pet == "Rosie" || pet == "rosie" ) {
    chosenPet = Rosie;
} else if( pet == "Fluffy" || pet == "fluffy" ) {
    chosenPet = Fluffy; 
}


alert(`You have chosen ${chosenPet._name} who is a Triceratops, his favourite food is ${chosenPet._favFood[0]}.`);
alert(`${chosenPet._name}'s hunger is ${chosenPet._hunger}, his thirst is ${chosenPet._thirst} and his happiness is ${chosenPet._happiness}`)
alert(`If ${chosenPet._name}'s hunger goes more than 5 or less than 0, ${chosenPet._name} will die!`);
let activity = prompt("What you want to do? Play, Eat, Drink????");

while (chosenPet._hunger < 5) {
    console.log("inside of while");
    console.log("my activity is " + activity);
    if (activity == "Play" || activity == "play") {
        chosenPet.play();
        alert(`${chosenPet._name} is playing and its happiness is ${chosenPet._happiness} and his hunger is now at ${chosenPet._hunger}`);
        activity = prompt(`What you want to do with ${chosenPet._name}? "Play, Eat, Drink????`);
    } else if (activity == "Eat" || activity == "eat") {
        chosenPet.eat();
        alert(`${chosenPet._name} is eating and its hunger is ${chosenPet._hunger}`);
        activity = prompt(`What you want to do with ${chosenPet._name}? "Play, Eat, Drink????`);
    } else if (activity == "Drink" || activity == "drink") {
        chosenPet.drink();
        alert(`${chosenPet._name} is drinking and his thirst is ${chosenPet._thirst}`);
        activity = prompt(`What you want to do with ${chosenPet._name}? "Play, Eat, Drink????`);
    } else {
        alert("You entered an invald command ")
        activity = prompt(`What you want to do with ${chosenPet._name}? "Play, Eat, Drink????`);
    };
};
    
if (chosenPet._hunger >= 5) {
    alert(`Uh oh, you killed ${chosenPet._name}. Shame on you!`);
};

   



          
