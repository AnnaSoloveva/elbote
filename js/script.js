jQuery(document).ready(function(){
     /*таблицы*/
    $('input[type=tel]').mask("+7(999) 999-99-99");
    $('.content table').stacktable();
    /*слайдеры*/
    if($('#banner').length){
        var banner = new Swiper('#banner .swiper-container', {
            pagination: '#banner .swiper-pagination',
            paginationClickable: true,
            spaceBetween: 0,
            autoplay: 2500,
            autoplayDisableOnInteraction: false
        });
    }
    var teamSwipers = {};
    if($('.team-slider').length){
        $('.team-slider').each(function(i){
            var name = $(this).attr("id");
            teamSwipers[name] = new Swiper($(this).children('.swiper-container'), {
                pagination: $(this).find('.swiper-pagination'),
                nextButton: $(this).find('.swiper-button-next'),
                prevButton: $(this).find('.swiper-button-prev'),
                slidesPerView: 5,
//                loopedSlides: $(this).children('.swiper-container .swiper-slide').length,
                loopAdditionalSlides:$(this).children('.swiper-container .swiper-slide').length,
                loopedSlides: $(this).children('.swiper-container .swiper-slide').length,
                loop: true,
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 0,
                breakpoints: {
                    992: {
                        slidesPerView: 3
                    },
                    767: {
                        slidesPerView: 1
                    }
                }
            });
            if(i>0){$(this).hide();}
        })

    }
    if ($('#partners').length){
        var partners = new Swiper('#partners .swiper-container', {
            nextButton: '#partners .swiper-button-next',
            prevButton: '#partners .swiper-button-prev',
            slidesPerView: 5,
            slidesPerColumn: 4,
            spaceBetween: 30,
            breakpoints: {
                767:{slidesPerView: 1},
                992: {slidesPerView: 3}
            }
        });
    }
    if($(".gallery-slider").length){
        var galleryTop = new Swiper('.gallery-slider .gallery-top', {
            nextButton: '.gallery-slider .swiper-button-next',
            prevButton: '.gallery-slider .swiper-button-prev',
            spaceBetween: 0,
            centeredSlides: true,
            loopedSlides: $('.gallery-slider .swiper-wrapper .swiper-slide').length,
            loop:true
        });
        var galleryThumbs = new Swiper('.gallery-slider .gallery-thumbs', {
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            slidesPerView: 3,
            touchRatio: 0.2,
            loopedSlides: $('.gallery-slider .swiper-wrapper .swiper-slide').length,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    }
    var advantages = undefined;
    function ActiveSliderPhone() {
        var screenWidth = $(window).width();
        if ($(".advantages-block").length){
            if(screenWidth < 768 && advantages == undefined) {
                advantages = new Swiper('.advantages-block .swiper-container', {
                    nextButton: '.advantages-block .swiper-button-next',
                    prevButton: '.advantages-block .swiper-button-prev',
                    spaceBetween: 0,
                    autoplay: 2500,
                    autoplayDisableOnInteraction: false
                });
            } else if (screenWidth > 767 && advantages != undefined) {
                advantages.destroy();
                advantages = undefined;
                $('.advantages-block .swiper-wrapper').removeAttr('style');
                $('.advantages-block .swiper-slide').removeAttr('style');
            }
        }
    }
    var articles = [];
    function ActiveArticlesSlider() {
        var screenWidth = $(window).width();
        if ($('.articles-block .slider').length){
            if(screenWidth < 992 && articles.length == 0) {
                $('.articles-block .slider').each(function(i){
                    articles[i] = new Swiper($(this).children('.swiper-container'), {
                        nextButton: $(this).children('.swiper-button-next'),
                        prevButton: $(this).children('.swiper-button-prev'),
                        spaceBetween: 30
                    })
                });
            }
            else if (screenWidth > 991 && articles.length != 0) {
                if(Array.isArray(articles)){
                    for(i=0; i<articles.length; i++){
                        articles[i].destroy();
                    }
                    articles == [];
                }
                $('.articles-block .swiper-wrapper').each(function(){$(this).removeAttr('style');});
                $('.articles-block .swiper-container').each(function(){$(this).removeAttr('style');});
                $('.articles-block .swiper-slide').each(function(){$(this).removeAttr('style');});
            }
        }
    }
    ActiveSliderPhone();
    ActiveArticlesSlider();
    $(window).on('resize', function(){
        ActiveSliderPhone();
        ActiveArticlesSlider();
    });

    /*кнопка вверх*/
    if ($(window).scrollTop()!=0){$('#toTop').fadeIn();}
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        }
        else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });

    /*вывод категории специалистов*/
    $(".category select").bind("change", function(){
        var category = $('.category select').val();
        if($('#' + category +'.team-wrapper').length ){
            $('.team-wrapper').removeClass("open");
            $('#' + category).addClass("open");
        };
        if($('.team-slider'.length)){
            $('.team-slider').hide();
            $('#' + category).show();
            teamSwipers[category].update();
        }
    })

    /*выпадашка меню*/
    $('#mainMenu .bottom .dropdown').bind('mouseenter', function(){
        if ($(window).width() > 991){
            $('#mainMenu .bottom .dropdown').removeClass("open");
            $('#mainMenu .bottom .dropdown .glyphicon').attr('aria-expanded', 'false');
            $(this).children('.glyphicon').attr('aria-expanded', 'true');
            $(this).addClass('open');
        }
    })
    function hide(){
        $('#mainMenu .bottom .dropdown').removeClass("open");
        $('#mainMenu .bottom .dropdown .glyphicon').attr('aria-expanded', 'false');
    }
    $('.dropdown-menu').bind('mouseleave', function(){
        if ($(window).width() > 991){ hide(); }
    })
    $('#mainMenu .top').bind('mouseenter', function(){
        if ($(window).width() > 991){ hide(); }
    })
    /*lightgallery*/
    $(".certificate-wrapper").lightGallery({
        hash: false,
        thumbnail: false,
        download: true,
        selector: 'a[href$=".png"], a[href$=".jpg"], a[href$=".gif"], a[href$=".jpeg"]'
    });


    $('header .btn').bind('click', function(){
        console.log('click');
        $('#ModalOk').modal('show')
    })

})
