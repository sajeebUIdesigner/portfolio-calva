$(document).ready(function(){


  // Start video gallary
    const lightbox = GLightbox({
      'href': 'https://www.youtube.com/watch?v=Ga6RYejo6Hk',
        'type': 'video',
        'source': 'youtube', //vimeo, youtube or local
        'width': 900,
        'autoplay': true,
    });

  // Start filtering
  // init Isotope
  var $grid = $('.portfolio-active').isotope({
    // options
  });
  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

    
  // jquery animated headlines
  $('.animate-clip').animatedHeadline({
    animationType: 'clip'
  });

});