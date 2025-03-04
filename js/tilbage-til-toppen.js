"use strict";

//Variabler til pil, 'se alle', maskot og footer
const pil = document.querySelector(".pil"); // Finder pil
const seAlle = document.querySelector(".se_alle"); // Finder se alle
const maskotForside = document.querySelector("#maskot_forside"); // Finder maskot
const footer = document.querySelector(".footer_overskrift"); // Finder footerens overskrift

//Funktion til at opdatere pilens synlighed afhængig af scroll-position
function updatePilVisibility() {
  if (!pil || !seAlle || !maskotForside || !footer) return; //tjekker om elementerne findes, hvis ikke de gør vil koden ikke køre funktionen

  // Henter positionen af elementerne i forhold til viewporten
  const seAllePosition = seAlle.getBoundingClientRect();
  const maskotPosition = maskotForside.getBoundingClientRect();
  const footerPosition = footer.getBoundingClientRect();

  // Hvis 'se alle' eller maskotten er på skærmen vises pilen
  if ((seAllePosition.top < window.innerHeight && seAllePosition.bottom >= 0) || (maskotPosition.top < window.innerHeight && maskotPosition.bottom >= 0)) {
    pil.style.opacity = "0.5"; // Pilen er 50% synlig
  } else {
    pil.style.opacity = "0"; // Pilen er usynlig hvis ikke 'se alle' eller maskotten er på skærmen
  }

  // Er footeren synlig hæves pilen lidt op for at undgå overlap
  if (footerPosition.top < window.innerHeight) {
    pil.style.bottom = "20rem"; // Placering når footeren er synlig
  } else {
    pil.style.bottom = "1rem"; // Placering når footeren ikke er synlig
  }
}

//Event listener - tjekker brugeren der scroller og opdaterer pilens synlighed
window.addEventListener("scroll", updatePilVisibility);

// Kører funktionen når dokumentet er færdigindlæst - html bliver læst før man begynder at "flytte/manipulere" elementerne
document.addEventListener("DOMContentLoaded", updatePilVisibility);

