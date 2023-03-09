//seleziono dall'input dei km il valore e lo attribuiamo a una variabile
const km = document.getElementById("km").value
console.log(km)
//faccio lo stesso con l'età
const age = document.getElementById("age").value
console.log(age)
//calcolo il prezzo al km e lo stampo
let price = km * 0.21
console.log(price)
//se il passeggero è minorenne applico uno sconto del 20%
if (age < 18) {
    discount = (price * 20 / 100)
    price = (price - discount)
    console.log(discount, price.toFixed(2))
} else if (age > 65) { //se il passeggero è over65 applico uno sconto del 40%
    discount = (price * 40 / 100)
    price = (price - discount)
    console.log(discount, price.toFixed(2))
} else { //se non ha agevolazioni stampiamo il prezzo
    console.log(price.toFixed(2))
}