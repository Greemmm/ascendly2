// JavaScript to handle the scroll to the CoffeeTea Journey section
document.getElementById('learnMoreBtn2').addEventListener('click', function() {
    const shopSection = document.getElementById('shop');
    shopSection.scrollIntoView({ behavior: 'smooth' });
});