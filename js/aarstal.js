"use strict";

window.onload = function () {
  // Nulstil felterne i formularen, når siden indlæses
  document.getElementById("navn").value = "";
  document.getElementById("email").value = "";
  document.getElementById("by").value = "";
  document.getElementById("aarstal").value = "";

  // Henter dropdown-menuen for årstal
  const yearSelect = document.getElementById("aarstal");
  const currentYear = new Date().getFullYear(); // Finder det aktuelle år

  // Tilføjer år fra nuværende år og 100 år tilbage
  for (let year = currentYear; year >= currentYear - 100; year--) {
    const option = document.createElement("option"); // Opretter en ny option
    option.value = year; // Sætter værdien til årstallet
    option.textContent = year; // Sætter den viste tekst til årstallet
    yearSelect.appendChild(option); // Tilføjer årstallet til dropdown-menuen
  }
};
