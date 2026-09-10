```javascript
/* =========================
   LOADER
========================= */

window.addEventListener("load", function () {

    const loader =
        document.getElementById("loader");

    setTimeout(function () {

        loader.classList.add("hide");

    }, 900);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuBtn.textContent = "×";

    } else {

        menuBtn.textContent = "☰";

    }

});


document.querySelectorAll("nav a")
.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   NAVBAR
========================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", function () {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   TYPING EFFECT
========================= */

const typingText =
    document.getElementById("typingText");


const words = [
    "طالب طب",
    "Web Developer",
    "Programmer",
    "Trader",
    "Technology Enthusiast",
    "Lifelong Learner"
];


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord =
        words[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (
                wordIndex >=
                words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    setTimeout(
        typeEffect,
        deleting ? 50 : 90
    );

}


typeEffect();


/* =========================
   ACTIVE NAV
========================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        "nav a"
    );


window.addEventListener("scroll", function () {

    let current = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;


        if (
            window.scrollY >=
            sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");


        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   YEAR
========================= */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();
```
