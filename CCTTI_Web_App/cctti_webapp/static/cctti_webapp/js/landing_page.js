
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

