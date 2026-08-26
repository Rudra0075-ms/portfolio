/* ============================================================
   Rudra Madhab Sahoo — Portfolio interactions
   ============================================================ */
(function () {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- TYPING EFFECT ---------- */
  const roles = [
    "B.Tech CSE · AI & ML student",
    "Python developer",
    "Agentic AI explorer",
    "AI agent builder",
    "Aspiring AI engineer",
  ];
  const typingEl = document.getElementById("typing");
  if (typingEl) {
    if (reduceMotion) {
      typingEl.textContent = roles[0];
    } else {
      let ti = 0, ci = 0, deleting = false;
      const tick = () => {
        const word = roles[ti];
        typingEl.textContent = word.substring(0, deleting ? --ci : ++ci);
        if (!deleting && ci === word.length) {
          deleting = true;
          return setTimeout(tick, 1500);
        }
        if (deleting && ci === 0) {
          deleting = false;
          ti = (ti + 1) % roles.length;
        }
        setTimeout(tick, deleting ? 40 : 80);
      };
      tick();
    }
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          revealObserver.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll("section:not(.hero)").forEach((s) => revealObserver.observe(s));

  /* ---------- STAGGER GRID CHILDREN ---------- */
  document.querySelectorAll(".cards, .about-bento").forEach((grid) => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.setProperty("--i", i);
    });
  });

  /* ---------- ACTIVE NAV + BACK TO TOP ---------- */
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = document.querySelectorAll("section[id]");
  const toTop = document.getElementById("toTop");

  const onScroll = () => {
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
    });
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
    if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })
    );
  }

  /* ---------- MOBILE NAV ---------- */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navLinks");
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("open", open);
      toggle.closest(".nav").classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
    menu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") setOpen(false);
    });
  }

  /* ---------- CURSOR SPOTLIGHT ---------- */
  const spotlight = document.getElementById("spotlight");
  if (spotlight && !reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    let raf = null;
    window.addEventListener("mousemove", (e) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        spotlight.style.setProperty("--mx", e.clientX + "px");
        spotlight.style.setProperty("--my", e.clientY + "px");
        raf = null;
      });
    });
  }

  /* ---------- FOOTER YEAR ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
