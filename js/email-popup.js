"use strict";

// ** Script til at vise en popup, hvis email ikke findes **
document.addEventListener("DOMContentLoaded", function () {
  function showPopup() {
    console.log("showPopup-funktion kaldt"); // Debugging: Logger at funktionen er kaldt

    // Opretter en ny div til fejl-popup
    const errorPopup = document.createElement("div");
    errorPopup.id = "errorPopup";
    errorPopup.innerHTML = `
              <div class="error-popup">
                  <div class="error-header">
                      <div class="error-title">
                          ⚠️ Hmm... Vi kunne ikke finde den email
                      </div>
                      <button class="close-button" onclick="closeErrorPopup()">×</button>
                  </div>
                  <div class="error-message">
                      Tjek, om du har skrevet emailadressen korrekt, eller prøv en anden.
                  </div>
              </div>
          `;
    document.body.appendChild(errorPopup); // Tilføjer popup til body-elementet
    console.log("Popup tilføjet til body"); // Debugging: Logger at popup er tilføjet

    // Tilføjer eventlistener, så popup lukkes ved klik på baggrund eller lukkeknap
    errorPopup.addEventListener("click", function (event) {
      if (event.target.classList.contains("close-button") || event.target === errorPopup) {
        closeErrorPopup();
      }
    });
  }

  // ** Funktion til at lukke popup-vinduet **
  window.closeErrorPopup = function () {
    const errorPopup = document.getElementById("errorPopup"); // Finder popuppen
    if (errorPopup) {
      errorPopup.remove(); // Fjerner popup fra DOM'en
      console.log("Popup lukket"); // Debugging: Logger at popup er lukket
    }
  };

  // ** Forhindrer formularen i at blive sendt og viser i stedet popup **
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Forhindrer standard formularindsendelse
    console.log("Formularindsendelse forhindret"); // Debugging: Logger at formular ikke sendes
    showPopup(); // Kalder funktionen til at vise popup
  });
});
