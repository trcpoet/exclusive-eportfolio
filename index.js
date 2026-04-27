// Template IDs for EmailJS
// template_ux16esc - Template ID
// service_frm9cdp - Service ID
// fZork7537wneqtdF2 - Public Key

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 22;

function isReducedMotion() {
    return document.documentElement.classList.contains("reduced-motion");
}

// ===== PARALLAX BACKGROUND =====
function moveBackground(event) {
    if (isReducedMotion()) return;

    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}

// ===== DARK THEME TOGGLE =====
function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }
}

// ===== CONTACT FORM =====
function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList.add("modal__overlay--visible");

    emailjs
        .sendForm(
            "service_frm9cdp",
            "template_ux16esc",
            event.target,
            "fZork7537wneqtdF2"
        )
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        })
        .catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on tchowdhury29@gmail.com"
            );
        });
}

// ===== MODAL TOGGLE =====
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        document.body.classList.remove("modal--open");
        return;
    }

    isModalOpen = true;
    document.body.classList.add("modal--open");
}

// ===== PRELOADER ANIMATION =====
function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    const delay = isReducedMotion() ? 220 : 1400;

    setTimeout(() => {
        preloader.classList.add("preloader--hidden");

        setTimeout(() => {
            preloader.style.display = "none";
            initHeroAnimations();
        }, 500);
    }, delay);
}

// ===== HERO TEXT SCRAMBLE =====
function scrambleText(element, finalText, duration = 800) {
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
    const totalFrames = Math.round(duration / 40);
    let frame = 0;

    const interval = setInterval(() => {
        element.textContent = finalText
            .split("")
            .map((char, i) => {
                if (char === " ") return " ";
                if (i < Math.floor((frame / totalFrames) * finalText.length)) {
                    return char;
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        if (frame >= totalFrames) {
            element.textContent = finalText;
            clearInterval(interval);
        }
        frame++;
    }, 40);
}

function initHeroAnimations() {
    const titles = document.querySelectorAll(".title");
    const headerPara = document.querySelector(".header__para");
    const socialList = document.querySelector(".social__list");
    const headerPhoto = document.querySelector(".header__photo");

    if (isReducedMotion()) {
        if (titles.length >= 2) {
            titles[0].textContent = "Hey";
            titles[1].textContent = "I'm Tahsin.";
        }
        if (headerPara) headerPara.classList.add("hero-animate-in");
        if (socialList) socialList.classList.add("hero-animate-in");
        if (headerPhoto) {
            headerPhoto.style.opacity = "1";
            headerPhoto.style.transform = "translateY(0)";
        }
        return;
    }

    if (titles.length >= 2) {
        scrambleText(titles[0], "Hey", 800);

        setTimeout(() => {
            scrambleText(titles[1], "I'm Tahsin.", 800);
        }, 400);
    }

    setTimeout(() => {
        if (headerPara) headerPara.classList.add("hero-animate-in");
        if (socialList) socialList.classList.add("hero-animate-in");
        if (headerPhoto) {
            headerPhoto.style.transition =
                "opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)";
            headerPhoto.style.transform = "translateY(0)";
            headerPhoto.style.opacity = "1";
        }
    }, 1600);
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const cursorDot = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");

    if (!cursorDot || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = mouseX + "px";
        cursorDot.style.top = mouseY + "px";
    });

    function animateRing() {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;

        cursorRing.style.left = ringX + "px";
        cursorRing.style.top = ringY + "px";

        requestAnimationFrame(animateRing);
    }
    animateRing();

    const interactiveElements = document.querySelectorAll(
        "a, button, .click, .project__wrapper, .social__link"
    );

    interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor--hover");
        });

        el.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor--hover");
        });
    });
}

// ===== SCROLL PROGRESS, NAV COMPACT, HERO FADE =====
function initScrollChrome() {
    const nav = document.getElementById("site-nav");
    const progress = document.getElementById("scroll-progress");
    const landing = document.getElementById("landing-page");
    if (!nav || !progress) return;

    const SCROLL_COMPACT_AT = 48;
    const HERO_FADE_RANGE = 360;

    let ticking = false;

    function updateFromScroll() {
        const y = window.scrollY;
        const doc = document.documentElement;
        const maxScroll = Math.max(1, doc.scrollHeight - window.innerHeight);
        const pct = Math.min(100, Math.round((y / maxScroll) * 100));

        progress.style.width = pct + "%";

        if (y > SCROLL_COMPACT_AT) {
            nav.classList.add("site-nav--compact");
        } else {
            nav.classList.remove("site-nav--compact");
        }

        if (landing && !isReducedMotion()) {
            const heroT = Math.min(1, y / HERO_FADE_RANGE);
            const opacity = 1 - heroT * 0.32;
            const shift = heroT * 14;
            landing.style.setProperty("--hero-opacity", String(opacity));
            landing.style.setProperty("--hero-shift", `${shift}px`);
        } else if (landing) {
            landing.style.setProperty("--hero-opacity", "1");
            landing.style.setProperty("--hero-shift", "0px");
        }

        const main = document.getElementById("main-content");
        if (main && !isReducedMotion()) {
            const fadeStart = 80;
            const fadeSpan = 720;
            const t = Math.min(
                1,
                Math.max(0, (y - fadeStart) / fadeSpan)
            );
            const mainOp = 1 - t * 0.12;
            main.style.opacity = String(mainOp);
        } else if (main) {
            main.style.opacity = "1";
        }
    }

    function onScrollOrResize() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateFromScroll();
            ticking = false;
        });
    }

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    updateFromScroll();
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));
}

// ===== VANILLA TILT 3D CARDS =====
function initVanillaTilt() {
    if (typeof VanillaTilt === "undefined") return;

    const headshot = document.querySelector(".header__photo--frame");
    if (headshot) {
        VanillaTilt.init(headshot, {
            max: 10,
            speed: 600,
            glare: true,
            "max-glare": 0.18,
            scale: 1.02,
            gyroscope: false,
        });
    }

    const projectCards = document.querySelectorAll(".project .project__wrapper");

    projectCards.forEach((card) => {
        VanillaTilt.init(card, {
            max: 6,
            speed: 400,
            glare: true,
            "max-glare": 0.12,
            scale: 1.02,
            gyroscope: false,
        });
    });
}

// ===== MAGNETIC BUTTON EFFECT =====
function initMagneticButtons() {
    if (!window.matchMedia("(hover: hover)").matches) return;

    const magneticElements = document.querySelectorAll(".social__link, .mail__btn");

    magneticElements.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.28;
            const deltaY = (e.clientY - centerY) * 0.28;
            el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        el.addEventListener("mouseleave", () => {
            el.style.transform = "translate(0, 0)";
            el.style.transition =
                "transform 500ms cubic-bezier(0.23, 1, 0.32, 1)";
        });

        el.addEventListener("mouseenter", () => {
            el.style.transition = "transform 100ms ease-out";
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener("DOMContentLoaded", () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.classList.add("reduced-motion");
    }

    initScrollChrome();
    initPreloader();

    if (!isReducedMotion()) {
        initCustomCursor();
        initVanillaTilt();
        initMagneticButtons();
    }

    initScrollReveal();
});
