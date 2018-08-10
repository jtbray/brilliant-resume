/*
 * Template Name: Sunshine - Responsive vCard Template
 * Author: LMPixels
 * Author URL: http://themeforest.net/user/lmpixels
 * Version: 1.0
 */

var PageTransitions = function(a) {
  'use strict';

  function b() {
    function l() {
      n.removeClass('fadeOutLeft'), n.show(), n.addClass('fadeInLeft')
    }
    var m = location.hash.substr(1),
      n = a('#page-ajax-loaded'),
      o = a('#portfolio_grid figure a').each(function() {
        if (o = a(this).attr('href'), m == 'portfolio/' + o.substr(0, o.length - 5)) {
          var p = a(this).attr('href');
          return l(), n.load(p), !1
        }
      });
    a('.subpages .ajax-page-load').click(function() {
      a(this).attr('href');
      return window.location.hash = 'portfolio/' + a(this).attr('href').substr(0, a(this).attr('href').length - 5), !1
    })
  }

  function d(l) {
    return '' === location.hash ? l ? l : '#' + a('.pt-page-current').attr('data-id') : location.hash.split('/')[0]
  }

  function e(l) {
    if (!l.attr('data-animation')) return alert('Invalid attribute configuration. \n\n \'data-animation\' attribute not found'), !1;
    if (!l.attr('data-goto')) return alert('Invalid attribute configuration. \n\n \'data-goto\' attribute not found'), !1;
    var n, o, p, q, m = l.data('animation').toString();
    if (-1 != m.indexOf('-')) {
      var r = m.split('-');
      q = parseInt(r[Math.floor(Math.random() * r.length)])
    } else q = parseInt(m);
    if (67 < q) return alert('Transition.js : Invalid \'data-animation\' attribute configuration. Animation number should not be greater than 67'), !1;
    1 === q ? (o = 'pt-page-moveFromRight', p = 'pt-page-moveToLeft') : 2 === q ? (o = 'pt-page-moveFromLeft', p = 'pt-page-moveToRight') : 3 === q ? (o = 'pt-page-moveFromBottom', p = 'pt-page-moveToTop') : 4 === q ? (o = 'pt-page-moveFromTop', p = 'pt-page-moveToBottom') : 5 === q ? (o = 'pt-page-moveFromRight pt-page-ontop', p = 'pt-page-fade') : 6 === q ? (o = 'pt-page-moveFromLeft pt-page-ontop', p = 'pt-page-fade') : 7 === q ? (o = 'pt-page-moveFromBottom pt-page-ontop', p = 'pt-page-fade') : 8 === q ? (o = 'pt-page-moveFromTop pt-page-ontop', p = 'pt-page-fade') : 9 === q ? (o = 'pt-page-moveFromRightFade', p = 'pt-page-moveToLeftFade') : 10 === q ? (o = 'pt-page-moveFromLeftFade', p = 'pt-page-moveToRightFade') : 11 === q ? (o = 'pt-page-moveFromBottomFade', p = 'pt-page-moveToTopFade') : 12 === q ? (o = 'pt-page-moveFromTopFade', p = 'pt-page-moveToBottomFade') : 13 === q ? (o = 'pt-page-moveFromRight', p = 'pt-page-moveToLeftEasing pt-page-ontop') : 14 === q ? (o = 'pt-page-moveFromLeft', p = 'pt-page-moveToRightEasing pt-page-ontop') : 15 === q ? (o = 'pt-page-moveFromBottom', p = 'pt-page-moveToTopEasing pt-page-ontop') : 16 === q ? (o = 'pt-page-moveFromTop', p = 'pt-page-moveToBottomEasing pt-page-ontop') : 17 === q ? (o = 'pt-page-moveFromRight pt-page-ontop', p = 'pt-page-scaleDown') : 18 === q ? (o = 'pt-page-moveFromLeft pt-page-ontop', p = 'pt-page-scaleDown') : 19 === q ? (o = 'pt-page-moveFromBottom pt-page-ontop', p = 'pt-page-scaleDown') : 20 === q ? (o = 'pt-page-moveFromTop pt-page-ontop', p = 'pt-page-scaleDown') : 21 === q ? (o = 'pt-page-scaleUpDown pt-page-delay300', p = 'pt-page-scaleDown') : 22 === q ? (o = 'pt-page-scaleUp pt-page-delay300', p = 'pt-page-scaleDownUp') : 23 === q ? (o = 'pt-page-scaleUp', p = 'pt-page-moveToLeft pt-page-ontop') : 24 === q ? (o = 'pt-page-scaleUp', p = 'pt-page-moveToRight pt-page-ontop') : 25 === q ? (o = 'pt-page-scaleUp', p = 'pt-page-moveToTop pt-page-ontop') : 26 === q ? (o = 'pt-page-scaleUp', p = 'pt-page-moveToBottom pt-page-ontop') : 27 === q ? (o = 'pt-page-scaleUpCenter pt-page-delay400', p = 'pt-page-scaleDownCenter') : 28 === q ? (o = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop', p = 'pt-page-rotateRightSideFirst') : 29 === q ? (o = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop', p = 'pt-page-rotateLeftSideFirst') : 30 === q ? (o = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop', p = 'pt-page-rotateTopSideFirst') : 31 === q ? (o = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop', p = 'pt-page-rotateBottomSideFirst') : 32 === q ? (o = 'pt-page-flipInLeft pt-page-delay500', p = 'pt-page-flipOutRight') : 33 === q ? (o = 'pt-page-flipInRight pt-page-delay500', p = 'pt-page-flipOutLeft') : 34 === q ? (o = 'pt-page-flipInBottom pt-page-delay500', p = 'pt-page-flipOutTop') : 35 === q ? (o = 'pt-page-flipInTop pt-page-delay500', p = 'pt-page-flipOutBottom') : 36 === q ? (o = 'pt-page-scaleUp', p = 'pt-page-rotateFall pt-page-ontop') : 37 === q ? (o = 'pt-page-rotateInNewspaper pt-page-delay500', p = 'pt-page-rotateOutNewspaper') : 38 === q ? (o = 'pt-page-moveFromRight', p = 'pt-page-rotatePushLeft') : 39 === q ? (o = 'pt-page-moveFromLeft', p = 'pt-page-rotatePushRight') : 40 === q ? (o = 'pt-page-moveFromBottom', p = 'pt-page-rotatePushTop') : 41 === q ? (o = 'pt-page-moveFromTop', p = 'pt-page-rotatePushBottom') : 42 === q ? (o = 'pt-page-rotatePullRight pt-page-delay180', p = 'pt-page-rotatePushLeft') : 43 === q ? (o = 'pt-page-rotatePullLeft pt-page-delay180', p = 'pt-page-rotatePushRight') : 44 === q ? (o = 'pt-page-rotatePullBottom pt-page-delay180', p = 'pt-page-rotatePushTop') : 45 === q ? (o = 'pt-page-rotatePullTop pt-page-delay180', p = 'pt-page-rotatePushBottom') : 46 === q ? (o = 'pt-page-moveFromRightFade', p = 'pt-page-rotateFoldLeft') : 47 === q ? (o = 'pt-page-moveFromLeftFade', p = 'pt-page-rotateFoldRight') : 48 === q ? (o = 'pt-page-moveFromBottomFade', p = 'pt-page-rotateFoldTop') : 49 === q ? (o = 'pt-page-moveFromTopFade', p = 'pt-page-rotateFoldBottom') : 50 === q ? (o = 'pt-page-rotateUnfoldLeft', p = 'pt-page-moveToRightFade') : 51 === q ? (o = 'pt-page-rotateUnfoldRight', p = 'pt-page-moveToLeftFade') : 52 === q ? (o = 'pt-page-rotateUnfoldTop', p = 'pt-page-moveToBottomFade') : 53 === q ? (o = 'pt-page-rotateUnfoldBottom', p = 'pt-page-moveToTopFade') : 54 === q ? (o = 'pt-page-rotateRoomLeftIn', p = 'pt-page-rotateRoomLeftOut pt-page-ontop') : 55 === q ? (o = 'pt-page-rotateRoomRightIn', p = 'pt-page-rotateRoomRightOut pt-page-ontop') : 56 === q ? (o = 'pt-page-rotateRoomTopIn', p = 'pt-page-rotateRoomTopOut pt-page-ontop') : 57 === q ? (o = 'pt-page-rotateRoomBottomIn', p = 'pt-page-rotateRoomBottomOut pt-page-ontop') : 58 === q ? (o = 'pt-page-rotateCubeLeftIn', p = 'pt-page-rotateCubeLeftOut pt-page-ontop') : 59 === q ? (o = 'pt-page-rotateCubeRightIn', p = 'pt-page-rotateCubeRightOut pt-page-ontop') : 60 === q ? (o = 'pt-page-rotateCubeTopIn', p = 'pt-page-rotateCubeTopOut pt-page-ontop') : 61 === q ? (o = 'pt-page-rotateCubeBottomIn', p = 'pt-page-rotateCubeBottomOut pt-page-ontop') : 62 === q ? (o = 'pt-page-rotateCarouselLeftIn', p = 'pt-page-rotateCarouselLeftOut pt-page-ontop') : 63 === q ? (o = 'pt-page-rotateCarouselRightIn', p = 'pt-page-rotateCarouselRightOut pt-page-ontop') : 64 === q ? (o = 'pt-page-rotateCarouselTopIn', p = 'pt-page-rotateCarouselTopOut pt-page-ontop') : 65 === q ? (o = 'pt-page-rotateCarouselBottomIn', p = 'pt-page-rotateCarouselBottomOut pt-page-ontop') : 66 === q ? (o = 'pt-page-rotateSidesIn pt-page-delay200', p = 'pt-page-rotateSidesOut') : 67 === q ? (o = 'pt-page-rotateSlideIn', p = 'pt-page-rotateSlideOut') : void 0;
    var u, s = a('.subpages'),
      t = s.data('current'),
      v = s.children('section.pt-page'),
      w = v.length,
      x = !1,
      y = !1;
    if (n = parseInt(l.data('goto')), w >= n) {
      if (u = t, s.data('isAnimating')) return !1;
      s.data('isAnimating', !1);
      var z = v.eq(t);
      if (-1 == n ? t < w - 1 ? ++t : t = 0 : -2 == n ? 0 === t ? t = w - 1 : t <= w - 1 ? --t : t = 0 : t = n - 1, u != t) {
        s.data('current', t);
        var A = v.eq(t).addClass('pt-page-current');
        z.addClass(p).on(j, function() {
          z.off(j), x = !0, y && f(s, A, z)
        }), A.addClass(o).on(j, function() {
          A.off(j), y = !0, x && f(s, A, z)
        })
      } else s.data('isAnimating', !1)
    } else alert('Transition.js : Invalid \'data-goto\' attribute configuration.');
    k || f(z, A)
  }

  function f(l, m, n) {
    g(m, n), l.data('isAnimating', !1)
  }

  function g(l, m) {
    m.attr('class', m.data('originalClassList')), l.attr('class', l.data('originalClassList') + ' pt-page-current')
  }
  var j = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd',
      msAnimation: 'MSAnimationEnd',
      animation: 'animationend'
    }[Modernizr.prefixed('animation')],
    k = Modernizr.cssanimations;
  return {
    init: function(l) {
      a('.pt-page').each(function() {
        var q = a(this);
        q.data('originalClassList', q.attr('class'))
      }), a('.subpages').each(function() {
        var q = a(this);
        q.data('current', 0), q.data('isAnimating', !1), q.children('.pt-page').eq(0).addClass('pt-page-current')
      }), a('.pt-trigger').click(function() {
        var q = a(this);
        e(q), a(m + ' li').removeClass('active'), a(this.parentNode).addClass('active'), a('.pt-wrapper').animate({
          scrollTop: 0
        }, 300)
      }), window.onhashchange = function() {
        if (location.hash) {
          a(m + ' li').removeClass('active');
          var r = a(m + ' a[href*="' + location.hash.split('/')[0] + '"]'),
            s = r[0];
          s = a(s.parentNode), s.addClass('active'), e(r), a('.pt-wrapper').animate({
            scrollTop: 0
          }, 300), a('#page-ajax-loaded').addClass('fadeOutLeft'), a('#page-ajax-loaded > div').detach(), b()
        }
      };
      var m = l.menu,
        n = d();
      if ('' === location.hash && window.location.pathname === '/') {
        console.log(window.location);
        location.hash = n;
        var o = a(m + ' a[href*="' + location.hash.split('/')[0] + '"]'),
          p = o[0];
        p = a(p.parentNode), p.addClass('active')
      } else {
        var o = a(m + ' a[href*="' + n + '"]'),
          p = o[0];
        p = a(p.parentNode), p.addClass('active'), e(o)
      }
      a('#page').append('<div id="page-ajax-loaded" class="page-ajax-loaded animated fadeInLeft"></div>'), b(), a(document).on('click', '#portfolio-close-button', function() {
        a('#page-ajax-loaded').addClass('fadeOutLeft'), a('#page-ajax-loaded > div').detach()
      })
    }
  }
}(jQuery);
$(document).ready(function() {
  'use strict';
  var a = $('.subpages');
  a[0] && PageTransitions.init({
    menu: 'ul.site-main-menu'
  })
});
