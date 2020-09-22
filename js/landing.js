$(function () {
    'use strict';

    $('.line').css('zIndex', '1')

    $('.ls-light .image-wrapper').each(function () {

        $(this).append('<img class="back-shad" src="images/light-shad.png">')

    });

    $('.ls-dark .image-wrapper').each(function () {

        $(this).append('<img class="back-shad" src="images/dark-shad.png">')

    });

    $('.select-but').on('click', function () {

        var willGo = $(this).parent('.landing-select');

        window.willGo = willGo


        if (willGo.hasClass('lsc-dark')) {


            $('body').addClass('layout-dark')

        } else if (willGo.hasClass('lsc-light')) {

        }





    });

    $(window).on('load', function () {

        /* Sectıon */
        $('.section').each(function () {

            var section = $(this);

            var secBg = section.data('background');

            if (secBg != null) {

                section.addClass('has-bg');

                section.prepend('<div class="section-bg-ovs"><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span></div>');

                var secBgOvs = section.find('.section-bg-ovs');

                var secBgOv = section.find('.sec-bg-ov');

                secBgOv.css('backgroundColor', secBg);

            }

        });
        /* Sectıon */

    })

    ////////// Page Transitions Start //////////

    var options = {
            blacklist: '.has-children a',
            prefetch: true,
            cacheLength: 0,
            onStart: {
                duration: 1000, // Duration of our animation
                render: function ($container) {
                    // Add your CSS animation reversing class


                    if ($('.landing-select').length > 0) {

                        if (willGo.hasClass('lsc-dark')) {


                            $('.lsc-ovs').addClass('dark-in');

                        } else if (willGo.hasClass('lsc-light')) {
                            $('.lsc-ovs').addClass('light-in');
                        }

                        setTimeout(function () {
                            $('.landing-select').addClass('ls-out');
                        }, 500);


                    } else if ($('.ls-dark').length > 0) {

                        $('.overlay').addClass('ls-light-go')



                    } else if ($('.ls-light').length > 0) {

                        $('.overlay').addClass('ls-dark-go')



                    };;




                    // Restart your animation
                    smoothState.restartCSSAnimations();
                }
            },
            onReady: {
                duration: 0,
                render: function ($container, $newContent) {


                    // Inject the new content
                    $container.html($newContent);

                    $(document).ready(function () {

                        /* Sectıon */
                        $('.section').each(function () {

                            var section = $(this);

                            var secBg = section.data('background');

                            if (secBg != null) {

                                section.addClass('has-bg');

                                section.prepend('<div class="section-bg-ovs"><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span><span class="sec-bg-ov"></span></div>');

                                var secBgOvs = section.find('.section-bg-ovs');

                                var secBgOv = section.find('.sec-bg-ov');

                                secBgOv.css('backgroundColor', secBg);

                            }

                        });
                        /* Sectıon */



                        ///////////////////////////////////////////// Scroll Animations /////////////////////////////////////////////
                        if ($('.has-animation').length > 0) {
                            $('.has-animation').each(function () {
                                $(this).attr('data-scroll', 'true');

                                var haDelay = $(this).data('delay') + 's'
                                var haDuration = $(this).data('duration') + 's'

                                $(this).css({
                                    transitionDelay: haDelay,
                                    transitionDuration: haDuration

                                })
                            });


                            $('.lines-up, .lines-down, .lines-fade-up, .lines-fade-down').each(function () {

                                $(this).splitLines({
                                    tag: '<div><span class="split-line"></div>',
                                    keepHtml: true,
                                });

                                var splitLines = $(this).find('.split-line');

                                splitLines.each(function (i) {

                                    var delay = i / 7.5;

                                    var splitParent = $(this).parents('.has-animation');
                                    var baseDelay = splitParent.data('delay');

                                    if (baseDelay == null) {

                                        var finalDelay = delay + 's'

                                    } else {

                                        var finalDelay = baseDelay + delay + 's'
                                    };


                                    $(this).css({
                                        transitionDelay: finalDelay

                                    })


                                })

                            });

                        };
                        ///////////////////////////////////////////// Scroll Animations /////////////////////////////////////////////


                        $('.ls-light .image-wrapper').each(function () {

                            $(this).append('<img class="back-shad" src="images/light-shad.png">')

                        });

                        $('.ls-dark .image-wrapper').each(function () {

                            $(this).append('<img class="back-shad" src="images/dark-shad.png">')

                        });

                    });
                }
            },

            onAfter: function ($container, $newContent) {


                        if ($('.ls-dark').length > 0) {

                            $('body').removeClass('layout-light')
                            $('body').addClass('layout-dark')



                        } else if ($('.ls-light').length > 0) {

                            $('body').removeClass('layout-dark')
                            $('body').addClass('layout-light')



                        }
                
                

                setTimeout(function(){
                          $('.overlay').removeClass('ls-light-go');
                $('.overlay').removeClass('ls-dark-go');
                    
                }, 100)
          

                var peScroll = new LocomotiveScroll({
                    el: document.querySelector('#main'),
                    smooth: false,

                });

                window.peScroll = peScroll;





            }


        },
        smoothState = $('#main').smoothState(options).data('smoothState');


    $('.site-navigation a').not('.no-trans').click(function (e) {
        e.preventDefault();
        var content = $('#main').smoothState().data('smoothState');
        var href = $(this).attr('href');
        content.load(href);
    });


});
