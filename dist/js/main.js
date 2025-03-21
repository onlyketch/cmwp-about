document.addEventListener('DOMContentLoaded', function() {
 
    // Слайдер слов в Hero

    $('.hero__focus-words').slick({
        vertical: true,
        autoplay: true,
        autoplaySpeed: 2500,
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

    // Слайдер годов

    let controlsYearsButtonRight = document.querySelector('#controls-years > .slider-controls__right');
    let controlsYearsButtonLeft = document.querySelector('#controls-years > .slider-controls__left');

    $('.years-evetns__slider').slick({
        infinite: false, 
        slidesToShow: 3, 
        slidesToScroll: 1, 
        variableWidth: true,
        swipe: true, // 
        touchMove: true,
        draggable: true,
        centerMode: false,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        touchThreshold: 50,
        speed: 300,
        infinite: true
    });

    $('.years-evetns__slider').on('afterChange', function(event, slick, currentSlide){
        slick.$slideTrack.css('transform', `translate3d(${slick.swipeLeft}px, 0px, 0px)`);
    });

    controlsYearsButtonRight.addEventListener('click', function() {
        $('.years-evetns__slider').slick('slickNext');
    });

    controlsYearsButtonLeft.addEventListener('click', function() {
        $('.years-evetns__slider').slick('slickPrev');
    });

    let yearsEvetnsItems = document.querySelectorAll('.years-evetns__items-item');
    let yearsEvetnsSlides = document.querySelectorAll('.years-evetns__slider-slide');

    $('.years-evetns__slider').on('afterChange', function(event, slick, currentSlide) {
        let activeSlide = $('.years-evetns__slider .slick-current');
        let numSlide = activeSlide.data('slide');

        for (let item of yearsEvetnsItems) {
            if (item.classList.contains('show')) {
                item.classList.remove('show'); 
            }
        }

        for (let item of yearsEvetnsSlides) {
            if (item.classList.contains('active')) {
                item.classList.remove('active'); 
            }
        }

        $('.years-evetns__slider .slick-current').addClass('active');
        yearsEvetnsItems[numSlide].classList.add('show');
    });

     // Слайдер награды

    let controlsAwardsButtonRight = document.querySelector('#controls-awards > .slider-controls__right');
    let controlsAwardsButtonLeft = document.querySelector('#controls-awards > .slider-controls__left');

     $('.awards__slider').slick({
        infinite: false, 
        slidesToShow: 2, 
        slidesToScroll: 1, 
        variableWidth: true,
        swipe: true, // 
        touchMove: true,
        draggable: true,
        centerMode: false,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        touchThreshold: 50,
        speed: 150
    });

    controlsAwardsButtonRight.addEventListener('click', function() {
        $('.awards__slider').slick('slickNext');
    });

    controlsAwardsButtonLeft.addEventListener('click', function() {
        $('.awards__slider').slick('slickPrev');
    });

    $('.awards__tabs-tab').on('click', function() {
        let slideIndex = $(this).data('slide'); // Берём data-slide у таба
        $('.awards__slider').slick('slickGoTo', slideIndex); // Перемещаем слайдер
    });

    $('.awards__slider').on('afterChange', function(event, slick, currentSlide) {
        if (currentSlide == 0 || currentSlide == 5 || currentSlide == 8 || currentSlide == 12 || currentSlide == 14) {
            $('.awards__tabs-tab').removeClass('active'); // Убираем активный класс у всех табов
            $('.awards__tabs-tab[data-slide="'+ currentSlide +'"]').addClass('active'); // Добавляем активный класс текущему
            
        }
        
    });

      // Кликабельные карточки

      let qualityCardsClickable = document.querySelectorAll('.quality-card-clickable');

      for (let i = 0; i < qualityCardsClickable.length; i++) {
        qualityCardsClickable[i].addEventListener('click', function() {
            qualityCardsClickable[i].classList.toggle('active');
            //let shapes = qualityCardsClickable[i].querySelector('.quality-card__shapes');

        });
      }











});