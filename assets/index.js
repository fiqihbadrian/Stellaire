let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    const slider = document.querySelector('.slides');
    currentSlide = (index + totalSlides) % totalSlides; // Mencegah nilai negatif
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

/* Fungsi untuk berpindah slide ketika tombol diklik */
function moveSlide(n) {
    console.log("Tombol diklik"); // Cek apakah tombol berfungsi
    showSlide(currentSlide + n);
}

/* Slide otomatis berganti setiap 5 detik */
setInterval(() => {
    moveSlide(1);
}, 5000);


const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('nav-active');
      hamburger.classList.toggle('toggle');
    });