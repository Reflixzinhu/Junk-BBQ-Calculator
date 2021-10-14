




// Elements that I will use 
let inputAdults = document.getElementById("adults");
let inputKids = document.getElementById("kids");
let inputDuration = document.getElementById("duration");
let inputResult = document.getElementById("result");

// Calculations to get the quantity of food
function calc() {
  let adults = inputAdults.value;
  let kids = inputKids.value;
  let duration = inputDuration.value;

  let meatQnt =
    meatPerPerson(duration) * adults + (meatPerPerson(duration) / 2) * kids;
  let beerQnt = beerPerPerson(duration) * adults;
  let waterQnt =
    waterPerPerson(duration) * adults + (waterPerPerson(duration) / 2) * kids;

  result.innerHTML = `<p><span>${meatQnt / 1000}</span> Kg de Carne</p>`;
  result.innerHTML += `<p><span>${Math.ceil(beerQnt / 355)}</span> Latas de Cerveja</p>`;
  result.innerHTML += `<p><span>${waterQnt2(waterQnt)}</span>`;
  result.innerHTML += `${duration2(adults, kids, duration)}`;
}


// Placing plural
function waterQnt2(waterQnt) {
  let waterCount = Math.ceil(waterQnt / 1000);
  if (waterCount > 1) {
    return `<p><span>${waterCount}</span> litros de Bebidas</p>`;
  } else if (waterCount < 1) {
    return `<p><span>${waterCount}</span> litros de Bebidas</p>`;
  } else {
    return `<p><span>${waterCount}</span> litro de Bebida</p>`;
  }
}


// Putting text on screen
function duration2(adults, kids, duration) {
  let total = Number(adults) + Number(kids);
  let totalPlural = total > 1 ? `<span>${total}</span> pessoas` : `<span>${total}</span> pessoa`;
  if (duration > 1) {
    return `<p>Para <span>${duration}</span> horas de Churrasco com ${totalPlural}.</p>`;
  } else if (duration < 1) {
    return `<p>Para o seu Churrasco com ${totalPlural}.</p>`;
  } else {
    return `<p>Para <span>${duration}</span> hora de Churrasco com ${totalPlural}.</p>`;
  }
}


// Getting amount of food based on Hour
function meatPerPerson(duration) {
  if (duration >= 6) {
    return 750;
  } else {
    return 600;
  }
}



function beerPerPerson(duration) {
  if (duration >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}



function waterPerPerson(duration) {
  if (duration >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}
