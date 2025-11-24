// JavaScript to handle the scroll to the CoffeeTea Journey section
document.getElementById('HomeBtn').addEventListener('click', function() {
    const homeSection = document.getElementById('home');
    homeSection.scrollIntoView({ behavior: 'smooth' });
});