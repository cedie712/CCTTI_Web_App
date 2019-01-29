if (window.innerWidth > 700) {
    $('.carousel-control-prev').hide();

    $(".carousel-control-next").click(function(){
      $(".carousel").carousel("next");
    });

    $(".carousel-control-prev").click(function(){
      $(".carousel").carousel("prev");
    });


    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
        curSlide = $('.active');
      if(curSlide.is( ':first-child' )) {
         $('.carousel-control-prev').hide();
         return;
      } else {
         $('.carousel-control-prev').show();
      }
      if (curSlide.is( ':last-child' )) {
         $('.carousel-control-next').hide();
         return;
      } else {
         $('.carousel-control-next').show();
      }
    });
}
else {

    $('.button-prev').hide();

    $(".button-next").click(function(){
      $(".carousel").carousel("next");
    });

    $(".button-prev").click(function(){
      $(".carousel").carousel("prev");
    });


    $('.carousel').carousel({
      wrap: false
    }).on('slid.bs.carousel', function () {
        curSlide = $('.active');
      if(curSlide.is( ':first-child' )) {
         $('.button-prev').hide();
         return;
      } else {
         $('.button-prev').show();
      }
      if (curSlide.is( ':last-child' )) {
         $('.button-next').hide();
         return;
      } else {
         $('.button-next').show();
      }
    });
}


