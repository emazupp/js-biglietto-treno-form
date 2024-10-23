const fullnameInput = document.getElementById("full-name");
const kmInput = document.getElementById("km");
const ticketForm = document.getElementById("ticket-form");
const ageInput = document.getElementById("age-select");
const resultContainer = document.getElementById("result-container");
const deleteButton = document.getElementById("delete-button");

deleteButton.addEventListener("click", (event) => {
  event.preventDefault();
  fullnameInput.value = "";
  kmInput.value = "";
});

ticketForm.addEventListener("submit", (event) => {
  event.preventDefault();
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
  <div class="card rounded-0 border-2 border-end-0 border-start-0 ps-2 mb-3">
  <div class="row">
  <div class="col-3 d-flex flex-column bg-secondary py-3">
  <h6>NOME PASSEGGERO</h6>
  <p>${fullname}</p>
  </div>
  <div class="col-2 d-flex flex-column py-3 justify-content-between">
  <h6>Offerta</h6>
  <p>Biglietto Standard</p>
  </div>
  <div class="col-2 d-flex flex-column py-3 justify-content-between">
  <h6>Carrozza</h6>
  <p>5</p>
  </div>
  <div class="col-2 d-flex flex-column py-3 justify-content-between">
  <h6>Codice CP</h6>
  <p>92911</p>
  </div>
  <div class="col-3 d-flex flex-column py-3 justify-content-between">
  <h6>Costo biglietto</h6>
  <p>${ticketPrice}€</p>
  </div>
  </div>
  </div>`;
  resultContainer.innerHTML += ticketCard;
});
