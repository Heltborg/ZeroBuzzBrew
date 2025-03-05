"use strict";

// Koden kører først når hele html siden er indlæst
document.addEventListener("DOMContentLoaded", function () {
  const bien = document.querySelector(".flyvende_billede"); // Finder bien i HTML og laver variabel til den

  let position = window.innerWidth - 150; // Startposition i højre side af skærmen
  let retning = -3; // Hvor mange px bien flytter sig for hver "opdatering". Negativ værdi så det er mod venstre den flyver

  // Funktionen der bestemmer biens bevægelse
  function flytBien() {
    // Opdater bienens position ved at tilføje (eller trække fra) "retning"
    position += retning;

    // Hvis bien rammer kanten skifter den retning
    if (position > window.innerWidth - 150 || position < 0) {
      retning *= -1; // Skifter retning (negativ bliver positiv og omvendt)
      bien.style.transform = `scaleX(${retning > 0 ? -1 : 1})`; // Spejlvender bien, så den "vender rigtigt"
    }

    // Opdaterer biens position i CSS, så den flytter sig
    bien.style.left = position + "px";
  }

  // Kører/opdaterer funktionen hvert 20. millisekund
  setInterval(flytBien, 20);
});
