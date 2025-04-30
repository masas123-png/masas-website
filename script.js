// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Add your JavaScript functionality here

    // Example:  Change the hero section background on button click
    const ctaButton = document.querySelector('.cta-button');
    const heroSection = document.querySelector('.hero-section');

    if (ctaButton && heroSection) { // Check if elements exist
        ctaButton.addEventListener('click', () => {
            heroSection.style.backgroundColor = '#f0f0f0'; // Change to a light gray
            heroSection.style.transition = 'background-color 0.5s ease'; // Add smooth transition
        });
    }


    // Example:  Dynamically change the product card titles.
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach((card, index) => {
        const titleElement = card.querySelector('h3');
        if (titleElement) {
            // Change titles
            if (index % 2 === 0) {
                titleElement.textContent = "Special Offer Product";
            } else {
                titleElement.textContent = "Featured Item";
            }
        }
    });
});

