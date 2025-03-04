"use strict";

// VARIABLE TIL HVER ØL:
const olBilleder = document.querySelectorAll(".scroller img"); // Finder billederne i elementet med class 'scroller'

// FUNKTIONER:
function zoomInd(event) {
  event.target.classList.add("zoom"); // Fortæller hvad funktionen zoomInd skal gøre - tilføje css-klassen zoom
}

function zoomUd(event) {
  event.target.classList.remove("zoom"); // Fortæller hvad funktionen zoomUd skal gøre - fjerne css-klassen zoom
}

// EVENT LISTENER:
olBilleder.forEach((img) => { // Tilføjer eventlisteners for alle billederne i scrolleren
    img.addEventListener("mouseenter", zoomInd); // Når musen bevæger sig ind over et billede køres funktionen zoomInd
    img.addEventListener("mouseleave", zoomUd); // Når musen bliver fjernet fra billedet igen køres funktionen zoomUd
  });