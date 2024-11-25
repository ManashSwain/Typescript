type cardNumber = {
    cardNumber : string
}
type cardHolder = {
    cardHolder : string
}

type allDetails =  cardNumber & cardHolder & {
    cvv : number
}

const allData : allDetails = {
    cardNumber : "445456",
    cardHolder : "manash",
    cvv : 453
}

console.log(allData)

export {}