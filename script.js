/* ============================================================
   script.js — Rudra Madhab Sahoo Portfolio
   ============================================================ */

/* ===== TYPING EFFECT ===== */
const texts = [
  "BTech CSE AI & ML Student",
  "Python Coder",
  "Agentic AI Explorer",
  "AI Tools Builder",
  "Aspiring AI Engineer"
];

let ti = 0;       // text index
let ci = 0;       // character index
let deleting = false;

const typingEl = document.getElementById("typing");

function type() {
  const current = texts[ti];

  if (!deleting) {
    // typing forward
    typingEl.textContent = current.substring(0, ++ci);
    if (ci === current.length) {
      // pause at end before deleting
      deleting = true;
      setTimeout(type, 1400);
      return;
    }
  } else {
    // deleting backward
    typingEl.textContent = current.substring(0, --ci);
    if (ci === 0) {
      deleting = false;
      ti = (ti + 1) % texts.length;
    }
  }

  setTimeout(type, deleting ? 38 : 75);
}

type();


/* ===== SCROLL REVEAL (IntersectionObserver) ===== */
const revealSections = document.querySelectorAll("section:not(#home)");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

revealSections.forEach(sec => revealObserver.observe(sec));


/* ===== SCROLL TO TOP ===== */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


/* ===== BUBBLE GENERATOR ===== */
const bubbleContainer = document.getElementById("bubbles");

function createBubble() {
  const bubble = document.createElement("div");
  bubble.className = "bubble";

  const size = Math.random() * 18 + 5;

  bubble.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}vw;
    animation-duration: ${Math.random() * 8 + 7}s;
  `;

  bubbleContainer.appendChild(bubble);

  // Remove bubble after animation completes
  setTimeout(() => bubble.remove(), 15000);
}

setInterval(createBubble, 380);


/* ===== ACTIVE NAV HIGHLIGHT ON SCROLL ===== */
const navLinks = document.querySelectorAll(".nav-links a");
const allSections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let current = "";

  allSections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 140) {
      current = sec.id;
    }
  });

  navLinks.forEach(link => {
    link.style.color =
      link.getAttribute("href") === "#" + current
        ? "var(--accent)"
        : "";
  });
});
