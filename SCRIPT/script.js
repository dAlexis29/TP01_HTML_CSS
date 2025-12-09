const images = document.querySelector('.carousel-images');
const imgCount = document.querySelectorAll('.carousel-images img').length;

let index = 0;

document.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % imgCount;
    updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + imgCount) % imgCount;
    updateCarousel();
});

function updateCarousel() {
    images.style.transform = `translateX(${-index * 100}%)`;
}
