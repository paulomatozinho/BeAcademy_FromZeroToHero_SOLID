//Dependency Inversion Principle
//Código acoplado

class Store {
    constructor() {
        this.creditCard = new Visa()
    }

    constructor(brand) {
        this.paymentProcess = new this.paymentProcess(brand)
    }
}

class paymentProcess {
    constructor(brand) {
        this.brand = brand
    }

    payment() {
        console.log(`Pagou com ${this.brand}`)
    }
}

class Visa {
    constructor() {
        this.brand = 'Visa'
    }
}

//Dependency Inversion Principle
//Código Desacoplado

class Store {
    constructor(brand) {
        this.paymentProcess = new this.paymentProcess(brand)
    }
}

class paymentProcess {
    constructor(brand) {
        this.brand = brand
    }

    payment() {
        console.log(`Pagou com ${this.brand}`)
    }
}

// class Visa {
//     constructor() {
//         this.brand = 'Visa'
//     }
// }

const bike = new Store(new paymentProcess('Visa').payment())