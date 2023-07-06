const slides = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide) => {
            slide.style.display = 'none';
    });
    slides[slideIndex].style.display = 'block';
}
   
function prevSlide() {
    currentSlide --;
    if (currentSlide <= 0) {
        currentSlide = 0;
    }
    
    showSlide(currentSlide);

    if (currentSlide === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }
    nextButton.style.display = 'block';
}

function nextSlide() {
        currentSlide ++;
        if (currentSlide >= slides.length) {
            currentSlide = slides.length - 1;
        }
        showSlide(currentSlide);

        if (currentSlide === slides.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
        prevButton.style.display = 'block';
}
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);


showSlide(currentSlide);
prevButton.style.display = 'none';