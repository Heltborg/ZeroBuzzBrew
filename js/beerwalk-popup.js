"use strict";

// Når siden er indlæst, aktiveres event listeneren for tilmeldingsknappen
document.addEventListener("DOMContentLoaded", function () {
    function showPopup() { // Funktion til at vise pop-up
      const popupContainer = document.createElement("div"); // Opretter en div-container til pop-up'en
      popupContainer.id = "popupContainer"; // Giver den et ID så det kan styles
      // HTML-indhold til pop-up'en
      popupContainer.innerHTML = `
            <div id="popupBox">
                <button id="closePopup">&times;</button>
                <div id="popupContent">
                <img src="img/beer_walk_maskot.png" alt="BuzzBeeFly" id="popupImage">
                    <h2>Du er nu tilmeldt ZeroBuzz BeerWalk</h2>
                    <p>Vi glæder os til at tage dig med på en smagfuld gåtur fyldt med god energi, fællesskab og de bedste alkoholfrie øl.</p>
                    <br>
                    <p>📩 Tjek din mail for flere detaljer – vi ses snart til en gåtur med smag og fællesskab!</p>
                </div>
            </div>
        `;

      document.body.appendChild(popupContainer); // Tilføjer pop-up'en til body'en, så den vises på siden
  
      // Luk pop-up'en ved klik på luk-knappen
      document.getElementById("closePopup").addEventListener("click", function () {
        popupContainer.remove(); // Fjerner pop-up'en fra DOM'en
      });
  
      // Luk pop-up'en ved klik udenfor boksen
      popupContainer.addEventListener("click", function (event) {
        if (event.target === popupContainer) { // Tjekker om brugeren klikker udenfor boksen
          popupContainer.remove(); // Lukker pop-up'en
        }
      });
    }
  
    // Tilføjer event listener til tilmeldingsknappen, så pop-up'en vises ved klik
    document.getElementById("signupButton").addEventListener("click", showPopup);
  });