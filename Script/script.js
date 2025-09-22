////////////////// HOME PICTURE //////////////////
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slides img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove("active");
            if (i === index) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    setInterval(nextSlide, 4000); // Change slide every 4 seconds
    showSlide(currentIndex);
});

////////////////// ANIMATION REVEAL //////////////////
const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, x = revealElements.length; i < x; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

////////////////// CAROUSEL //////////////////
window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

document.addEventListener("DOMContentLoaded", function() {
    initializeCarousel();
    document.querySelector(".next").addEventListener("click", nextSlide);
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelectorAll(".indicator").forEach((indicator, index) => {
        indicator.addEventListener("click", function() {
            currentSlide(index);
        });
    });
});

const slides = document.querySelectorAll(".carousel img");
const indicators = document.querySelectorAll(".carousel-indicators .indicator");
let slideIndex = 0;
let intervalId;

function initializeCarousel() {
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides.forEach((slide, idx) => {
        slide.classList.remove("display-image");
        indicators[idx].classList.remove("active");
    });

    slides[slideIndex].classList.add("display-image");
    indicators[slideIndex].classList.add("active");
}

function nextSlide() {
    showSlide(slideIndex + 1);
    resetInterval();
}

function prevSlide() {
    showSlide(slideIndex - 1);
    resetInterval();
}

function currentSlide(index) {
    showSlide(index);
    resetInterval();
}

function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 5000);
}

////////////////////BURGER MENU/////////////////////
document.addEventListener("DOMContentLoaded", function() {
    const burgerButton = document.querySelector('.burger-button');
    const dropdownNav = document.querySelector('.dropdown-nav');

    burgerButton.addEventListener('click', () => {
        if (dropdownNav.classList.contains('hidden')) {
            dropdownNav.classList.remove('hidden');
            dropdownNav.classList.add('show', 'fade', 'slideInRight');
        } else {
            dropdownNav.classList.add('hidden');
            dropdownNav.classList.remove('show', 'fade', 'slideInRight');
        }
    });
});

