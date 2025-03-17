let slideIndex = 0;

// Function to show the current slide
function showSlide(n) {
    let slides = document.getElementsByClassName("slides");
    if (n >= slides.length) {
        slideIndex = 0;  // Reset to the first slide
    } else if (n < 0) {
        slideIndex = slides.length - 1;  // Go to the last slide if going backward
    } else {
        slideIndex = n;  // Update slide index to current one
    }

    // Hide all images
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  // Hide all slides
    }

    // Display the current image
    slides[slideIndex].style.display = "block";  // Show current slide
}

// Function to change slides manually
function changeSlide(n) {
    showSlide(slideIndex + n);  // Increment or decrement the slide index
}

// Initialize the first slide
showSlide(slideIndex);

// Auto-slide every 6 seconds
setInterval(() => changeSlide(1), 6000);  // Change slide every 6 seconds
