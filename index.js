// Template IDs for EmailJS
// template_ux16esc - Template ID
// service_frm9cdp - Service ID
// fZork7537wneqtdF2 - Public Key

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

// ===== PARALLAX BACKGROUND =====
function moveBackground(event) {
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
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add("modal__overlay--visible");

    emailjs
        .sendForm(
            'service_frm9cdp',
            'template_ux16esc',
            event.target,
            'fZork7537wneqtdF2'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
        }).catch(() => {
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
        return document.body.classList.remove("modal--open");
    }

    isModalOpen = true;
    document.body.classList.add("modal--open");
}

// ===== PRELOADER ANIMATION =====
function initPreloader() {
    const preloader = document.getElementById('preloader');

    setTimeout(() => {
        preloader.classList.add('preloader--hidden');

        setTimeout(() => {
            preloader.style.display = 'none';
            // Trigger hero animations after preloader
            initHeroAnimations();
        }, 500);
    }, 1400);
}

// ===== HERO TEXT SCRAMBLE =====
function scrambleText(element, finalText, duration = 800) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*';
    const totalFrames = Math.round(duration / 40);
    let frame = 0;

    const interval = setInterval(() => {
        element.textContent = finalText
            .split('')
            .map((char, i) => {
                if (char === ' ') return ' ';
                if (i < Math.floor((frame / totalFrames) * finalText.length)) {
                    return char;
                }
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');

        if (frame >= totalFrames) {
            element.textContent = finalText;
            clearInterval(interval);
        }
        frame++;
    }, 40);
}

function initHeroAnimations() {
    const titles = document.querySelectorAll('.title');
    const headerPara = document.querySelector('.header__para');
    const socialList = document.querySelector('.social__list');
    const headerPhoto = document.querySelector('.header__photo');

    if (titles.length >= 2) {
        scrambleText(titles[0], 'Hey', 800);

        setTimeout(() => {
            scrambleText(titles[1], "I'm Tahsin.", 800);
        }, 400);
    }

    // Animate para, social list, and photo after text is done
    setTimeout(() => {
        if (headerPara) headerPara.classList.add('hero-animate-in');
        if (socialList) socialList.classList.add('hero-animate-in');
        if (headerPhoto) {
            headerPhoto.style.transition = 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)';
            headerPhoto.style.transform = 'translateY(0)';
            headerPhoto.style.opacity = '1';
        }
    }, 1600);
}

// ===== CUSTOM CURSOR =====
function initCustomCursor() {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');

    if (!cursorDot || !cursorRing) return;

    let mouseX = 0;
    let mouseY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Dot follows directly
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });

    // Ring follows with lag via requestAnimationFrame
    function animateRing() {
        ringX += (mouseX - ringX) * 0.2;
        ringY += (mouseY - ringY) * 0.2;

        cursorRing.style.left = ringX + 'px';
        cursorRing.style.top = ringY + 'px';

        requestAnimationFrame(animateRing);
    }
    animateRing();

    // Expand cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .click, .project__wrapper, .social__link');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            document.body.classList.add('cursor--hover');
        });

        el.addEventListener('mouseleave', () => {
            document.body.classList.remove('cursor--hover');
        });
    });
}

// ===== SCROLL REVEAL ANIMATIONS =====
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));
}

// ===== VANILLA TILT 3D CARDS =====
function initVanillaTilt() {
    if (typeof VanillaTilt === 'undefined') return;

    // Apply tilt to headshot photo
    const headshot = document.querySelector('.header__photo--frame');
    if (headshot) {
        VanillaTilt.init(headshot, {
            max: 15,
            speed: 600,
            glare: true,
            'max-glare': 0.25,
            scale: 1.04,
            gyroscope: false
        });
    }

    // Apply tilt to all project cards except the first one
    const projectCards = document.querySelectorAll('.project:not(:first-child) .project__wrapper');

    projectCards.forEach(card => {
        VanillaTilt.init(card, {
            max: 8,
            speed: 400,
            glare: true,
            'max-glare': 0.15,
            scale: 1.03,
            gyroscope: false
        });
    });
}

// ===== MAGNETIC BUTTON EFFECT =====
function initMagneticButtons() {
    if (!window.matchMedia('(hover: hover)').matches) return;

    const magneticElements = document.querySelectorAll('.social__link, .mail__btn');

    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = (e.clientX - centerX) * 0.3;
            const deltaY = (e.clientY - centerY) * 0.3;
            el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 500ms cubic-bezier(0.23, 1, 0.32, 1)';
        });

        el.addEventListener('mouseenter', () => {
            el.style.transition = 'transform 100ms ease-out';
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initScrollReveal();
    initVanillaTilt();
    initMagneticButtons();
});
