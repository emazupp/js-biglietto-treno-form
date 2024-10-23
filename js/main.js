const fullnameInput = document.getElementById("full-name");
const kmInput = document.getElementById("km");
const calcButton = document.getElementById("calc-button");
const ticketCard = `
<h2 class="h4 text-center mt-5">IL TUO BIGLIETTO</h2>
<div class="card p-4">
    <div class="row">
        <div class="col-3 d-flex flex-column">
        <h6>NOME PASSEGGERO</h6>
        <p>Emanuele Zuppardo</p>
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
        <p>prezzo</p>
        </div>
    </div>
</div>`;
