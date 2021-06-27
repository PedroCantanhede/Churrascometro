/* ----- Regra de negócio -----
Carne: 400gramas por pessoa + 6 horas = 650
Cerveja - 1200 ml por pessoa + 6 horas = 2000 ml
Refrigerante / Água - 1000 ml por pessoa + 6 horas = 1500 ml

Crianças valem por 0,5 e não tomam cerveja */

let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");

let result = document.getElementById("results");

// Função Calcular
function calculator() {
    console.log("Calculando...");

    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let amountMeat = meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2 * kids);
    let amountDrink = drinkPerPerson(duration) * adults + (drinkPerPerson(duration) / 2 * kids);
    let amountBeer = beerPerPerson(duration) * adults;

    // Resultados
    result.innerHTML = `<p> <i class="fas fa-drumstick-bite"></i> <span>${amountMeat / 1000}</span> Kilos de Carne </p>`;
    result.innerHTML += `<p> <i class="fas fa-beer"></i> <span>${amountDrink / 1000}</span> Litros de Cerveja </p>`;
    result.innerHTML += `<p> <i class="fas fa-glass-whiskey"></i> <span>${amountBeer / 1000}</span> Litros de Refrigerante </p>`;
}

// Função Carne por Pessoa - Se a duração for maior que 6, calcular com 650, senão com 400
function meatPerPerson(duration) {
    if(duration >= 6) {
        return 650;
    } else {
        return 400;
    }
}

// Função Bebida por Pessoa (Inclui crianças) - 
function drinkPerPerson(duration) {
    if(duration >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

// Função Cerveja por Pessoa (Não inclui crianças) - 
function beerPerPerson(duration) {
    if(duration >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}