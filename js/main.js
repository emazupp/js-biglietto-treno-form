const fullnameInput = document.getElementById("full-name");
const kmInput = document.getElementById("km");
const calcButton = document.getElementById("calc-button");
const ageInput = document.getElementById("age-select");
const resultContainer = document.getElementById("result-container");

calcButton.addEventListener("click", () => {
  const fullname = fullnameInput.value;
  const km = kmInput.value;
  let ticketPrice = km * 0.21;
  const age = ageInput.value;
  const discount20 = 0.2;
  const discount40 = 0.4;

  if (age == "Minorenne") {
    ticketPrice = ticketPrice - ticketPrice * discount20;
  } else if (age == "Over 65") {
    ticketPrice = ticketPrice - ticketPrice * discount40;
  }
  ticketPrice = ticketPrice.toFixed(2);

  const ticketCard = `
  <h2 class="h4 text-center mt-5">IL TUO BIGLIETTO</h2>
  <div class="card p-4">
  <div class="row">
  <div class="col-3 d-flex flex-column">
  <h6>NOME PASSEGGERO</h6>
  <p>${fullname}</p>
  </div>
  <div class="col-2 d-flex flex-column">
  <h6>Offerta</h6>
  <p>Biglietto Standard</p>
  </div>
  <div class="col-2 d-flex flex-column">
  <h6>Carrozza</h6>
  <p>5</p>
  </div>
  <div class="col-2 d-flex flex-column">
  <h6>Codice CP</h6>
  <p>92911</p>
  </div>
  <div class="col-3 d-flex flex-column">
  <h6>Costo biglietto</h6>
  <p>${ticketPrice}€</p>
  </div>
  </div>
  </div>`;
  resultContainer.innerHTML = ticketCard;
});
