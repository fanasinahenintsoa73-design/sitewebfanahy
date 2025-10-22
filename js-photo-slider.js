let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dotsContainer = document.getElementById('dotsContainer');

for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    if (i === 0) dot.classList.add('active');
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    if (n >= totalSlides) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = n;
    }
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    document.getElementById('current').textContent = currentSlide + 1;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

function goToSlide(n) {
    showSlide(n);
}

let autoPlayInterval = setInterval(() => changeSlide(1), 3000);

const container = document.querySelector('.slideshow-container');
container.addEventListener('mouseenter', () => {
    clearInterval(autoPlayInterval);
});

container.addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(() => changeSlide(1), 2000);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});
