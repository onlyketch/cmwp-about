document.addEventListener('DOMContentLoaded', function() {
 
    // Слайдер слов в Hero

    $('.hero__focus-words').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        infinite: true,
        speed: 600,
        cssEase: 'linear'
    });

    // Видео

    let videoPlayBtn = document.querySelector('.cmwp-video__play-btn');
    let videoPauseBtn = document.querySelector('.cmwp-video__pause-btn');
    let video = document.getElementById('cmwp-video');

    videoPlayBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        videoPlayBtn.classList.add('play-hide');
        video.play();
    });

    video.addEventListener('click', function() {
        if (!video.paused) {
            video.pause();
            videoPauseBtn.classList.add('show');
        } else {
            video.play();
            if (!videoPlayBtn.classList.contains('play-hide')) {
                videoPlayBtn.classList.add('play-hide');
            }
            videoPauseBtn.classList.remove('show');
        }
    });







});