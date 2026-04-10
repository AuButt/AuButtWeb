const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const nextBtn = document.querySelector('.arrow.right');
const prevBtn = document.querySelector('.arrow.left');

let index = 0;

function updateCarousel() {
    const width = images[0].clientWidth;
    track.style.transform = `translateX(-${index * width}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);