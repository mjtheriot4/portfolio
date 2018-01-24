// variables
var menu = $("aside");
var bug = $("div#bug");
var captionTrigger = $('i');
var windowHeight;

$(document).ready(function(){
  $('.image-link').magnificPopup({type:'image'});
  // $('.iframe-link').magnificPopup({type:'iframe'});
  $('.iframe-link').magnificPopup({type:
    'iframe',
    iframe: {
    markup: '<div class="mfp-iframe-scaler">'+
              '<div class="mfp-close"></div>'+
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
    patterns: {
      youtube: {
        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
        id: 'v=',
        pid: 'v=', // String that splits URL in a two parts, second part should be %id%
        // Or null - full URL will be returned
        // Or a function that should return %id%, for example:
        // id: function(url) { return 'parsed id'; }
        src: '//www.youtube.com/embed/%id%?&loop=1&playlist=%pid%' // URL that will be set as a source for iframe.
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
      // you may add here more sources
    },
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });
  galleries();
  // toggle side menu
  bug.click(function(){
    bug.children().toggleClass("open");
    menu.toggleClass("open");
  });
  // captionTrigger armed and ready
  captionTrigger.click(function(){
    $(this).toggleClass('fa-circle-o');
    $(this).toggleClass('fa-dot-circle-o');
    $(this).next().toggleClass('reveal');
  });
});

$(window).scroll(function(){
  //close side menu on scroll
  if(menu.hasClass('open')){
    menu.toggleClass('open');
    bug.children().toggleClass('open');
  }
  //close caption on scroll
  if (captionTrigger.hasClass('fa-dot-circle-o')){
    var openCT = $('i.fa-dot-circle-o')
    openCT.addClass('fa-circle-o');
    openCT.removeClass('fa-dot-circle-o');
    openCT.next().removeClass('reveal');
  }

  //mobile menu appears after Scroll past Top
  if ($(this).scrollTop() >= $(this).height()) {
      bug.addClass('down');
  } else {
      bug.removeClass('down');
  }
});
// for showing multiple images
function galleries() {
  $('#gallery1').magnificPopup({
    items: [
      {
        src: 'img/mary/mary-web-1.jpg',
        title: 'mary photo 01'
      },
      {
        src: 'img/mary/mary-web-2.jpg',
        title: 'mary photo 02'
      },
      {
        src: 'img/mary/mary-web-3.jpg',
        title: 'mary photo 03'
      },
      {
        src: 'img/mary/mary-web-4.jpg',
        title: 'mary photo 04'
      },
      {
        src: 'img/mary/mary-web-5.jpg',
        title: 'mary photo 05'
      },
      {
        src: 'img/mary/mary-web-6.jpg',
        title: 'mary photo 06'
      },
      {
        src: 'img/mary/mary-web-7.jpg',
        title: 'mary photo 07'
      },
      {
        src: 'img/mary/mary-web-8.jpg',
        title: 'mary photo 08'
      },
      {
        src: 'img/mary/mary-web-9.jpg',
        title: 'mary photo 09'
      },
      {
        src: 'img/mary/mary-web-10.jpg',
        title: 'mary photo 10'
      },
      {
        src: 'img/mary/mary-web-11.jpg',
        title: 'mary photo 11'
      },
      {
        src: 'img/mary/mary-web-12.jpg',
        title: 'mary photo 12'
      },
      {
        src: 'img/mary/mary-web-13.jpg',
        title: 'mary photo 13'
      },
      {
        src: 'img/mary/mary-web-14.jpg',
        title: 'mary photo 14'
      },
      {
        src: 'img/mary/mary-web-15.jpg',
        title: 'mary photo 15'
      },
      {
        src: 'img/mary/mary-web-16.jpg',
        title: 'mary photo 16'
      },
      {
        src: 'img/mary/mary-web-17.jpg',
        title: 'mary photo 17'
      },
      {
        src: 'img/mary/mary-web-18.jpg',
        title: 'mary photo 18'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#gallery2').magnificPopup({
    items: [
      {
        src: 'img/newyork/ny-01.jpg',
        title: 'Manhattan 01'
      },
      {
        src: 'img/newyork/ny-02.jpg',
        title: 'Manhattan 02'
      },
      {
        src: 'img/newyork/ny-03.jpg',
        title: 'Manhattan 03'
      },
      {
        src: 'img/newyork/ny-04.jpg',
        title: 'Manhattan 04'
      },
      {
        src: 'img/newyork/ny-05.jpg',
        title: 'Manhattan 05'
      },
      {
        src: 'img/newyork/ny-06.jpg',
        title: 'Manhattan 06'
      },
      {
        src: 'img/newyork/ny-07.jpg',
        title: 'Manhattan 07'
      },
      {
        src: 'img/newyork/ny-08.jpg',
        title: 'Manhattan 08'
      },
      {
        src: 'img/newyork/ny-09.jpg',
        title: 'Manhattan 09'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#gallery3').magnificPopup({
    items: [
      {
        src: 'img/caravaggio/Caravaggio01.jpg',
        title: 'Caravaggio 01'
      },
      {
        src: 'img/caravaggio/Caravaggio02.jpg',
        title: 'Caravaggio 02'
      },
      {
        src: 'img/caravaggio/Caravaggio03.jpg',
        title: 'Caravaggio 03'
      },
      {
        src: 'img/caravaggio/Caravaggio04.jpg',
        title: 'Caravaggio 04'
      },
      {
        src: 'img/caravaggio/Caravaggio05.jpg',
        title: 'Caravaggio 05'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
  $('#gallery4').magnificPopup({
    items: [
      {
        src: 'img/roco-cs/confined-space_1.jpg',
        title: 'confined space 01'
      },
      {
        src: 'img/roco-cs/confined-space_2.jpg',
        title: 'confined space 02'
      },
      {
        src: 'img/roco-cs/confined-space_3.jpg',
        title: 'confined space 03'
      },
      {
        src: 'img/roco-cs/confined-space_4.jpg',
        title: 'confined space 04'
      },
      {
        src: 'img/roco-cs/confined-space_5.jpg',
        title: 'confined space 05'
      },
      {
        src: 'img/roco-cs/confined-space_6.jpg',
        title: 'confined space 06'
      }
    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is a default type
  });
}
