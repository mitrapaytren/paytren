/**
 *  Greedly- v1.0.0 - Main JavaScript file
 */

/* greedly theme javascripts module */
var greedly = (function($) {

    'use strict';
    var _owlCarousel = function() {
            $(".post-loop").owlCarousel({
                loop: true,
                dots: false,
                nav: true,
                navSpeed:500,
                navClass: ['button-slider button-prev', 'button-slider button-next'],
                navText: [
                      "<i class='icon-angle-left'></i>",
                      "<i class='icon-angle-right'></i>"
                      ],
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items : 1,
                
            });
        },
        _bookSlider = function() {
            $(".book-carousel").owlCarousel({
                loop: true,
                nav: true,
                dots: false,
                margin: 30,
                navSpeed:500,
                navClass: ['nav-slider nav-prev', 'nav-slider nav-next'],
                navText: [
                      "<i class='icon-angle-left'></i>",
                      "<i class='icon-angle-right'></i>"
                      ],
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    900:{
                        items:3,
                    }
                }          
            });
        },
           _treniSlider = function() {
            $(".tren-slider").owlCarousel({
                loop: true,
                center: true,
                nav: true,
                dots: false,
                margin: 30,
                navSpeed:500,
                navClass: ['nav-slider nav-prev', 'nav-slider nav-next'],
                navText: [
                      "<i class='icon-angle-left'></i>",
                      "<i class='icon-angle-right'></i>"
                      ],
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                responsiveClass:true,
                items:1,         
            });
        },
        _mobileMenu = function() {
            $('.nav-toggle').on('click', function(){
                    $('.nav-menu').toggleClass('nav-menu-active');
                });
                 // Hamburger to X toggle
                $('.nav-toggle').on('click', function() {
                    this.classList.toggle('active');
                });
        },
         _menuAccordion = function () {
            var acc = document.getElementsByClassName("qa-button");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].onclick = function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight){
                    panel.style.maxHeight = null;
                    } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                    } 
                }
            }
        },
        _disqusComments = function () {
            if(config.disqus_shortname !== '' && config.disqus_shortname !== null && config.disqus_shortname !== undefined){
             
                var disqus_shortname = config.disqus_shortname;
                (function() {
                    
                    var disqus_config = function () {
                        this.page.url = '{{url absolute="true"}}';
                        this.page.identifier = 'ghost-{{post.comment_id}}';
                    };
                    (function() {
                        var d = document, s = d.createElement('script');
                        s.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
                        s.setAttribute('data-timestamp', +new Date());
                        (d.head || d.body).appendChild(s);
                    })();
                    
                })();

                (function() {
                    var dsq = document.createElement('script'); dsq.id = 'dsq-count-scr'; dsq.async = true;
                    dsq.src = '//' + disqus_shortname + '.disqus.com/count.js';
                    (document.getElementsByTagName('body')[0]).appendChild(dsq);
                })();
            }
        },
        _instafeedJS = function () { 
            if(config.instagram_userId !== '' && config.instagram_userId !== null && config.instagram_userId !== undefined){
            
                var instagram_userId = config.instagram_userId;
                var instagram_accessToken = config.instagram_accessToken;

                (function() {
                    var userFeed = new Instafeed({
                    get: 'user',
                    limit: 12,
                    userId: instagram_userId,
                    accessToken: instagram_accessToken,
                    after: function() {
                        $('.owl-carousel').owlCarousel({
                            items:6,
                            loop:true,
                            dots: false,
                            autoplay:true,
                            autoplayTimeout:2000,
                            autoplayHoverPause:true
                        });
                    },
                    template: ' <div class="instafeed"><a class="animation" href="{{link}}"><div class="instafeed-img" style="background-image: url({{image}})"></div></a></div>',
                    });
                    userFeed.run();
                })(); 
            }
        },
        _fitVids = function () {
          
        // Start fitVids
        var $postContent = $(".treni-video, .tren-youtube");
        $postContent.fitVids();
        // End fitVids

        },
        _hightlightJS = function () {
            hljs.initHighlightingOnLoad();
        }
    
    return {
        /* greedly theme initialization */
        init: function() {
            _owlCarousel();
            _bookSlider();
            _treniSlider();
            _mobileMenu();
            _menuAccordion();
            _disqusComments();
            _instafeedJS();
            _fitVids();
            _hightlightJS();
        }
    };

})(jQuery);

/* greedly theme javascripts initialization */
(function() {

	'use strict';
	greedly.init();

})();