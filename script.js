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
