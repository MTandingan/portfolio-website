const carousel = document.querySelector(".carousel")
const container = carousel.querySelector(".carousel-container");
const slides = container.querySelectorAll(".carousel-slide");
const prevBtn = carousel.querySelector(".carousel-btn-prev");
const nextBtn = carousel.querySelector(".carousel-btn-next");
const dotsContainer = carousel.querySelector(".carousel-dots");

let autoplayInterval;
let currentIndex = 0;
let totalSlides = slides.length;

createDots();
updateCarousel();
startAutoplay();

function createDots(){
    for(let i = 0; i < totalSlides; i++){
        const dot = document.createElement("div");
        dot.classList.add("carousel-dot");
        dot.addEventListener("click", () => {
            currentIndex = i;
            updateCarousel();
        });
        dotsContainer.appendChild(dot);
    }
}

function updateCarousel(){
    container.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots(){
    const dots = dotsContainer.querySelectorAll(".carousel-dot");
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
});

function startAutoplay(){
    autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000);
}

function stopAutoplay(){
    clearInterval(autoplayInterval);
}

carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);