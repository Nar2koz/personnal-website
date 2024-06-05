// Afficher une alerte lorsque le bouton est cliqué
document.getElementById("alertButton").addEventListener("click", function () {
  alert("Bouton cliqué !");
});

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", function () {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
});

document.getElementById("prev").addEventListener("click", function () {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentSlide * 100;
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

// Disparition du header et apparition du texte de présentation au scroll
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const presentation = document.getElementById("presentation");

  if (window.scrollY > window.innerHeight) {
    header.style.top = "-100px"; // Cache le header
    presentation.style.opacity = "1"; // Affiche la présentation
  } else {
    header.style.top = "0"; // Affiche le header
    presentation.style.opacity = "0"; // Cache la présentation
  }
});
