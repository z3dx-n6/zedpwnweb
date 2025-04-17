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
    en: "/france.png", // Chemin pour le drapeau français
    fr: "/royaume-uni.png" // Chemin pour le drapeau anglais
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
      const newText = el.getAttribute(`data-lang-${lang}`);
      if (newText) el.textContent = newText;
    });
  }
});
  
  // Fonction pour faire le fond d'écran de particules
  /*document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = "fixed";
    renderer.domElement.style.top = "0";
    renderer.domElement.style.left = "0";
    renderer.domElement.style.zIndex = "-1";
    document.getElementById("particle-bg").appendChild(renderer.domElement);
  
    const geometry = new THREE.BufferGeometry();
    const count = 300;
    const positions = [];
  
    for (let i = 0; i < count; i++) {
      positions.push((Math.random() - 0.5) * 40);
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 40);
    }
  
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  
    const material = new THREE.PointsMaterial({
      color: 0xa259ff,
      size: 0.2,
      transparent: true,
      opacity: 0.8
    });
  
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
  
    camera.position.z = 10;
  
    const animate = function () {
      requestAnimationFrame(animate);
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;
      renderer.render(scene, camera);
    };
  
    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  
    // PARALLAX SOURIS + SCROLL
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;
  
    document.addEventListener("mousemove", (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    });
  
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      targetY = scrollY * 0.0005;
    });
  
    // ANIMATION DE DÉPLACEMENT DES PARTICULES
    const position = geometry.attributes.position.array;
    const basePositions = [...positions]; // copie des positions de départ
  
    function animateParticles(time) {
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = basePositions[i] + Math.sin(time * 0.001 + i) * 0.1;      // X
        positions[i + 1] = basePositions[i + 1] + Math.cos(time * 0.0015 + i) * 0.1;  // Y
        positions[i + 2] = basePositions[i + 2] + Math.sin(time * 0.002 + i) * 0.1;   // Z
      }
      geometry.attributes.position.needsUpdate = true;
    }
  
    function animateParallax() {
      requestAnimationFrame(animateParallax);
  
      animateParticles(performance.now());
  
      particles.rotation.y += (mouseX * 0.01 - particles.rotation.y) * 0.05;
      particles.rotation.x += (mouseY * 0.01 + targetY - particles.rotation.x) * 0.05;
  
      renderer.render(scene, camera);
    }
  
    animateParallax();
    
  });
  */

