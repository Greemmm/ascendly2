// JavaScript to handle the scroll to the CoffeeTea Journey section
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    const infoSection = document.getElementById('info');
    infoSection.scrollIntoView({ behavior: 'smooth' });
});