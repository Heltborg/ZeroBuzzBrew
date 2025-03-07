"use strict";

//Variabler til pil, hero-billede og footer
const pil = document.querySelector(".pil"); // Finder pil
const hero = document.querySelector(".hero_shop"); // Finder hero billedet
const footer = document.querySelector(".footer_overskrift"); // Finder footerens overskrift

//Funktion til at opdatere pilens synlighed afhængig af scroll-position
function opdaterPilSynlighed() {
  if (!pil || !hero || !footer) return; //tjekker om elementerne findes, hvis ikke de gør vil koden ikke køre funktionen

  // Henter positionen af elementerne i forhold til viewporten
  const heroPosition = hero.getBoundingClientRect();
  const footerPosition = footer.getBoundingClientRect();

  // Hvis hero-billedet er på skærmen vises pilen ikke
  if (heroPosition.top < window.innerHeight && heroPosition.bottom >= 0) {
    pil.style.opacity = "0"; // Pilen er usynlig hvis hero-billedet er på skærmen
  } else {
    pil.style.opacity = "0.5"; // Pilen er 50% synlig
  }

  // Er footeren synlig hæves pilen lidt op for at undgå overlap
  if (footerPosition.top < window.innerHeight) {
    pil.style.bottom = "20rem"; // Placering når footeren er synlig
  } else {
    pil.style.bottom = "1rem"; // Placering når footeren ikke er synlig
  }
}

//Event listener - tjekker brugeren der scroller og opdaterer pilens synlighed
window.addEventListener("scroll", opdaterPilSynlighed);

// Kører funktionen når dokumentet er færdigindlæst - html bliver læst før man begynder at "flytte/manipulere" elementerne
document.addEventListener("DOMContentLoaded", opdaterPilSynlighed);
