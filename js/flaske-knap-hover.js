"use strict";

// Funktion til at vise 'vælg muligheder' knappen ved hover
function visKnap(event) {
    const parentDiv = event.target.closest("div"); // Finder det nærmeste div, som indeholder billedet
    const knap = parentDiv.querySelector(".vaelg_muligheder"); // Finder knappen i samme div
    if (knap) { // Tjekker om knappen eksisterer i div'en
      knap.style.display = "block"; // Viser knappen i den aktuelle div ved at ændre display til 'block'
    }
  }
  
  // Funktion til at skjule knappen når musen flyttes
  function skjulKnap(event) {
    const parentDiv = event.target.closest("div"); // Finder det nærmeste div, som indeholder billedet
    const knap = parentDiv.querySelector(".vaelg_muligheder"); // Finder knappen i samme div
    if (knap) { // Tjekker om knappen eksisterer i div'en
      knap.style.display = "none"; // Skjuler knappen i den aktuelle div ved at ændre display til 'none'
    }
  }
  
  // EVENT LISTENER:
  // Tilføj event listener til alle billeder så knappen bliver vist og skjult
  olBilleder.forEach((img) => {
    img.addEventListener("mouseenter", visKnap); // Vis knap ved hover
    img.addEventListener("mouseleave", skjulKnap); // Skjul knap når musen flyttes væk
  });