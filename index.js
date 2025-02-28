function green() {
    document.body.classList.remove('animate-background');
    document.body.style.backgroundColor = "#04AA6D";
}

function blue() {
    document.body.classList.remove('animate-background');
    document.body.style.backgroundColor = "#008CBA";
}

function animatebg() {
    document.body.classList.add('animate-background');
}

let slideIndex = 0;

function showSlides() {
    slides = document.querySelectorAll(".slide");
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

// showSlides();
setInterval(showSlides, 2000);
