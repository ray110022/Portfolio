$(document).ready(function () {

    //  venobox
    $('.venobox').venobox({
        spinColor: '#4dc97d',
        spinner: 'wave',
        arrowsColor:'#333',
        closeBackground: 'transparent',
        overlayClose: true,
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var aboutPos = $('#about').offset().top;


        //  skill滾動事件
        $('.skill').each(function () {
            var skillPos = $(this).offset().top;
            if ((scrollPos + windowHeight * .8) >= skillPos) {
                $(this).addClass('show');
            }
        });

        //  card滾動事件
        $('.card').each(function () {
            var skillPos = $(this).offset().top;
            if ((scrollPos + windowHeight * .6) >= skillPos) {
                $(this).addClass('show');
            }
        });

        //  portfolio-wrapper滾動事件
        $('.portfolio-wrapper').each(function () {
            var skillPos = $(this).offset().top;
            if ((scrollPos + windowHeight * .6) >= skillPos) {
                $(this).addClass('show');
            }
        });

        //  contact滾動事件
        $('.contact-wrapper').each(function () {
            var skillPos = $(this).offset().top;
            if ((scrollPos + windowHeight * .6) >= skillPos) {
                $(this).addClass('show');
            }
        });



        // navbar事件
        $('#navbar').each(function () {
            if ((scrollPos + windowHeight / 2) >= aboutPos) {
                $(this).css('background', '#f5f5f5f5');
                $('.nav-item').removeClass('top').addClass('scroll');
            } else {
                $(this).css('background', 'transparent');
                $('.nav-item').removeClass('scroll').addClass('top');
            }
        });

        //  nav-link 滾動至指定位置時active
        $('.nav-link').each(function () {
            var target = $(this).attr('href');
            var targetPos = $(target).offset().top;
            var targetHeight = $(target).outerHeight();
            if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });


    //  nav-link 點擊滾動至指定位置
    $('.nav-link').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        $('html, body').animate({
            scrollTop: targetPos
        }, 500);
    });


    //   slidemenu 開
    $('#navbar button').click(function () {
        $('body').addClass('active');
    });

    //   slidemenu 關
    $('aside button').click(function () {
        $('body').toggleClass('active');
    });
    $('aside a').click(function (e) {
        e.preventDefault();
        $('body').toggleClass('active');
    });

    // 作品button切換
    $('#js-filters-awesome-work button').click(function () {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    });



    // 作品content 切換
    $('#portfolio-nav button').click(function () {
        var target = $(this).attr('id');

        $('.portfolio-wrap').each(function () {
            var targetContent = $(this).data('portfolio');
            if (target == targetContent) {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            }
        });
    });

    // 作品 item 效果
    $('.portfolio-item').mouseenter(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active')
    });
    $('.portfolio-item').mouseleave(function () {
        $(this).removeClass('active');
    });

    // 作品 item 效果  -----------測試
    $('.grid-item').mouseenter(function () {
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active')
    });
    $('.grid-item').mouseleave(function () {
        $(this).removeClass('active');
    });

});
