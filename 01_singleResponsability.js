// single responsability principle

// criar uma classe para cada regra de negócio/responsabilidade

class WeightAdviser {
    constructor(user, weight) {
        this.user = user,
            this.weight = weight
    }

    adviser(expectedWeight) {
        if (this.weight >= expectedWeight) {
            weightAlert(this.user)
        }
    }
}



// weightAlert() {
//     console.log('Acima do peso')
// }


function weightAlert(user) {
    console.log(`${user} está acima do peso`)
}

const paulo = new WeightAdviser('Paulo', 91)
paulo.adviser(90)