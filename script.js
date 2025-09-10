document.addEventListener("DOMContentLoaded", () => {
  // Mise à jour de l'année
  document.getElementById("year").textContent = new Date().getFullYear();

  // Effet de texte tapé
  const typingText = document.getElementById("typing-text");
  const text = "Pentest IT/OT | DevSecOps / CI/CD Security | SIEM/SOAR (Splunk, Cortex) | Framework for Vulnerability Analysis ";
  let index = 0;

  function typeEffect() {
      if (index < text.length) {
          typingText.textContent += text[index];
          index++;
          setTimeout(typeEffect, 50);
      }
  }
  typeEffect();

    // Simulation de terminal
    const terminalContent = document.getElementById("terminal-content");
    const commands = [
        "root@z3d:~# PostQuantum_Hybrid_KEM : hybrid key exchange combining classical RSA-OAEP and simplified Kyber512",
        "root@z3d:~# simple_kyber512 : This library simulates a key encapsulation mechanism (KEM) inspired by Kyber512.",
        "root@z3d:~# proxybuster : recursive URL enumerator designed to explore web directories and endpoints",
        "root@z3d:~# gen_laravel_cookie : valid Laravel encrypted cookies using a known APP_KEY and a custom PHP serialized payload",
        "root@z3d:~# ModBusSploit : ModBusSploit is a comprehensive framework, written in Python3.",
        "root@z3d:~# chatgath : describes how to create and integrate a custom module into Metasploit to scan Modbus services..",
        "root@z3d:~# Modbus_client : modbus_simulator.py is a Python script designed to simulate a Modbus TCP server.",
    ];
  

  let commandIndex = 0;
  function displayCommands() {
      if (commandIndex < commands.length) {
          terminalContent.innerHTML += commands[commandIndex] + "<br>";
          commandIndex++;
          setTimeout(displayCommands, 2000);
      }
  }
  displayCommands();

 // Liste des write-ups
const writeups = [
  { title: "TryHackMe - Challenge Y", link: "https://example.com" },
  { title: "Forensics - Analyse mémoire", link: "https://example.com" }
];

const writeupList = document.getElementById("writeup-list");
writeups.forEach(writeup => {
  const div = document.createElement("div");
  div.innerHTML = `<a href="${writeup.link}" target="_blank">🔹 ${writeup.title}</a>`;
  writeupList.appendChild(div);
});

});

// Fonction pour faire bouton changement de langue 
document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("lang-toggle");
const flag = document.getElementById("flag-icon");
let currentLang = "en"; // Langue par défaut = français

// Définir les chemins des drapeaux
const flagPaths = {
  en: "france.png", // Chemin pour le drapeau français
  fr: "royaume-uni.png" // Chemin pour le drapeau anglais
};

// Appliquer directement la langue française au chargement
flag.src = flagPaths.fr;
toggleLanguage(currentLang);

button.addEventListener("click", () => {
  // Bascule entre les langues
  currentLang = currentLang === "fr" ? "en" : "fr";

  // Mettre à jour le drapeau (vers l'autre langue)
  flag.src = flagPaths[currentLang];

  // Mettre à jour les textes
  toggleLanguage(currentLang);
});

function toggleLanguage(lang) {
  document.querySelectorAll("[data-lang-fr], [data-lang-en]").forEach(el => {
    const html = el.getAttribute(`data-lang-${lang}`);
    if (html) {
      // Remplace le contenu HTML (et non textContent) pour garder la mise en forme
      el.innerHTML = html;
    }
  });
}
});


