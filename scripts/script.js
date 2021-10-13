// Carne - 500 gr por pessoa   + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5

let inputAdults = document.getElementById("adults")
let inputKids = document.getElementById("kids")
let inputDuration = document.getElementById("duration")
let inputResult = document.getElementById("result");

function calc(){
    let adults = inputAdults.value;
    let kids = inputKids.value;
    let duration = inputDuration.value;

    let meatQnt = meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2 * kids)
    let beerQnt = (beerPerPerson(duration) * adults)
    let waterQnt = waterPerPerson(duration) * adults + (waterPerPerson(duration) / 2 * kids)

    result.innerHTML = `<p>${meatQnt / 1000}Kg de Carne</p>`
    result.innerHTML += `<p>${Math.ceil(beerQnt / 355)} Latas de Cerveja</p>`
    result.innerHTML += `<p>${waterQnt2(waterQnt)}`
    result.innerHTML += `${duration2(adults, kids, duration)}`

    console.log(adults, kids, duration, meatQnt, beerQnt, waterQnt)
}
function waterQnt2(waterQnt){
    let waterCount = Math.ceil(waterQnt /1000);
    if (waterCount > 1){
        return `<p>${waterCount} litros de Bebidas</p>`;
    }
    else if(waterCount < 1){
        return `<p>${waterCount} litros de Bebidas</p>`;
    }
    else{
        return `<p>${waterCount} litro de Bebida</p>`;
    }
}
function duration2(adults, kids, duration){
    let totalPersons = Number(adults)+Number(kids)
    if (duration > 1){
        return `<p>Para ${duration} horas de Churrasco com ${total} pessoas.</p>`
    }
    else if(duration < 1){
        return `<p>Para o seu Churrasco com ${total} pessoas.</p>`
    }
    else{
        return `<p>Para ${duration} hora de Churrasco com ${total} pessoas.</p>`
    }
}

function meatPerPerson(duration){
    if (duration >= 6){
        return 750
    }
    else{
        return 600
    }
}
function beerPerPerson(duration){
    if (duration >= 6){
        return 2000
    }
    else{
        return 1200
    }
}
function waterPerPerson(duration){
    if (duration >= 6){
        return 1500
    }
    else{
        return 1000
    }
}