$(document).ready(function () {

    //portfolio filtering
    $('.fil-cat').click(function () {
        var filter = $(this).attr("data-rel");
        if (filter == 'all') {
            $('#portfolioFilter div.tile.scale-anm').fadeIn(300).removeClass('hidden');
        } else {
            $('#portfolioFilter div.tile.scale-anm').each(function () {
                if (!$(this).hasClass(filter)) {
                    $(this).fadeOut(300).addClass('hidden');
                } else {
                    $(this).fadeIn(300).removeClass('hidden');
                }
            });
        }
    });



    //removing two y scroll on modal
    $(".portfolio-link").click(function () {
        $('html,body').toggleClass("no-scroll", true);
        //for mozzila...modal without sticky won't work
        $('nav').toggleClass("forMozz", true);
    });
    $(".close-modal").click(function () {
        $('html,body').toggleClass("no-scroll", false);
        $('nav').toggleClass("forMozz", false);
    });

    $("span.typer").typed({
        strings: ["HTML(5), CSS(3)", "jQuery, JavaScript", "PHP & (My)SQL"],
        typeSpeed: 50, // typing speed
        backDelay: 500, // pause before backspacing
        callback: function () {
            $(this)
        }
    });


    /*for the sticky navigation*/

    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
    });



    /*scroll on buttons*/

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-contact').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-about').offset().top
        }, 1000);
    });


    /*NAVIGATION SCROLL*/
    $(function () {
        //js-scroll class remove conflict with modal links
        $('a.js-scroll[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    /*animations on scroll */
    $('.js--wp-1').waypoint(function () {
        $('.js--wp-1').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });


    $('.js--wp-2').waypoint(function () {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    $('.js--wp-3').waypoint(function () {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function () {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /*mobile navigation*/

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });


});






/* ---- particles.js config 

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 380,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
        
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
---- */