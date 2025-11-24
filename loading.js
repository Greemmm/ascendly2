const text = "Every scent tells a story, and every moment smells like home.";
const infoContent = document.getElementById('info-content');
let index = 0;

function typeText() {
  if (index < text.length) {
    // Add the current character to the content
    infoContent.textContent += text[index];
    index++;
    
    // Schedule the next character to appear
    setTimeout(typeText, 100); // 100ms delay between characters
  }
}

// Start the typing animation
typeText();
