document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.addEventListener('click', function() {
        navigation.classList.toggle('active');
    });
});


    // JavaScript for the first slideshow
        var slideIndex1 = 0;
        showSlides(1);

        // JavaScript for the second slideshow
        var slideIndex2 = 0;
        showSlides(2);

        function showSlides(slideshowNumber) {
            var i;
            var slides = document.querySelectorAll("#slideshow-container-" + slideshowNumber + " .slide");

            // Hide all slides
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            // Move to the next slide
            if (slideshowNumber === 1) {
                slideIndex1++;
                if (slideIndex1 > slides.length) {
                    slideIndex1 = 1;
                }
                slides[slideIndex1 - 1].style.display = "block";
                setTimeout(function () { showSlides(1); }, 3000); // Adjust as needed
            } else if (slideshowNumber === 2) {
                slideIndex2++;
                if (slideIndex2 > slides.length) {
                    slideIndex2 = 1;
                }
                slides[slideIndex2 - 1].style.display = "block";
                setTimeout(function () { showSlides(2); }, 3000); // Adjust as needed
            }
        }
        
       ffunction playPause() {
        var video = document.querySelector('video');
        if (video.paused)
            video.play();
        else
            video.pause();
    }
