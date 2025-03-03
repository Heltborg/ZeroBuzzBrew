// VARIABLE TIL HVER ØL og knap:
const olBilleder = document.querySelectorAll(".scroller img");

// FUNCTIONS:
function zoomInd(event) {
  event.target.classList.add("zoom");
}

function zoomUd(event) {
  event.target.classList.remove("zoom");
}

// Funktion til at vise knappen ved hover
function visKnap(event) {
  const parentDiv = event.target.closest("div"); // Finder det nærmeste div, som indeholder billedet
  const knap = parentDiv.querySelector(".vaelg_muligheder"); // Finder knappen i samme div
  if (knap) {
    knap.style.display = "block"; // Viser knappen i den aktuelle div
  }
}

// Funktion til at skjule knappen
function skjulKnap(event) {
  const parentDiv = event.target.closest("div");
  const knap = parentDiv.querySelector(".vaelg_muligheder");
  if (knap) {
    knap.style.display = "none"; // Skjuler knappen i den aktuelle div
  }
}

// EVENT LISTENER:
olBilleder.forEach((img) => {
  img.addEventListener("mouseenter", zoomInd);
  img.addEventListener("mouseleave", zoomUd);
});

// Tilføj event listeners til alle billeder
olBilleder.forEach((img) => {
  img.addEventListener("mouseenter", visKnap);
  img.addEventListener("mouseleave", skjulKnap);
});

//Variabler til pil
const pil = document.querySelector(".pil");
const seAlle = document.querySelector(".se_alle");
const maskotForside = document.querySelector("#maskot_forside");
const footer = document.querySelector(".footer_overskrift");

//Funktion
function updatePilVisibility() {
  if (!pil || !seAlle || !maskotForside || !footer) return; //tjekker om elementerne findes, hvis ikke vil koden ikke køre funktionen

  const seAllePosition = seAlle.getBoundingClientRect();
  const maskotPosition = maskotForside.getBoundingClientRect();
  const footerPosition = footer.getBoundingClientRect();

  //Når se alle eller maskotten er på skærmen vises pilen
  if ((seAllePosition.top < window.innerHeight && seAllePosition.bottom >= 0) || (maskotPosition.top < window.innerHeight && maskotPosition.bottom >= 0)) {
    pil.style.opacity = "0.5";
  } else {
    pil.style.opacity = "0";
  }

  //Er footeren synlig hæves pilen lidt op
  if (footerPosition.top < window.innerHeight) {
    pil.style.bottom = "20rem";
  } else {
    pil.style.bottom = "1rem";
  }
}

//Event listener - tjekker brugeren der scroller
window.addEventListener("scroll", updatePilVisibility);

//Kører funktionen
document.addEventListener("DOMContentLoaded", updatePilVisibility);
