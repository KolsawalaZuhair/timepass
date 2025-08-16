// Typewriter Effect
const typewriterElement = document.getElementById("typewriter");
const words = ["Creative Developer", "UI/UX Enthusiast", "Problem Solver", "Tech Explorer"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        letterIndex--;
    } else {
        letterIndex++;
    }

    typewriterElement.textContent = currentWord.slice(0, letterIndex);

    if (!isDeleting && letterIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

// Scroll-triggered fade-in
const fadeElements = document.querySelectorAll(".fade-in");

function checkFadeIn() {
    const triggerBottom = window.innerHeight * 0.85;
    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkFadeIn);
checkFadeIn();
