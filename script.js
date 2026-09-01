```javascript
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

// Mobile menu
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");

  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute(
    "aria-label",
    open ? "Close menu" : "Open menu"
  );
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");

    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  });
});

// Highlight active navigation link while scrolling
const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-links a");

function updateActiveNav() {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  links.forEach(link => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener("scroll", updateActiveNav, {
  passive: true
});

updateActiveNav();

// Automatically update footer year
document.getElementById("year").textContent = new Date().getFullYear();
```
