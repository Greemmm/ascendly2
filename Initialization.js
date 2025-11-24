document.addEventListener('DOMContentLoaded', () => {
    // Select the carousel and about section elements
    const carousel = document.querySelector('.carousel');
    const aboutUs = document.querySelector('.about-section');
    const body = document.body;

    // Set the background color for "Home"
    const homeBackgroundColor = "#ffffff"; // Replace with your desired default color
    body.style.backgroundColor = homeBackgroundColor;

    // Make carousel and about-section visible
    if (carousel) {
        carousel.classList.add('visible');
    }

    if (aboutUs) {
        aboutUs.classList.add('visible');
    }
});
