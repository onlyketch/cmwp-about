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
        infinite: true,
        asNavFor: '.years-evetns__items',
        focusOnSelect: true
    });

    $('.years-evetns__items').slick({
        slidesToShow: 1,
        asNavFor: '.years-evetns__slider',
        arrows: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        accessibility: false,
        speed: 1000
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

        for (let item of yearsEvetnsSlides) {
            if (item.classList.contains('active')) {
                item.classList.remove('active'); 
            }
        }

        $('.years-evetns__slider .slick-current').addClass('active');
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
        speed: 500
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

    $('.awards__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if ([0, 5, 8, 12, 14].includes(nextSlide)) {
            $('.awards__tabs-tab').removeClass('active');
            $('.awards__tabs-tab[data-slide="'+ nextSlide +'"]').addClass('active');
        }
    });

    // Кликабельные карточки

      let qualityCardsClickable = document.querySelectorAll('.quality-card-clickable');

      for (let i = 0; i < qualityCardsClickable.length; i++) {
        qualityCardsClickable[i].addEventListener('click', function() {
            qualityCardsClickable[i].classList.toggle('active');
        });
      }


    // Меню мобильное

    if (document.querySelector('.page-nav') !== null) {
        let pageNav = document.querySelector('.page-nav');
        let pageNavButton = document.querySelector('.page-nav__button');
        let pageNavLinks = document.querySelectorAll('.page-nav__links-link');

        pageNavButton.addEventListener('click', function() {
            pageNav.classList.toggle('open');
        });

        for (let i = 0; i < pageNavLinks.length; i++) {
            pageNavLinks[i].addEventListener('click', function() {
                if (window.innerWidth <= 767) {
                    if (pageNav.classList.contains('open')) {
                        pageNav.classList.remove('open');
                    }
    
                    // Преобразуем NodeList в массив
                    let linksArray = Array.from(pageNavLinks);
    
                    // Найдём индекс кликнутого элемента
                    let clickedIndex = linksArray.indexOf(this);
    
                    if (clickedIndex > -1) {
                        // Удаляем элемент из его текущей позиции
                        let clickedElement = linksArray.splice(clickedIndex, 1)[0];
                
                        // Добавляем его в начало массива
                        linksArray.unshift(clickedElement);
    
                        // Переставляем элементы в DOM
                        let parent = this.parentElement; // Предполагаем, что все ссылки внутри одного родителя
                        linksArray.forEach(link => parent.appendChild(link));
                    }
                }
            });
        }
    }

    // Мобильные слайдеры

















});