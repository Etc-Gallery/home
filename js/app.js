(function () {

  window.ETC = {};
  var Router = Backbone.Router.extend({
    routes: {
      '': 'home',
      'about/etc-gallery': 'about',
      'about/us': 'bios',
      'about/this-site': 'colophon',
      'about/contacting-us': 'contact'
    }
  });
  ETC.router = new Router();
  ETC.router.on('route:home', function () {
    if ($('.overlays').hasClass('active')) {
      $('.overlays', '.overlay').removeClass('active'); 
    }
    if ($('.content').hasClass('blur')) {
      $('.content').removeClass('blur');
    }
  });

  var aboutRoute = function () {
    $('.gear-button-wrapper, .gear-persist-dropdown').removeClass('active');
    $('.overlay').removeClass('active');
    $('.content').addClass('blur');
    $('.overlays').addClass('active');
  };
  ETC.router.on('route:about', function () {
    aboutRoute();
    $('.about').addClass('active');
  });
  ETC.router.on('route:bios', function () {
    aboutRoute();
    $('.bios').addClass('active');
  });
  ETC.router.on('route:colophon', function () {
    aboutRoute();
    $('.colophon').addClass('active');
  });
  ETC.router.on('route:contact', function () {
    aboutRoute();
    $('.contact').addClass('active');
  });

  var loadSVGElements = function () {
    $('.svg-wrapper').load('images/chicago.svg');
    $('.gear-wrapper').load('images/gear.svg');
    $('.hamburger-wrapper').load('images/hamburger.svg');
    $('.x').load('images/x.svg');
    $('.title-wrapper').load('images/ampc.svg');
    $('.etc-gallery-wrapper').load('images/etc-gallery.svg');
  };
  var sizeCutoutHeight = function () {
    $('.cutout').eq(0).css('height', $(window).height());
  };

  $(document).ready(function () {

    $('.gear').on('click', function (e) {
      $('.gear, .gear-persist-dropdown').toggleClass('active');
    });
    $('.hamburger').on('click', function (e) {
      $('.hamburger, .hamburger-persist-dropdown').toggleClass('active');
    })

    loadSVGElements();
    sizeCutoutHeight();
    $(window).on('resize', sizeCutoutHeight);
    Backbone.history.start();


  });

})();
