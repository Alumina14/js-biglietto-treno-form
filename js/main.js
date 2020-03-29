//js


// modificare i prompt in getElementById dopo aver creato i campi input in html


// script funzionante calcolo biglietto treno da modificare

// tre input type form, nel primo inserire il nome. Poi il nome trascritto deve andare a finire in innherhtml

// il secoondo e il terzo devono calcolere tra loro il prezzo del biglietto e poi scriverlo in un innerhtml
var prezzoFinale, anniUtente, outputNome, outputKm, outputEta, outputPrezzoFinale, tipoBiglietto;

var nomeUtente = document.getElementById('nome');

var kmUtente = document.getElementById('km');

var eta = document.getElementById('eta');

var bottoneGenera = document.getElementById('genera');

var bottoneAnnulla = document.getElementById('annulla');





bottoneGenera.addEventListener( "click",

  function(){
    outputNome = nomeUtente.value;
    console.log(outputNome);
    document.getElementById('nomePass').innerHTML = outputNome;
    outputKm = kmUtente.value;
    console.log(outputKm);
    prezzoBase = kmUtente.value * 0.21;
    outputEta = eta.value;

      if (outputEta === "minorenne") {
        outputPrezzoFinale = prezzoBase - ((prezzoBase * 20) / 100);
        console.log(outputPrezzoFinale);
        tipoBiglietto = "Young Ticket";
      } else if (outputEta === "over65") {
        outputPrezzoFinale = prezzoBase - ((prezzoBase * 40) / 100);
        console.log(outputPrezzoFinale);
        tipoBiglietto = "Senior Ticket";
      } else if (outputEta === "maggiorenne"){
        outputPrezzoFinale = prezzoBase;
        console.log(outputPrezzoFinale);
        tipoBiglietto = "Standard Ticket";
      }
      document.getElementById('codicecp').innerHTML = Math.floor(Math.random() * 100000) + 10000;
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 25) + 1;
    document.getElementById('offerta').innerHTML = tipoBiglietto;
    document.getElementById('costobiglietto').innerHTML = outputPrezzoFinale.toFixed(2) + " €";

    document.getElementById('divInv').className = "Block";
  }

)

bottoneAnnulla.addEventListener("click",
  function() {
    kmUtente.value = "";
    nomeUtente.value = "";
    document.getElementById('divInv').className = "none";


  }





)
