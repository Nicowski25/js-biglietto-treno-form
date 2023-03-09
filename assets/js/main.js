//troviamo l'id del bottone calcolatore
const calc = document.getElementById("calc")

//implementiamo la funzione col click
calc.addEventListener('click',
    function() {
        const km = document.getElementById("km").value //seleziono il value di km
        const age = document.getElementById("age").value //selezioni il value di age
        let price = km * 0.21 // moltiplico i km per il prezzo/km
        console.log(price)
        let finalPrice = document.getElementById("finalPrice")
        //se il passeggero è minorenne applico uno sconto del 20%
        if (age < 18) {
            discount = (price * 20 / 100).toFixed(2)
            price = (price - discount).toFixed(2)
            console.log(discount, price)
            finalPrice.append(`${price}`)
        } else if (age > 65) { //se il passeggero è over65 applico uno sconto del 40%
            discount = (price * 40 / 100).toFixed(2)
            price = (price - discount).toFixed(2)
            console.log(discount, price)
            finalPrice.append(`${price}`)
        } else { //se non ha agevolazioni stampiamo il prezzo
            console.log(price.toFixed(2))
            finalPrice.append(`${price}`)
        }
    }
)
