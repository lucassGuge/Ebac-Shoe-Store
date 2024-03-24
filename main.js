$(document).ready(function(){
    let currentIndex = 0;
    const slides = $(".slide");
    const totalSlides = slides.length;

    function showSlide(index) {

        slides.hide();

        slides.eq(index).show();
    }

    function nextSlide(){
        currentIndex = (currentIndex +1 ) % totalSlides;
        showSlide(currentIndex);
    }

    showSlide(currentIndex);

    setInterval(nextSlide, 5000);
});
