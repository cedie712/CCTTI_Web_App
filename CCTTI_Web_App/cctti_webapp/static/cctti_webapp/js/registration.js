$('.carousel-control-prev').hide();

$(".carousel").carousel('pause');

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