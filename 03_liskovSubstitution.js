//Liskov Substitution Principle
// A ideia principal do principio de substituição de Liskov é que qualquer função/módulo
// que interaja com uma classe também deve ser capaz de interagir com todas as 
// subclasses dessa classe
//Isso significa essencialmente que uma classe é intercambiavel com sua subclasses


class FlyingBirds {
    fly() {
        console.log('Posso voar')
    }
}

class SwimmingBird {
    swim() {
        console.log('Posso nadar')
    }
}

class Penguin extends SwimmingBird{}
class Duck extends FlyingBirds{}

function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingbirdSwim(bird) {
    bird.swim()
}

const pato = new Duck()
const pinguim = new Penguin()