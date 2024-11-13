let currentIndex = 0;

function moveCarousel(direction) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const itemsVisible = 4;

  currentIndex += direction;

  // Control de límites
  if (currentIndex < 0) {
    currentIndex = totalItems / itemsVisible - 1;
  } else if (currentIndex > totalItems / itemsVisible - 1) {
    currentIndex = 0;
  }

  const offset = -(currentIndex * 100);
  carousel.style.transform = `translateX(${offset}%)`;
}
