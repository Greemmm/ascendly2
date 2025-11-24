function changeContent(section) {
    // Get all necessary sections and elements
    const sections = document.querySelectorAll('.content-section');
    const carousel = document.querySelector('.carousel');
    const aboutUs = document.querySelector('.about-section');
    const body = document.body; // Target the body for background change

    // Hide carousel and About Us section if we're not on 'home'
    if (section !== 'home') {
        carousel.classList.remove('visible');
        aboutUs.classList.remove('visible');
    }

    // Hide all content sections and reset background colors
    sections.forEach(sec => {
        sec.classList.remove('visible');
        sec.style.backgroundColor = ''; // Reset background color of sections
    });

    // Show the selected section and change background
    const selectedSection = document.getElementById(section);
    if (selectedSection) {
        selectedSection.classList.add('visible');
        const bgColor = selectedSection.getAttribute('data-background'); // Get the background color
        if (bgColor) {
            body.style.backgroundColor = bgColor; // Apply the background color to body
        } else {
            body.style.backgroundColor = ''; // Reset background if no bg color is set
        }
    }

    // If the user clicks "Home," show carousel and About Us section again and reset background
    if (section === 'home') {
        carousel.classList.add('visible');
        aboutUs.classList.add('visible');
        body.style.backgroundColor = ''; // Reset background when returning to home
    }

    // Reset #info and #shop background when switching to different sections
    if (section !== 'info' && section !== 'shop') {
        const infoSection = document.getElementById('info');
        const shopSection = document.getElementById('shop');
        if (infoSection) {
            infoSection.style.backgroundColor = 'transparent'; // Reset background color of info
        }
        if (shopSection) {
            shopSection.style.backgroundColor = 'transparent'; // Reset background color of shop
        }
    }
}
