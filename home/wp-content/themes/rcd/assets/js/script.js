jQuery(document).ready(function() {

    // Checking window width
    var ww = jQuery(window).width();

    // Sliders
    jQuery('.rcd-home-discover-work__single-slider__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    jQuery('.rcd-home-discover-work__multi-slider__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: $('.prev-red'),
        nextArrow: $('.next-red')
    });

    // What we do page single slider
    jQuery('.rcd-what-we-do-services__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.services-prev-red'),
        nextArrow: $('.services-next-red')
    });

    // What we do pagination slider
    jQuery('.rcd-what-we-do-proofing__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: false,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000
    });

    // Philosophy page slider
    jQuery('.rcd-philosophy-teams__multi-slider__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: $('.prev-red'),
        nextArrow: $('.next-red')
    });

    // What we do page slider
    jQuery('.rcd-archieve-discover-work__multi-slider__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        adaptiveHeight: true,
        prevArrow: $('.prev-red'),
        nextArrow: $('.next-red')
    });

    // Philosophy page pagination slider
    jQuery('.rcd-philosophy-teams__pagination-slider__slides').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: false,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }]
    });

    // check to see if there are one or less slides
    if (!(jQuery('.rcd-home-discover-work__multi-slider__slide-item, .rcd-archieve-discover-work__multi-slider__slide-item, .rcd-philosophy-teams__multi-slider__slide-item').length > 3)) {
        jQuery('.paginator-red-center').hide();
    }

    if (jQuery('.timeline').length) {
        const slider = document.querySelector('.timeline ol');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3; //scroll-fast
            slider.scrollLeft = scrollLeft - walk;
            console.log(walk);
        });
    }

    // Unwrap container from philosophy teams section
    if (ww <= 767) {
        jQuery('.container').children('.rcd-philosophy-teams__grid').unwrap();

        // Remove breakpoints from mobile
        jQuery('p').find('br').remove();
    }

    // Accordion
    jQuery('.acc-blk').each(function() {
        jQuery(this).children('.acc-blk__head').click(function() {
            jQuery(this).parent().addClass("open").siblings().removeClass("open");
        });
    });

    // Initialize typing effect
    var string = "";
    var splitArr = "";

    if (jQuery('.home').length) {
        var typeText = jQuery('.type-hidden').text();
        var splitArr = typeText.split(',');
        string = jQuery.makeArray(splitArr);
    }
    if (jQuery('.page-template-what-we-do').length) {
        var typeText = jQuery('.type-hidden').text();
        var splitArr = typeText.split(',');
        string = jQuery.makeArray(splitArr);
        //string = ['','Experience','Value','Wayfinding','Multi-sensory','Brands'];
    }

    var options = {
        strings: string,
        typeSpeed: 120,
        backSpeed: 120,
        backDelay: 0,
        loop: true,
        showCursor: false
    };

    var typed = new Typed('.typed', options);

    // Home page text animation
    jQuery(".rcd-home-intro__txt-label-list li:first-child").addClass("active");
    setTimeout(autoAddClass, 2000);

    // Mobile block exchange
    if (ww <= 767) {
        jQuery('.rcd-what-we-do-proofing__rotate-container').insertAfter('.rcd-home-discover-work.what-we-do-section').wrap('<section class="rcd-what-we-do-proofing mobile"></section>');
        jQuery('.rcd-what-we-do-proofing__bg-rect-shape').appendTo('.rcd-what-we-do-proofing.mobile');
    }

});

