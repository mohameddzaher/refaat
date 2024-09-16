let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showNextSlide() {
    const currentSlide = slides[currentIndex];
    let nextIndex = (currentIndex + 1) % totalSlides;
    const nextSlide = slides[nextIndex];

    // Slide to the left by the width of one slide
    nextSlide.style.transform = `translateX(-${nextIndex * 100}%)`;

    // Animate the current slide to slide out to the left smoothly
    currentSlide.style.transform = `translateX(-100%)`;
    currentSlide.style.transition = 'transform 0.5s ease';

    // Update currentIndex
    currentIndex = nextIndex;

    // Reset currentIndex to 0 when it reaches the last slide
    if (currentIndex === 0) {
        nextIndex = 0;
        slides.forEach((slide) => {
            slide.style.transform = '';
            slide.style.transition = '';
        });
    }

    // Optional: Add the 'active' class to style the current slide differently if needed
    slides.forEach((slide) => slide.classList.remove('active'));
    slides[currentIndex].classList.add('active');
}

setInterval(showNextSlide, 3000);






