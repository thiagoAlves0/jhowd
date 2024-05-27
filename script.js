window.onload = function() {
    function adjustSpotifyPlayer() {
        var spotifyPlayer = document.querySelector('.spotify-player iframe');
        if (window.innerWidth <= 768) {
            if (spotifyPlayer) {
                spotifyPlayer.setAttribute('width', '100%');
                spotifyPlayer.setAttribute('height', '400px');
            }
        } else {
            if (spotifyPlayer) {
                spotifyPlayer.setAttribute('width', '100%');
                spotifyPlayer.setAttribute('height', '352px');
            }
        }
    }

    adjustSpotifyPlayer();
    window.addEventListener('resize', adjustSpotifyPlayer);

    var slideIndex = 0;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var slideInterval;

    function showSlides(n) {
        if (n >= slides.length) {
            slideIndex = 0;
        } else if (n < 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex = n;
        }

        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active-slide');
        }

        for (var i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }

        slides[slideIndex].classList.add('active-slide');
        dots[slideIndex].classList.add('active');
    }

    function plusSlides(n) {
        showSlides(slideIndex + n);
        resetSlideInterval();
    }

    function currentSlide(n) {
        showSlides(n);
        resetSlideInterval();
    }

    function startSlideInterval() {
        slideInterval = setInterval(function() {
            plusSlides(1);
        }, 5000);
    }

    function resetSlideInterval() {
        clearInterval(slideInterval);
        startSlideInterval();
    }

    showSlides(slideIndex);
    startSlideInterval();

    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            var dotIndex = Array.prototype.indexOf.call(dots, this);
            currentSlide(dotIndex);
        });
    }
};
document.getElementById('contact-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const email = 'eujhowd@gmail.com';
    const subject = 'Contato sobre contratação';
    const body = 'Olá, gostaria de discutir a possibilidade de contratação.';
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
});