jQuery(window).on('load', function() {

    var ww = jQuery(window).width();

    if (ww >= 767) {
        // Initalizing parallax
        lax.setup() // init

        const updateLax = () => {
            lax.update(window.scrollY)
            window.requestAnimationFrame(updateLax)
        }

        window.requestAnimationFrame(updateLax)
    } else {
        jQuery('.lax').css('transform', 'none');
    }

    // Our team modal
    jQuery('.rcd-philosophy-teams__multi-slider__slide-item').each(function() {
        jQuery(this).click(function() {
            var imgSrc = jQuery(this).find('img').attr('src');
            var tname = jQuery(this).find('.t-name').text();
            var tpos = jQuery(this).find('.t-position').text();
            var tdesc = jQuery(this).find('.t-desc').text();
            var tlink = jQuery(this).find('.t-link').attr('href');
            var lw = jQuery(this).find('.t-link').length;

            jQuery('.modal-team__img').css('background-image', 'url(' + imgSrc + ')');
            jQuery('.mod-name').html(tname);
            jQuery('.mod-pos').html(tpos);
            jQuery('.mod-desc').html(tdesc);
            jQuery('.mod-link').attr('href', tlink);
            jQuery('.modal-team').fadeIn('slow');

            if (lw == 0) {
                jQuery('.mod-link').hide();
            } else {
                jQuery('.mod-link').show();
            }

        });
        jQuery('.modal-team-close').click(function() {
            jQuery('.modal-team').fadeOut('slow');
        });

        if (ww <= 767) {
            jQuery('.modal-team-close').appendTo('.modal-team__img');
        }
    });

    // Knowledge Center page filter
    var url = window.location.href.slice(window.location.href.indexOf('#') + 1).split('#');
    jQuery('.rcd-knowledge-center-filteration__filter-category').each(function() {
        jQuery(this).children('a').click(function() {
            jQuery(this).parent().addClass('selected').siblings().removeClass('selected');

            var dataCat = jQuery(this).parent().attr('data-cat');
            jQuery('.rcd-knowledge-center-filteration__filter-card').fadeOut('fast');
            jQuery('.rcd-knowledge-center-filteration__filter-card.' + dataCat).fadeIn('slow');
            if (dataCat == 'all') {
                jQuery('.rcd-knowledge-center-filteration__filter-card').fadeIn('slow');
            }
        });
    });

    if (url == 'all' || (window.location.href.indexOf('#') < 0)) {
        jQuery('.rcd-knowledge-center-filteration__filter-card').fadeIn('slow');
    } else {
        jQuery('.rcd-knowledge-center-filteration__filter-card').fadeOut();
        jQuery('.rcd-knowledge-center-filteration__filter-card.' + url).fadeIn('slow');
    }

    jQuery('.rcd-knowledge-center-filteration__filter-category').each(function() {
        var headerCat = jQuery(this).attr('data-cat');
        if (headerCat == url) {
            jQuery(this).addClass('selected').siblings().removeClass('selected');
        }
    });

    // Knowledge center clickable element
    jQuery(".rcd-knowledge-center-filteration__filter-card").each(function() {
        var href = jQuery(this).attr('data-href');
        jQuery(this).wrapInner('<a class="itm-link" target="_self"></a>');
        jQuery(this).children('a').attr('href', href);
    });

    // Lazy load
    //jQuery('.rcd-knowledge-center-filteration__filter-card:nth-child(4)').nextAll().find('img').addClass('lazy');
    jQuery(window).scroll(function() {
        jQuery('.lazy').each(function(i) {

            var bottom_of_element = jQuery(this).offset().top + jQuery(this).outerHeight();
            var bottom_of_window = jQuery(window).scrollTop() + jQuery(window).height();

            if (bottom_of_window > bottom_of_element) {
                jQuery(this).animate({
                    'opacity': '1'
                }, 1000);
            }

        });
    });

    // Menu toggle function
    jQuery('.rcd-header__burger-menu img').click(function() {
        jQuery('.rcd-open-menu').addClass('is-active');
    });
    jQuery('.rcd-open-menu__close').click(function() {
        jQuery('.rcd-open-menu').removeClass('is-active');
    });

});

//  Functions //
// Home page animations
function autoAddClass() {
    var next = jQuery(".active").removeClass("active").next();
    if (next.length)
        jQuery(next).addClass('active');
    else
        jQuery('.rcd-home-intro__txt-label-list li:first-child').addClass('active');
    setTimeout(autoAddClass, 2000);
}

// Video play function
var vid = document.getElementById("video-blk");

function playVideo() {
    vid.play();
    jQuery('.video-play').fadeOut();
    jQuery(vid).on("ended", function(e) {
        jQuery('.video-play').fadeIn();
    });
    jQuery(vid).on("click", function(e) {
        vid.pause();
        jQuery('.video-play').fadeIn();
    });
}