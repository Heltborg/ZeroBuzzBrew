"use strict";

// Koden kører først når hele html siden er indlæst
document.addEventListener("DOMContentLoaded", function () {
  const minus = document.querySelector(".minus"); // Finder minus knappen i html
  const plus = document.querySelector(".plus"); // Finder plus knappen i html
  const antalSpan = document.querySelector(".antal"); // Finder antal i html
  const kurvKnap = document.querySelector(".indkobskurv_knap"); // Finder kurv knap i html


  let antal = 1; // Antallet ændrer sig og skal derfor være let og ikke const. Starter på 1
  const prisPerStk = 27; // Pris pr. stk. i DKK. Prisen er fast og skal derfor være const

  // Tilføjer eventlistener til plus-knappen
  plus.addEventListener("click", function () {
    antal++; // Øger antallet med 1 når der bliver klikket på knappen
    antalSpan.textContent = antal; // Opdaterer visningen af antallet
  });

  // Tilføjer eventlistener til minus-knappen
  minus.addEventListener("click", function () {
    if (antal > 1) { // Tjekker om tallet er større end 1
      antal--; // Hvis tallet er større end 1 så minusser den antallet med 1 når der klikkes på knappen
      antalSpan.textContent = antal; // Opdaterer visningen af antallet
    }
  });

  // Funktion til en alert der kommer når man trykker på læg i kurv-knappen
  kurvKnap.addEventListener("click", function () {
    let totalPris = antal * prisPerStk; // Beregner den samlede pris
    alert(`Du har tilføjet ${antal} stk. Hazy Lazy IPA til kurven!\nSamlet pris: ${totalPris} kr.`);
  });
});
