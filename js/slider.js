// Slideshow functionality for the home page banner

let slideIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    showSlides();
    
    // Add event listeners for prev/next buttons
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    if (prevButton) prevButton.addEventListener('click', () => plusSlides(-1));
    if (nextButton) nextButton.addEventListener('click', () => plusSlides(1));
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    
    if (!slides.length) return;
    
    if (n === undefined) {
        slideIndex++;
    }
    
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";
    
    if (n === undefined) {
        setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
}