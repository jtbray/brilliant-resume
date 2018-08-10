/*
* Template Name: Brilliant Resume
* Author: Jason Thomas Bray
* Author URL: https://jtbray.com
* Version: 1.0.0
*/

(function($) {
"use strict";
    // Portfolio subpage filters
    function portfolio_init() {
        var portfolio_grid = $('#portfolio_grid'),
            portfolio_filter = $('#portfolio_filters');
        if (portfolio_grid) {
            portfolio_grid.shuffle({
                speed: 450,
                itemSelector: 'figure'
            });
            $('.site-main-menu').on("click", "a", function (e) {
                portfolio_grid.shuffle('update');
            });
            portfolio_filter.on("click", ".filter", function (e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('#portfolio_filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group') );
            });
        }
    }

    // Contact form validator
    $(function () {
        $('.contact-form').validator();
    });
    // Hide Mobile menu
    function mobileMenuHide() {
        var windowWidth = $(window).width();
        if (windowWidth < 1024) {
            $('#site_header').addClass('mobile-menu-hide');
        }
    }
    // Animate page loader
    $(window).on('load', function() {
        $(".preloader").fadeOut("slow");
    });
    $(document).ready(function(){
        // Initialize Portfolio grid
        var $portfolio_container = $("#portfolio_grid");
        $portfolio_container.imagesLoaded(function () {
            setTimeout(function(){
                portfolio_init(this);
            }, 500);
        });
        // Portfolio hover effect init
        $(' #portfolio_grid > figure > a ').each( function() { $(this).hoverdir(); } );
        // Mobile menu
        $('.menu-toggle').click(function() {
            $('#site_header').toggleClass('mobile-menu-hide');
        });
        // Testimonials Slider
        var $testimonials = $(".testimonials.owl-carousel").owlCarousel({
            nav: true,
            items: 1,
            loop: true,
            navText: false,
            margin: 10,
        });
        // Reinit testimonials carousel on subpage change
        $('.site-main-menu').on("click", "a", function (e) {
           $testimonials.trigger('refresh.owl.carousel');
        });
         // Blog grid init
        setTimeout(function(){
            var $container = $(".blog-masonry");
            $container.masonry();
        }, 500);
        $('.site-main-menu').on("click", "a", function (e) {
            var $container = $(".blog-masonry");
            $container.masonry();
        });
        // Lightbox init
        $('.lightbox').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            image: {
                titleSrc: 'title'
            },
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                        '<div class="mfp-close"></div>'+
                        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
                      '</div>',
                patterns: {
                    youtube: {
                      index: 'youtube.com/',
                      id: 'v=',
                      src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                      index: 'vimeo.com/',
                      id: '/',
                      src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                      index: '//maps.google.',
                      src: '%id%&output=embed'
                    }
                },
                srcAction: 'iframe_src'
            },
            callbacks: {
                    markupParse: function(template, values, item) {
                     values.title = item.el.attr('title');
                    }
                }
        });
    });
    // Mobile menu hide
    $(window).on('resize', function() {
         mobileMenuHide();
    });
    // Mobile menu hide on main menu item click
    $('.site-main-menu').on("click", "a", function (e) {
        mobileMenuHide();
    });
    // Home header tracking text shadow (okshadow)
    $('#home-header').okshadow({
      color: '#333',
      textShadow: true,
      xMax: 5,
      yMax: 5,
      yOffset: 3
    });
    // Image Comparison for multiple profile images
    if($('.js-comparison-container')){
      var imageComparisonCollection = document.querySelectorAll('.js-comparison-container');
      for (var i = 0; i < imageComparisonCollection.length; i++) {
        var imageWidget = imageComparisonCollection[i];
        var images = imageWidget.querySelectorAll('.comparison-image');
        new ImageComparison({
          container: imageWidget,
          startPosition: imageWidget.getAttribute('data-start-position'),
          data: [
            {
              image: images[0]
            },
            {
              image: images[1]
            }
          ],
        });
      }
    }
})(jQuery);
