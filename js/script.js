// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    // --- Footer Date Logic ---
    const yearElement = document.getElementById('footer-year');
    const dateElement = document.getElementById('footer-date');
    
    // Set a static year and last updated date, checking if elements exist first
    if (yearElement) {
        yearElement.textContent = '2025';
    }
    if (dateElement) {
        dateElement.textContent = 'August 18, 2025';
    }


    // --- Testimonial Carousel Logic ---
    const slider = document.getElementById('testimonial-slider');
    if (slider) {
        const slides = slider.children.length;
        // Ensure there are slides before starting the carousel
        if (slides > 0) {
            let currentIndex = 0;

            setInterval(() => {
                currentIndex = (currentIndex + 1) % slides;
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
            }, 5000); // Change slide every 5 seconds
        }
    }
});
