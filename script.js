```javascript
/* ================================
   BASMALA WEBSITE JAVASCRIPT
================================ */

const body = document.body;
const header = document.getElementById("header");
const themeBtn = document.getElementById("themeBtn");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const year = document.getElementById("year");

/* ================================
   Current Year
================================ */

if (year) {
  year.textContent = new Date().getFullYear();
}


/* ================================
   Header Scroll Effect
================================ */

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* ================================
   Mobile Menu
================================ */

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    menuBtn.textContent = "×";
  } else {
    menuBtn.textContent = "☰";
  }

});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");
    menuBtn.textContent = "☰";

  });

});


/* ================================
   Dark / Light Mode
================================ */

const savedTheme = localStorage.getItem("basmala-theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeBtn.textContent = "☾";
} else {
  themeBtn.textContent = "☀";
}


themeBtn.addEventListener("click", () => {

  body.classList.toggle("light");

  const isLight = body.classList.contains("light");

  localStorage.setItem(
    "basmala-theme",
    isLight ? "light" : "dark"
  );

  themeBtn.textContent = isLight ? "☾" : "☀";

});


/* ================================
   Scroll Reveal Animation
================================ */

const revealElements = document.querySelectorAll(
  ".section-heading, .glass, .info-card, .project-card, .trading-box, .contact-box, .timeline-item"
);

revealElements.forEach(element => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {
  observer.observe(element);
});


/* ================================
   Active Navigation
================================ */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navItems.forEach(item => {

    item.classList.remove("active");

    if (item.getAttribute("href") === `#${current}`) {
      item.classList.add("active");
    }

  });

});


/* ================================
   Smooth Button Hover Effect
================================ */

document.querySelectorAll(".btn, .social-btn").forEach(button => {

  button.addEventListener("mousemove", event => {

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);

  });

});


/* ================================
   Prevent Empty Project Links
================================ */

document.querySelectorAll('.project-link[href="#"]').forEach(link => {

  link.addEventListener("click", event => {
    event.preventDefault();

    alert(
      "This project link is ready — replace # with your project URL."
    );
  });

});
```
