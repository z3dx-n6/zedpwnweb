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
      "root@z3d:~# feroxbuster : A fast, simple, recursive content discovery tool written in Rust.",
      "root@z3d:~# amass : In-depth attack surface mapping and asset discovery.",
      "root@z3d:~# chkrootkit : This program locally checks for signs of a rootkit. 'Forked' to fix false-positive for SucKIT rootkit.",
      "root@z3d:~# XSS-Automation : A shell script to automate XSS vulnerability testing.",
      "root@z3d:~# loxs : Best tool for finding SQLi, CRLF, XSS, LFi, OpenRedirect.",
      "root@z3d:~# subfinder : Fast passive subdomain enumeration tool.",
      "root@z3d:~# assetfinder : Find domains and subdomains related to a given domain.",
      "root@z3d:~# subscraper : Subdomain and target enumeration tool built for offensive security testing.",
      "root@z3d:~# LitOcean : The LitOcean Subdomain Enumeration Tool.",
      "root@z3d:~# acunetix-13-kali-linux : Install Acunetix 13 on Kali Linux.",
      "root@z3d:~# dalfox : 🌙🦊 Dalfox is a powerful open-source XSS scanner and utility focused on automation.",
      "root@z3d:~# katana : A next-generation crawling and spidering framework.",
      "root@z3d:~# ParamSpider : Mining URLs from dark corners of Web Archives for bug hunting/fuzzing/further probing.",
      "root@z3d:~# sysreptor : A customizable and powerful pentest reporting platform for offensive security pros.",
      "root@z3d:~# patator : A multi-purpose brute-forcer, with modular design and flexible usage.",
      "root@z3d:~# ffuf : Fast web fuzzer written in Go.",
      "root@z3d:~# OneForAll : 强大的子域收集工具 (Powerful subdomain collection tool).",
      "root@z3d:~# tpotce : 🍯 T-Pot - The All In One Multi Honeypot Platform 🐝.",
      "root@z3d:~# RustScan : 🤖 The Modern Port Scanner written in Rust.",
      "root@z3d:~# chisel : A fast TCP/UDP tunnel over HTTP.",
      "root@z3d:~# proxychains-ng : Preloader that hooks socket calls to redirect traffic via proxies (SOCKS/HTTP).",
      "root@z3d:~# ",
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


