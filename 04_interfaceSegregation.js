//Interface Segregation Principle
// a ideia é segregar as interfaces e deixá-las menores
// Pode ser aplicado mesmo não tendo interfaces no Javascript, utilizando classes e heranças

class ProductEntity {
    constructor(name, dept) {
        this.name = name
        this.dept = dept
    }
} 

class TecProducts extends ProductEntity {
    constructor(name, dept) {
       super(name,dept)
    }
} 

class FoodProducts extends ProductEntity {
    constructor(name, dept, validDate) {
        super(name,dept)
        this.validDate = validDate
    }
} 

const xbox = new TecProducts('XBox','Tecnologia')
const pipoca = new FoodProducts('Pipoca','Alimenticio','NOV/2023')
console.log(xbox)
console.log(pipoca)