// ==========================================
// PORTFOLIO WEBSITE - SCRIPT.JS
// ==========================================

console.log("Portfolio Loaded");

// ==========================================
// DEVELOPER INFO
// ==========================================

const developer = {
    name: "Dhananjay K Patel",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    passion: "Building Modern Web Applications"
};

// ==========================================
// PROJECT SLIDER
// ==========================================

const sliderTrack = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function updateSlider() {

    if (!sliderTrack) return;

    sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }

}

if (nextBtn) {

    nextBtn.addEventListener("click", () => {
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        updateSlider();
    });

}

if (prevBtn) {
    prevBtn.addEventListener("click", () => {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.length - 1
        }
        updateSlider();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        currentSlide = index;
        updateSlider();
    });
});
updateSlider();

// ==========================================
// SMOOTH SCROLL
// ==========================================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ==========================================
// ACTIVE NAVBAR
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

// ==========================================
// STICKY NAVBAR
// ==========================================

const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

// ==========================================
// SCROLL TO TOP
// ==========================================

const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
    if (!topBtn) return;
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }

});

if (topBtn) {
    topBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================================
// EMAILJS CONTACT FORM
// ==========================================

emailjs.init({
    publicKey: "xgKB7s-L9QXq5Psmz"
});

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const btn = document.getElementById("sendBtn");
        const btnText = document.getElementById("btnText");

        btn.disabled = true;
        btnText.innerHTML = "Sending...";
        emailjs.sendForm(

            "arjun_3535",
            "template_3535",
            this
        )

            .then(() => {

                // alert("✅ Message Sent Successfully!");

                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Thank you for contacting me. I'll get back to you soon.",
                    confirmButtonColor: "#8b5cf6",
                    background: "#111827",
                    color: "#ffffff",
                    showConfirmButton: false,
                    timer: 2500
});

                form.reset();
                btnText.innerHTML = "Message Sent ✓";
                setTimeout(() => {
                    btnText.innerHTML = "Send Message";
                    btn.disabled = false;
                }, 2500);

            })

            .catch((error) => {
                console.log(error);
                alert("❌ Failed to Send Message!");
                btnText.innerHTML = "Send Message";
                btn.disabled = false;
            });
    });
}

/*=============== SCROLL UP ===============*/

const scrollUp = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {

    if (window.scrollY >= 300) {
        scrollUp.classList.add("show");
    } else {
        scrollUp.classList.remove("show");
    }

});

scrollUp.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

console.log("All JavaScript Loaded Successfully");