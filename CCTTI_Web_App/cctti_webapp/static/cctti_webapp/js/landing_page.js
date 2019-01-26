$(document).ready(function(){
    setTimeout(function () {
        $("#cookieConsent").fadeIn(200);
     }, 2000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        $("#cookieConsent").fadeOut(200);
    });
});

let bg_images = ['router.jpg', 'electronics.jpeg', 'tourism.jpg', 'tourusm2.jpeg',
    'b3.jpeg', 'bookeeping.jpeg', 'electronics2.jpeg'];
let indexer = 0;

setInterval(() => {
    let bg = document.getElementById('wrapper-landing-page');
    let image_url = 'static/cctti_webapp/website_photos/' + bg_images[indexer];
    bg.style.backgroundImage = `url(${image_url})`;
    if (indexer === (bg_images.length -1)) {
        indexer = 0;
    }
    else{
        indexer++;
    }
}, 5500);



if (window.location.hash) {
  $('html,body').animate({
  scrollTop: $(window.location.hash).offset().top
});
}

document.getElementById('staff-s').onclick = () => {
      $('html,body').animate({
      scrollTop: $("#tesda-block").offset().top
    });
};


ScrollReveal().reveal('.img-holder-1', {origin : 'left', delay: 200, distance : '120px', easing   : 'ease-in-out',
                        scale: 0.40 });
ScrollReveal().reveal('.img-holder-2', {delay: 300, distance : '120px', easing  : 'ease-in-out', scale: 0.50 });
ScrollReveal().reveal('.img-holder-3', {origin : 'right', delay: 400, distance : '120px', easing   : 'ease-in-out',
                        scale: 0.60});
